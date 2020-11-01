import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { CharacterData } from '../@types';

import rootReducer from './modules/rootReducer';

export interface IState {
  edittedCharacters: CharacterData[];
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;
