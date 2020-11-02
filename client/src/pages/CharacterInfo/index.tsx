/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useCallback, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Redirect, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { Formik } from 'formik';
import { CircularProgress, MenuItem } from '@material-ui/core';

import { LoaderSpinner } from '../../components';

import { characterResponse } from '../../__mocks__';
import { CharacterData } from '../../@types';
import { IState } from '../../store';

import api from '../../services/api';
import { editCharacter } from '../../store/modules/edittedCharacters/actions';

import { useStyles, FormControl, InputLabel, Select, TextField, ButtonOutlined } from '../../styles/MaterialUI';
import { Container, Header, Main, ReturnIcon, LinkIcon, TableInfo, Form, EditIcon, LikeIcon, CancelIcon } from './styles';

interface FormikProps {
  name: string;
  real_name: string;
  aliases: string;
  origin: string;
  gender: number;
  publisher: string;
  count_of_issue_appearances: number | string;
  birth: string;
}

const CharacterInfo: React.FC = () => {
  const { NODE_ENV } = process.env;

  const { t } = useTranslation();
  const { id } = process.env.NODE_ENV === 'test' ? { id: '4005-51713' } : useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const edittedCharacters = useSelector<IState, CharacterData[]>(state => state.edittedCharacters);
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [isFave, setIsFave] = useState(false);
  const [edit, setEdit] = useState(true);
  const [charData, setCharData] = useState<CharacterData>(NODE_ENV === 'test' ? characterResponse : ({} as CharacterData));

  const formRef = useRef(null);

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
    if (NODE_ENV !== 'test') loadData(id);
  }, [loadData, id]);

  const handleFave = useCallback(() => {
    dispatch(editCharacter(charData, !isFave));
    setIsFave(!isFave);
  }, [isFave, dispatch, charData]);

  const cancelEdit = useCallback(
    (setValue: (field: string, value: string | number | null, shouldValidate?: boolean | undefined) => void) => {
      setEdit(true);
      setValue('name', charData?.name || '');
      setValue('real_name', charData?.real_name || '');
      setValue('aliases', charData?.aliases || '');
      setValue('origin', charData?.origin?.name || '');
      setValue('gender', charData?.gender || 0);
      setValue('publisher', charData?.publisher?.name || '');
      setValue('count_of_issue_appearances', `${charData?.count_of_issue_appearances} ${t('issues')}` || '');
      setValue('birth', charData?.birth || '');
    },
    [charData]
  );

  const saveEdit = useCallback(
    (values: FormikProps) => {
      try {
        setEdit(true);
        const character: CharacterData = {
          name: values.name,
          real_name: values.real_name,
          aliases: values.aliases,
          publisher: {
            api_detail_url: charData?.publisher?.api_detail_url || '',
            name: values.publisher,
            id: charData?.publisher?.id || 0,
          },
          gender: values.gender,
          origin: {
            api_detail_url: charData?.origin?.api_detail_url || '',
            name: values.origin,
            id: charData?.origin?.id || 0,
          },
          count_of_issue_appearances: values.count_of_issue_appearances,
          birth: values.birth,

          id: charData?.id,
          image: charData?.image,
          api_detail_url: charData?.api_detail_url,
          deck: charData?.deck,
          is_fave: charData?.is_fave,
          site_detail_url: charData?.site_detail_url,
        };
        setCharData(character);
        dispatch(editCharacter(character, isFave));

        enqueueSnackbar(t('success-edit'), { variant: 'success' });
      } catch (err) {
        enqueueSnackbar(err?.response?.data?.error ? err.response.data.error : err.message, { variant: 'error' });
      }
    },
    [charData, isFave]
  );

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

        <h1 data-testid="character-name">{charData?.name}</h1>

        <a href={charData?.site_detail_url} target="_blank" rel="noopener noreferrer" className="link-button">
          <LinkIcon />
        </a>
      </Header>

      <hr />
      <Main>
        <Formik
          initialValues={{
            name: charData?.name || '',
            real_name: charData?.real_name || '',
            aliases: charData?.aliases || '',
            origin: charData?.origin?.name || '',
            gender: charData?.gender || 0,
            publisher: charData?.publisher?.name || '',
            count_of_issue_appearances: charData?.count_of_issue_appearances || 0,
            birth: charData?.birth || '',
          }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            saveEdit(values);
            setSubmitting(false);
          }}
        >
          {}
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
            <Form onSubmit={handleSubmit} ref={formRef}>
              <div className="bio">
                {charData?.image?.original_url && <img src={charData?.image?.original_url} alt={charData?.name} />}

                {charData?.deck && <p>{charData?.deck}</p>}

                <div className="header-right">
                  {edit ? (
                    <div className="hover-button" onClick={() => setEdit(!edit)} data-testid="edit-button">
                      <EditIcon />
                    </div>
                  ) : (
                    <div className="hover-button" onClick={() => cancelEdit(setFieldValue)} data-testid="cancel-button">
                      <CancelIcon />
                    </div>
                  )}

                  <div className="hover-button" onClick={() => handleFave()} data-testid="favorite-button">
                    <LikeIcon fillcolor={isFave ? 'red' : 'white'} strokecolor={isFave ? 'red' : 'var(--color-primary)'} data-testid={`heart-svg-${isFave}`} />
                  </div>
                </div>
              </div>

              <TableInfo>
                <div className="field">
                  <TextField
                    error={!!(touched.name && errors.name)}
                    disabled={edit}
                    name="name"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    label={t('super_name')}
                    inputProps={{ maxLength: 40, 'data-testid': 'name-input' }}
                    helperText={touched.name && errors.name ? errors.name : ''}
                  />
                </div>

                <div className="field">
                  <TextField
                    error={!!(touched.real_name && errors.real_name)}
                    disabled={edit}
                    name="real_name"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.real_name}
                    label={t('real_name')}
                    helperText={touched.real_name && errors.real_name ? errors.real_name : ''}
                  />
                </div>

                <div className="field">
                  <TextField
                    error={!!(touched.publisher && errors.publisher)}
                    disabled={edit}
                    name="publisher"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.publisher}
                    label={t('publisher')}
                    helperText={touched.publisher && errors.publisher ? errors.publisher : ''}
                  />
                </div>

                <div className="field">
                  <TextField
                    error={!!(touched.aliases && errors.aliases)}
                    disabled={edit}
                    name="aliases"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.aliases}
                    label={t('aliases')}
                    helperText={touched.aliases && errors.aliases ? errors.aliases : ''}
                  />
                </div>

                <div className="field">
                  <TextField
                    error={!!(touched.origin && errors.origin)}
                    disabled={edit}
                    name="origin"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.origin}
                    label={t('origin')}
                    helperText={touched.origin && errors.origin ? errors.origin : ''}
                  />
                </div>

                <div className="field">
                  <FormControl variant="outlined">
                    <InputLabel>{t('gender')}</InputLabel>

                    <Select
                      name="gender"
                      disabled={edit}
                      value={values.gender}
                      onChange={e => setFieldValue('gender', Number(e.target.value))}
                      label={t('gender')}
                      MenuProps={{ classes: { paper: classes.selectOptions } }}
                    >
                      <MenuItem value={0}>{t(`gender-0`)}</MenuItem>
                      <MenuItem value={1}>{t(`gender-1`)}</MenuItem>
                      <MenuItem value={2}>{t(`gender-2`)}</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="field">
                  <TextField
                    error={!!(touched.birth && errors.birth)}
                    disabled={edit}
                    name="birth"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birth}
                    label={t('birth')}
                    helperText={touched.birth && errors.birth ? errors.birth : ''}
                  />
                </div>

                <div className="field">
                  <TextField
                    error={!!(touched.count_of_issue_appearances && errors.count_of_issue_appearances)}
                    disabled={edit}
                    name="count_of_issue_appearances"
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.count_of_issue_appearances}
                    label={t('appearances')}
                    helperText={touched.count_of_issue_appearances && errors.count_of_issue_appearances ? errors.count_of_issue_appearances : ''}
                  />
                </div>
              </TableInfo>

              {!edit && (
                <ButtonOutlined type={!loading ? 'submit' : 'button'} disabled={loading} data-testid="submit-button">
                  {loading ? (
                    <div>
                      <CircularProgress size={15} style={{ color: '#ccc' }} />
                    </div>
                  ) : (
                    <span>{t('save')}</span>
                  )}
                </ButtonOutlined>
              )}
            </Form>
          )}
        </Formik>
      </Main>
    </Container>
  );
};

export default CharacterInfo;
