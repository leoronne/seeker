import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import CharacterCard from './CharacterCard';
import PaginationArea from './PaginationArea';

import api from '../../services/api';
import { editCharacter } from '../../store/modules/edittedCharacters/actions';

import { LoaderSpinner } from '../../components';

import { charactersResponse } from '../../__mocks__';
import { CharacterData } from '../../@types';
import { IState } from '../../store';

import { TextField, ButtonOutlined, StyledCheckbox } from '../../styles/MaterialUI';

import { Container, Content, Form, Row, SearchIcon, Main, Header } from './styles';

const Homepage: React.FC = () => {
  document.title = `Seeker`;
  const { NODE_ENV } = process.env;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const edittedCharacters = useSelector<IState, CharacterData[]>(state => state.edittedCharacters);
  const { enqueueSnackbar } = useSnackbar();

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const [targetPage, setTargetPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(NODE_ENV === 'test' ? charactersResponse.results.length : 0);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [offset, setOffset] = useState(0);

  const [characters, setCharacters] = useState<CharacterData[]>(NODE_ENV === 'test' ? charactersResponse.results : []);

  const loadData = useCallback(
    async (filter: string, page: number = offset, limit: number = recordsPerPage) => {
      try {
        if (!showFavorites) {
          setLoading(true);
          const sortQuery = `&sort=${encodeURI('date_added:asc')}`;
          const offsetQuery = `&offset=${page}`;
          const limitQuery = `&limit=${limit}`;
          const filterQuery = filter && `&filter=name:${encodeURI(filter)}`;
          const response = await api.get(`characters?${sortQuery}${offsetQuery}${limitQuery}${filterQuery}`);
          const { data } = response;
          const { results } = data;

          const formatedResults = results.map((character: CharacterData) => {
            const char_is_on_state = edittedCharacters.findIndex(favorite => favorite.id === character.id);

            if (char_is_on_state >= 0) {
              return edittedCharacters[char_is_on_state];
            }
            return character;
          });

          setTotalRecords(data?.number_of_total_results);
          setCharacters(formatedResults);
        }
      } catch (err) {
        enqueueSnackbar(err?.response?.data?.error ? err.response.data.error : err.message, { variant: 'error' });
      } finally {
        setLoading(false);
      }
    },
    [showFavorites]
  );

  const loadFavorites = useCallback(
    async (page: number, limit: number) => {
      let oldEdittedCharacters = edittedCharacters || [];

      if (search) {
        oldEdittedCharacters = oldEdittedCharacters.filter(character => character.name === search);
      }

      setCharacters(oldEdittedCharacters.slice(page, limit + page));
      setTotalRecords(oldEdittedCharacters.length);
    },
    [search, edittedCharacters]
  );

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      if (!showFavorites) await loadData(search, offset, recordsPerPage);
      else loadFavorites(offset, recordsPerPage);
    },
    [search, showFavorites, offset, recordsPerPage]
  );

  useEffect(() => {
    if (NODE_ENV !== 'test') loadData('');
  }, [loadData]);

  const changeRecordsPerPage = useCallback(
    async (value: number) => {
      setRecordsPerPage(value);
      if (!showFavorites) await loadData(search, offset, value);
      else loadFavorites(offset, value);
    },
    [offset, search, showFavorites, loadData, loadFavorites]
  );

  const setCurrentPage = useCallback(
    async (page: number) => {
      const tempOffset = (page - 1) * recordsPerPage;

      setOffset(tempOffset);
      setTargetPage(page);

      if (NODE_ENV !== 'test') {
        if (!showFavorites) await loadData(search, tempOffset);
        else loadFavorites(tempOffset, recordsPerPage);
      }
    },
    [recordsPerPage, showFavorites, loadData, loadFavorites]
  );

  const handleFave = useCallback(
    (isFave: boolean, charData: CharacterData, index: number) => {
      dispatch(editCharacter(charData, !isFave));

      const updatedCharacters = characters;
      updatedCharacters[index] = {
        ...charData,
        is_fave: !isFave,
      };

      setCharacters(updatedCharacters);
    },
    [dispatch, characters]
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
              inputProps={{ maxLength: 150, 'data-testid': 'search-input' }}
              label={t('search')}
            />

            <ButtonOutlined type={!loading ? 'submit' : 'button'} disabled={loading} data-testid="submit-button">
              <div>{loading ? <CircularProgress size={15} style={{ color: '#ccc' }} /> : <SearchIcon />}</div>
            </ButtonOutlined>
          </Row>

          <Row>
            <div className="checkbox">
              <StyledCheckbox checked={showFavorites} onChange={() => setShowFavorites(!showFavorites)} inputProps={{ placeholder: t('show-favorites') }} />
              <span className="checkbox-span">{t('show-favorites')}</span>
            </div>
          </Row>
        </Form>

        <Main>
          <Header>
            <div className="results">
              <p>
                {`${t('results-1')} `}
                <strong data-testid="number-of-results">{Intl.NumberFormat('en-US').format(Number(totalRecords))}</strong>
                {` ${t('results-2')}`}
              </p>
            </div>
          </Header>

          <hr />

          {loading ? <LoaderSpinner color="#7467D3" /> : <CharacterCard data={characters} handleFave={handleFave} />}

          <PaginationArea
            totalRecords={totalRecords}
            recordsPerPage={recordsPerPage}
            targetPage={targetPage}
            setRecordsPerPage={changeRecordsPerPage}
            setCurrentPage={setCurrentPage}
            setOffset={setOffset}
          />
        </Main>
      </Content>
    </Container>
  );
};

export default Homepage;
