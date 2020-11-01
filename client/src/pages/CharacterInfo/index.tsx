/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Redirect, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';

import { LoaderSpinner } from '../../components';

import { CharacterData } from '../../@types';
import { IState } from '../../store';

import api from '../../services/api';
import { editCharacter } from '../../store/modules/edittedCharacters/actions';

import { Container, Header, Main, ReturnIcon, LinkIcon, TableInfo, Row, EditIcon, LikeIcon } from './styles';

const CharacterInfo: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const edittedCharacters = useSelector<IState, CharacterData[]>(state => state.edittedCharacters);
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(true);
  const [isFave, setIsFave] = useState(false);
  const [charData, setCharData] = useState<CharacterData>({} as CharacterData);

  if (!id) {
    return <Redirect to="/" />;
  }

  const loadData = useCallback(async (charId: string) => {
    try {
      setLoading(true);
      const response = await api.get(`/characters/${charId}`);
      const { data } = response;

      if (!data) {
        history.push('/not-found');
      }

      const char_is_on_state = edittedCharacters.findIndex(favorite => favorite.id === data.id);
      if (char_is_on_state >= 0) {
        setCharData(edittedCharacters[char_is_on_state]);
        setIsFave(edittedCharacters[char_is_on_state]?.is_fave);
      } else setCharData(data);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.error ? err.response.data.error : err.message, { variant: 'error' });
      history.push('/');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData(id);
  }, [id]);

  const handleFave = useCallback(() => {
    dispatch(editCharacter(charData, !isFave));
    setIsFave(!isFave);
  }, [isFave, dispatch, charData]);

  if (loading) {
    return <LoaderSpinner color="#fff" />;
  }

  if (charData?.name) {
    document.title = `${charData?.name} - Seeker`;
  }

  return (
    <Container>
      <Header>
        <Link to="/">
          <ReturnIcon />
        </Link>

        <h1>{charData?.name}</h1>

        <a href={charData?.site_detail_url} target="_blank" rel="noopener noreferrer" className="link-button">
          <LinkIcon />
        </a>

        <div className="header-right">
          <div className="hover-button">
            <EditIcon />
          </div>

          <div className="hover-button" onClick={() => handleFave()}>
            <LikeIcon fillcolor={isFave ? 'red' : 'white'} strokecolor={isFave ? 'red' : 'var(--color-primary)'} />
          </div>
        </div>
      </Header>

      <hr />
      <Main>
        <Row>
          <div className="bio">
            {charData?.image?.original_url && <img src={charData?.image?.original_url} alt={charData?.name} />}

            {charData?.deck && <p>{charData?.deck}</p>}
          </div>

          <TableInfo>
            <table>
              <tbody>
                <tr>
                  <td className="column-header">
                    <strong>{t('super_name')}</strong>
                  </td>
                  <td>{charData?.name}</td>
                </tr>

                {charData?.real_name && (
                  <tr>
                    <td className="column-header">
                      <strong>{t('real_name')}</strong>
                    </td>
                    <td>{charData?.real_name}</td>
                  </tr>
                )}

                {charData?.aliases && (
                  <tr>
                    <td className="column-header">
                      <strong>{t('aliases')}</strong>
                    </td>
                    <td>{charData?.aliases}</td>
                  </tr>
                )}

                {charData?.publisher?.name && (
                  <tr>
                    <td className="column-header">
                      <strong>{t('publisher')}</strong>
                    </td>
                    <td>{charData?.publisher?.name}</td>
                  </tr>
                )}

                {charData?.gender && (
                  <tr>
                    <td className="column-header">
                      <strong>{t('gender')}</strong>
                    </td>
                    <td>{t(`gender-${charData?.gender}`)}</td>
                  </tr>
                )}

                {charData?.origin?.name && (
                  <tr>
                    <td className="column-header">
                      <strong>{t('origin')}</strong>
                    </td>
                    <td>{charData?.origin?.name}</td>
                  </tr>
                )}

                {charData?.count_of_issue_appearances && (
                  <tr>
                    <td className="column-header">
                      <strong>{t('appearances')}</strong>
                    </td>
                    <td>{`${charData?.count_of_issue_appearances} ${t('issues')}`} </td>
                  </tr>
                )}

                <tr>
                  <td className="column-header">
                    <strong>{t('birth')}</strong>
                  </td>
                  <td>{charData?.birth ? charData?.birth : 'n/a'}</td>
                </tr>
              </tbody>
            </table>
          </TableInfo>
        </Row>
      </Main>
    </Container>
  );
};

export default CharacterInfo;
