import React from 'react';
import { SnackbarProvider } from 'notistack';
import { Provider as ReduxProvider } from 'react-redux';

import store from '../store';

import { LanguageProvider } from './useLanguage';

const AppProvider: React.FC = ({ children }) => {
  return (
    <LanguageProvider>
      <ReduxProvider store={store}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {children}
        </SnackbarProvider>
      </ReduxProvider>
    </LanguageProvider>
  );
};

export default AppProvider;
