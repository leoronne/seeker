import React from 'react';
import { SnackbarProvider } from 'notistack';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../store';

import { LanguageProvider } from './useLanguage';

const AppProvider: React.FC = ({ children }) => {
  return (
    <LanguageProvider>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {children}
          </SnackbarProvider>
        </PersistGate>
      </ReduxProvider>
    </LanguageProvider>
  );
};

export default AppProvider;
