import { combineReducers } from 'redux';

import characters from './characters/reducer';
import edittedCharacters from './edittedCharacters/reducer';

export default combineReducers({
  characters,
  edittedCharacters,
});
