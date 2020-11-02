import { persistStore } from 'redux-persist';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { CharacterData } from '../@types';

import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';

export interface IState {
  edittedCharacters: CharacterData[];
}

const store = createStore(persistReducers(rootReducer), composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor };
