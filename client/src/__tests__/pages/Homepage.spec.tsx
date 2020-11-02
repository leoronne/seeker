import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import notistack from 'notistack';

import { charactersResponse } from '../../__mocks__';

import { Homepage } from '../../pages';

const mockedHistoryPush = jest.fn();
const mockedloadData = jest.fn();
const enqueueSnackbar = jest.fn();
const closeSnackbar = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

jest.mock('notistack', () => ({
  useSnackbar: jest.fn(),
}));

jest.mock('../../hooks', () => {
  return {
    useLanguage: () => ({
      language: 'en',
    }),
  };
});

describe('Homepage', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
    mockedloadData.mockClear();

    jest.spyOn(notistack, 'useSnackbar').mockImplementation(() => {
      return { enqueueSnackbar, closeSnackbar };
    });
  });

  const initialState = { output: 10 };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('should render', async () => {
    await act(async () => {
      const { asFragment } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );

      const html = asFragment();

      expect(html).toMatchSnapshot();
    });
  });

  it('should set the search value', async () => {
    await act(async () => {
      jest.mock('../../pages/Homepage', () => ({
        loadData: mockedloadData,
      }));

      const { getByTestId } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );

      const searchInput = (await waitFor(() => getByTestId('search-input'))) as HTMLInputElement;

      fireEvent.change(searchInput, { target: { value: 'Test' } });

      await waitFor(() => {
        expect(searchInput.value).toEqual('Test');
      });
    });
  });

  it('should set the favorite checkbox', async () => {
    await act(async () => {
      jest.mock('../../pages/Homepage', () => ({
        loadData: mockedloadData,
      }));

      const { getByPlaceholderText } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );
      const checkboxInput = (await waitFor(() => getByPlaceholderText('show-favorites'))) as HTMLInputElement;

      fireEvent.click(checkboxInput);

      await waitFor(() => {
        expect(checkboxInput.checked).toEqual(true);
      });
    });
  });

  it('should be able to render results for the first time', async () => {
    await act(async () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );
      const results = await waitFor(() => getByTestId('number-of-results'));

      await waitFor(() => {
        expect(results.textContent).toBe(String(charactersResponse.results.length));
      });
    });
  });

  it('should be able to filter favorite characters', async () => {
    await act(async () => {
      jest.mock('../../pages/Homepage', () => ({
        loadData: mockedloadData,
      }));

      const { getByTestId, getByPlaceholderText } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );

      const searchInput = (await waitFor(() => getByTestId('search-input'))) as HTMLInputElement;

      fireEvent.change(searchInput, { target: { value: 'Test' } });

      const checkboxInput = (await waitFor(() => getByPlaceholderText('show-favorites'))) as HTMLInputElement;

      fireEvent.click(checkboxInput);

      expect(checkboxInput.checked).toEqual(true);

      const submitButton = await waitFor(() => getByTestId('submit-button'));

      fireEvent.click(submitButton);

      const results = await waitFor(() => getByTestId('number-of-results'));

      await waitFor(() => {
        expect(results.textContent).toBe(String(0));
      });
    });
  });

  it('should be able to favorite a character', async () => {
    await act(async () => {
      jest.mock('../../pages/Homepage', () => ({
        loadData: mockedloadData,
      }));

      const { getByTestId, queryByTestId } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );

      const favoriteButton = await waitFor(() => getByTestId('favorite-button-1'));

      fireEvent.click(favoriteButton);

      await waitFor(() => {
        expect(queryByTestId('heart-svg-1-false')).toBeTruthy();
      });
    });
  });

  it('should be able to change results per page', async () => {
    await act(async () => {
      jest.mock('../../pages/Homepage', () => ({
        loadData: mockedloadData,
      }));

      const { getByTestId } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );

      let selectInput = (await waitFor(() => getByTestId('records-per-page-select'))) as HTMLInputElement;

      const records = 100;

      fireEvent.change(selectInput, { target: { value: records } });

      selectInput = (await waitFor(() => getByTestId('records-per-page-select'))) as HTMLInputElement;

      await waitFor(() => {
        expect(selectInput.value).toBe(String(records));
      });
    });
  });

  it('should not be able to change to the previous page if it is on the first one', async () => {
    await act(async () => {
      jest.mock('../../pages/Homepage', () => ({
        loadData: mockedloadData,
      }));

      const { getByTestId } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );

      const previousButton = await waitFor(() => getByTestId('previous-page'));

      await waitFor(() => {
        expect(previousButton.classList.contains('page-disabled')).toBe(true);
      });
    });
  });

  it('should be able to change to the next page', async () => {
    await act(async () => {
      jest.mock('../../pages/Homepage', () => ({
        loadData: mockedloadData,
      }));

      const { getByTestId } = render(
        <Provider store={store}>
          <Homepage />
        </Provider>
      );

      let pageElement = await waitFor(() => getByTestId('page-active'));

      const firstPage = Number(pageElement.textContent);

      const nextButton = await waitFor(() => getByTestId('next-page'));

      fireEvent.click(nextButton);

      pageElement = await waitFor(() => getByTestId('page-active'));

      await waitFor(() => {
        expect(pageElement.textContent).toBe(String(firstPage + 1));
      });
    });
  });
});
