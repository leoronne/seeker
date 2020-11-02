import React from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '@material-ui/core';

import { Paginator } from '../../../components';

import { useStyles, Select, FormControl, InputLabel } from '../../../styles/MaterialUI';

import { Container } from './styles';

interface Props {
  totalRecords: number;
  recordsPerPage: number;
  targetPage: number;
  setRecordsPerPage: (value: number) => Promise<void>;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPage: (page: number) => Promise<void>;
}

const PaginationArea: React.FC<Props> = ({ totalRecords, recordsPerPage, targetPage, setRecordsPerPage, setOffset, setCurrentPage }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Container>
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
            inputProps={{ 'data-testid': 'records-per-page-select' }}
          >
            <MenuItem value="10">{`10 ${t('results-2')}`}</MenuItem>
            <MenuItem value="50">{`50 ${t('results-2')}`}</MenuItem>
            <MenuItem value="100">{`100 ${t('results-2')}`}</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Container>
  );
};

export default PaginationArea;
