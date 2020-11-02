/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useMediaQuery } from '@material-ui/core';

import { Container } from './styles';

function paginate(totalItems: number, currentPage = 1, pageSize = 15, maxPages = 15) {
  const totalPages = Math.ceil(totalItems / pageSize);

  const getActualPage = () => {
    if (currentPage < 1) {
      return 1;
    }

    if (currentPage > totalPages) {
      return totalPages;
    }

    return currentPage;
  };

  const actualPage = getActualPage();

  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > maxPages) {
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

    if (actualPage <= maxPagesBeforeCurrentPage) {
      endPage = maxPages;
    } else if (actualPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPages + 1;
    } else {
      startPage = actualPage - maxPagesBeforeCurrentPage;
      endPage = actualPage + maxPagesAfterCurrentPage;
    }
  }

  const startIndex = (actualPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i);

  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages,
  };
}

interface Props {
  totalRecords: number;
  recordsPerPage: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: (page: number) => Promise<void>;
}

const Paginator: React.FC<Props> = ({ totalRecords = 1, recordsPerPage = 1, currentPage = 1, setCurrentPage }) => {
  const width = useMediaQuery('(max-width: 568px)');

  const maxPages = width ? 2 : 5;

  const pages = paginate(totalRecords, currentPage, recordsPerPage, maxPages);

  let lines = [];

  if (pages.totalPages > 1) {
    lines = pages.pages.map(page => {
      return (
        <div
          key={page}
          className={page === currentPage ? 'current' : 'page'}
          onClick={() => setCurrentPage(page)}
          data-testid={`${page === currentPage ? 'page-active' : `page-${page}`}`}
        >
          {page}
        </div>
      );
    });
  } else {
    lines.push(
      <div className="current" onClick={() => setCurrentPage(1)} key={1}>
        1
      </div>
    );
  }

  return (
    <Container>
      <div
        className={`page${currentPage === 1 ? ' page-disabled' : ''}`}
        onClick={() => {
          if (currentPage > 1 && pages.totalPages > 0) setCurrentPage(currentPage - 1);
        }}
        data-testid="previous-page"
      >
        {'<'}
      </div>
      {lines}
      <div
        className={`page${pages.totalPages === currentPage || pages.totalPages === 0 ? ' page-disabled' : ''}`}
        onClick={() => {
          if (pages.totalPages !== currentPage && pages.totalPages > 0) setCurrentPage(currentPage + 1);
        }}
        data-testid="next-page"
      >
        {'>'}
      </div>
    </Container>
  );
};

export default Paginator;
