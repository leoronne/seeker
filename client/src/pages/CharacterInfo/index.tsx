/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Redirect, useParams, useHistory } from 'react-router-dom';

import { LoaderSpinner } from '../../components';

import { CharacterData } from '../../@types';

import api from '../../services/api';

import { Container, Header, Main, ReturnIcon, LinkIcon, TableInfo, Row, EditIcon, LikeIcon } from './styles';

const CharacterInfo: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

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

      setCharData(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
      history.push('/');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData(id);
  }, [id]);

  const handleFave = useCallback(() => {
    setIsFave(!isFave);
  }, [isFave]);

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
            <LikeIcon fillColor={isFave ? 'red' : 'white'} strokeColor={isFave ? 'red' : 'var(--color-primary)'} />
          </div>
        </div>
      </Header>

      <hr />
      <Main>
        <Row>
          <div className="bio">
            {charData?.image?.original_url && <img src={charData?.image?.original_url} alt={charData?.name} />}

            <p>{charData?.deck}</p>
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

                <tr>
                  <td className="column-header">
                    <strong>{t('real_name')}</strong>
                  </td>
                  <td>{charData?.real_name}</td>
                </tr>

                <tr>
                  <td className="column-header">
                    <strong>{t('aliases')}</strong>
                  </td>
                  <td>{charData?.aliases}</td>
                </tr>

                <tr>
                  <td className="column-header">
                    <strong>{t('publisher')}</strong>
                  </td>
                  <td>{charData?.publisher.name}</td>
                </tr>

                <tr>
                  <td className="column-header">
                    <strong>{t('creators')}</strong>
                  </td>
                  <td>
                    {charData?.creators.map((creator, index) => {
                      return (
                        <>
                          {index > 0 && ', '}
                          <a href={creator.site_detail_url} target="_blank" rel="noopener noreferrer">
                            {creator.name}
                          </a>
                        </>
                      );
                    })}
                  </td>
                </tr>

                <tr>
                  <td className="column-header">
                    <strong>{t('gender')}</strong>
                  </td>
                  <td>{t(`gender-${charData?.gender}`)}</td>
                </tr>

                <tr>
                  <td className="column-header">
                    <strong>{t('origin')}</strong>
                  </td>
                  <td>{charData?.origin?.name}</td>
                </tr>

                <tr>
                  <td className="column-header">
                    <strong>{t('appearances')}</strong>
                  </td>
                  <td>{`${charData?.count_of_issue_appearances} ${t('issues')}`} </td>
                </tr>

                <tr>
                  <td className="column-header">
                    <strong>{t('birth')}</strong>
                  </td>
                  <td>{charData?.birth ? charData?.birth : 'n/a'}</td>
                </tr>

                <tr>
                  <td className="column-header">
                    <strong>{t('powers')}</strong>
                  </td>
                  <td>{charData?.powers.map((power, index) => `${index > 0 ? ', ' : ''}${power.name}`)}</td>
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
