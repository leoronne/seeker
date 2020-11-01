import { Reducer } from 'redux';
import produce from 'immer';

import { CharacterData } from '../../../@types';

const INITIAL_STATE: CharacterData[] = [];

const edittedCharacters: Reducer<CharacterData[]> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EDIT_CHARACTER': {
      const { char } = action.payload;
      const { isFave } = action.payload;

      const editted = {
        ...char,
        is_fave: isFave,
      };

      const favorited = state;

      const char_is_on_state = favorited.findIndex(favorite => favorite.id === editted.id);

      return produce(state, draft => {
        if (char_is_on_state >= 0) {
          draft.splice(char_is_on_state, 1);
        }
        draft.push(editted);
      });
    }
    default: {
      return state;
    }
  }
};

export default edittedCharacters;
