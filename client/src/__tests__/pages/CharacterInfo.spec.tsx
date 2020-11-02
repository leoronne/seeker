import React from 'react';
import { act, fireEvent, render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import notistack from 'notistack';

import { CharacterInfo } from '../../pages';

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

describe('CharacterInfo', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
    mockedloadData.mockClear();

    jest.spyOn(notistack, 'useSnackbar').mockImplementation(() => {
      return { enqueueSnackbar, closeSnackbar };
    });
  });

  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('should render', async () => {
    await act(async () => {
      const { asFragment } = render(
        <Provider store={store}>
          <CharacterInfo />
        </Provider>
      );

      const html = asFragment();

      expect(html).toMatchSnapshot();
    });
  });

  it('should click on edit button', async () => {
    await act(async () => {
      jest.mock('../../pages/CharacterInfo', () => ({
        loadData: mockedloadData,
      }));

      const { getByTestId, queryByTestId } = render(
        <Provider store={store}>
          <CharacterInfo />
        </Provider>
      );

      const editButton = await waitFor(() => getByTestId('edit-button'));

      fireEvent.click(editButton);

      await waitFor(() => {
        expect(queryByTestId('submit-button')).toBeTruthy();
      });
    });
  });

  it('should be able to click on the favorite button', async () => {
    await act(async () => {
      jest.mock('../../pages/CharacterInfo', () => ({
        loadData: mockedloadData,
      }));

      const { getByTestId, queryByTestId } = render(
        <Provider store={store}>
          <CharacterInfo />
        </Provider>
      );

      const favoriteButton = await waitFor(() => getByTestId('favorite-button'));

      fireEvent.click(favoriteButton);

      await waitFor(() => {
        expect(queryByTestId('heart-svg-true')).toBeTruthy();
      });
    });
  });

  it('should be able to cancel edit', async () => {
    await act(async () => {
      jest.mock('../../pages/CharacterInfo', () => ({
        loadData: mockedloadData,
      }));

      const { getByTestId } = render(
        <Provider store={store}>
          <CharacterInfo />
        </Provider>
      );

      const editButton = await waitFor(() => getByTestId('edit-button'));

      fireEvent.click(editButton);

      const nameInput = (await waitFor(() => getByTestId('name-input'))) as HTMLInputElement;

      const oldValue = nameInput.value;
      const newValue = 'Test Name';

      fireEvent.change(nameInput, { target: { value: newValue } });

      expect(nameInput.value).toBe(newValue);

      const cancelButton = await waitFor(() => getByTestId('cancel-button'));

      fireEvent.click(cancelButton);

      await waitFor(() => {
        expect(nameInput.value).toBe(oldValue);
      });
    });
  });

  it('should be able to edit character', async () => {
    await act(async () => {
      jest.mock('../../pages/CharacterInfo', () => ({
        loadData: mockedloadData,
      }));

      const { getByTestId } = render(
        <Provider store={store}>
          <CharacterInfo />
        </Provider>
      );

      const editButton = await waitFor(() => getByTestId('edit-button'));

      fireEvent.click(editButton);

      const nameInput = (await waitFor(() => getByTestId('name-input'))) as HTMLInputElement;

      const newValue = 'Test Name';

      fireEvent.change(nameInput, { target: { value: newValue } });

      expect(nameInput.value).toBe(newValue);

      const submitButton = await waitFor(() => getByTestId('submit-button'));

      fireEvent.click(submitButton);

      const nameH1 = await waitFor(() => getByTestId('character-name'));

      await waitFor(() => {
        expect(nameH1.textContent).toBe(newValue);
      });
    });
  });
});
