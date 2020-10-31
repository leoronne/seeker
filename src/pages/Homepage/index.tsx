import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@material-ui/core';

import { TextField, ButtonOutlined, StyledCheckbox } from '../../styles/MaterialUI';

import { Container, Content, Form, Row, SearchIcon } from './styles';

const Homepage: React.FC = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleSubmit = useCallback(e => {
    try {
      e.preventDefault();
      setLoading(true);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

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
            <StyledCheckbox checked={showFavorites} onChange={() => setShowFavorites(!showFavorites)} />
            <span className="checkbox-span">{t('show-favorites')}</span>
          </Row>
        </Form>
      </Content>
    </Container>
  );
};

export default Homepage;
