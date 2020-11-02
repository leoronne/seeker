/* eslint-disable */

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// @ts-ignore
export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'Seeker',
      storage,
      whitelist: ['edittedCharacters', 'characters'],
    },
    reducers
  );

  return persistedReducer;
};
