import React from 'react';
import ReactDOM from 'react-dom';

import { LoaderSpinner } from './components';

import AppProvider from './hooks';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Suspense fallback={<LoaderSpinner color="#7467D3" />}>
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  </React.Suspense>,
  document.getElementById('root')
);

serviceWorker.unregister();
