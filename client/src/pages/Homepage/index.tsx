import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CircularProgress, MenuItem } from '@material-ui/core';

import api from '../../services/api';

import { LoaderSpinner, Paginator } from '../../components';

import { CharacterData } from '../../@types';

import { useStyles, TextField, ButtonOutlined, StyledCheckbox, Select, FormControl, InputLabel } from '../../styles/MaterialUI';

import { Container, Content, Form, Row, SearchIcon, Main, Header, PaginationArea, CharacterCard, LinkIcon, LikeIcon } from './styles';

const Homepage: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const [targetPage, setTargetPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [offset, setOffset] = useState(0);

  const [characters, setCharacters] = useState<CharacterData[]>([]);

  const loadData = useCallback(
    async (filter: string) => {
      try {
        setLoading(true);
        const sortQuery = `&sort=${encodeURI('date_added:asc')}`;
        const offsetQuery = `&offset=${offset}`;
        const limitQuery = `&limit=${recordsPerPage}`;
        const filterQuery = filter && `&filter=name:${encodeURI(filter)}`;
        const response = await api.get(`characters?${sortQuery}${offsetQuery}${limitQuery}${filterQuery}`);
        const { data } = response;
        setTotalRecords(data?.number_of_total_results);
        setCharacters(data?.results);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err.message);
        // notify(err?.response?.data?.error ? err.response.data.error : err.message, 'error');
      } finally {
        setLoading(false);
      }
    },
    [offset, recordsPerPage]
  );

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      await loadData(search);
    },
    [search]
  );

  useEffect(() => {
    loadData('');
  }, [loadData]);

  const setCurrentPage = useCallback(
    async (page: number) => {
      let tempOffset = 0;

      tempOffset = (page - 1) * recordsPerPage;

      setOffset(tempOffset);
      setTargetPage(page);
    },
    [recordsPerPage]
  );

  return (
    <Container>
      <Content>
        <Form onSubmit={e => handleSubmit(e)}>
          <Row>
            <TextField
              autoFocus
              value={search}
              name="search"
              type="text"
              variant="outlined"
              onChange={e => {
                setSearch(e.target.value);
              }}
              inputProps={{ maxLength: 150 }}
              label={t('search')}
            />

            <ButtonOutlined type={!loading ? 'submit' : 'button'} disabled={loading}>
              <div>{loading ? <CircularProgress size={15} style={{ color: '#ccc' }} /> : <SearchIcon />}</div>
            </ButtonOutlined>
          </Row>

          <Row>
            <div className="checkbox">
              <StyledCheckbox checked={showFavorites} onChange={() => setShowFavorites(!showFavorites)} />
              <span className="checkbox-span">{t('show-favorites')}</span>
            </div>
          </Row>
        </Form>

        <Main>
          <Header>
            <div className="results">
              <p>
                {`${t('results-1')} `}
                <strong>{totalRecords}</strong>
                {` ${t('results-2')}`}
              </p>

              <p>
                <strong>3</strong>
                {` ${t('results-3')}`}
              </p>
            </div>
          </Header>

          <hr />

          {loading ? (
            <LoaderSpinner color="#7467D3" />
          ) : (
            <div className="characters-container">
              {characters.map(character => {
                return (
                  <CharacterCard>
                    <div className="left">
                      <Link target="_blank" rel="noopener noreferrer" to={`/info/4005-${character?.id}`}>
                        <img src={character?.image.icon_url} alt={character?.name} key={character?.id} />
                      </Link>

                      <div className="info">
                        <p>
                          <Link target="_blank" rel="noopener noreferrer" to={`/info/4005-${character?.id}`} className="navigation-links">
                            <strong>{character?.name}</strong>
                          </Link>
                        </p>
                        {character?.publisher?.name && <p className="publisher">{character?.publisher?.name}</p>}
                      </div>
                    </div>

                    <div className="right">
                      <span className="link-button">
                        <LikeIcon fillColor={character.isFave ? 'red' : 'white'} strokeColor={character.isFave ? 'red' : 'var(--color-primary)'} />
                      </span>

                      <Link target="_blank" rel="noopener noreferrer" to={`/info/4005-${character?.id}`}>
                        <LinkIcon />
                      </Link>
                    </div>
                  </CharacterCard>
                );
              })}
            </div>
          )}

          <PaginationArea>
            <div className="pagination">
              <Paginator totalRecords={totalRecords} recordsPerPage={recordsPerPage} setOffset={setOffset} currentPage={targetPage} setCurrentPage={setCurrentPage} />
            </div>

            <div className="view">
              <FormControl variant="outlined">
                <InputLabel>{t('show')}</InputLabel>

                <Select
                  value={recordsPerPage}
                  onChange={e => setRecordsPerPage(Number(e.target.value))}
                  label={t('show')}
                  MenuProps={{ classes: { paper: classes.selectOptions } }}
                >
                  <MenuItem value="10">{`10 ${t('results-2')}`}</MenuItem>
                  <MenuItem value="50">{`50 ${t('results-2')}`}</MenuItem>
                  <MenuItem value="100">{`100 ${t('results-2')}`}</MenuItem>
                </Select>
              </FormControl>
            </div>
          </PaginationArea>
        </Main>
      </Content>
    </Container>
  );
};

export default Homepage;
