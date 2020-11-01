import React from 'react';
import { SnackbarProvider } from 'notistack';

import { LanguageProvider } from './useLanguage';

const AppProvider: React.FC = ({ children }) => {
  return (
    <LanguageProvider>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {children}
      </SnackbarProvider>
    </LanguageProvider>
  );
};

export default AppProvider;
