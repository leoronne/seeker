import { CharacterData } from '../../../@types';

export const editCharacter = (
  char: CharacterData,
  isFave: boolean
): {
  type: string;
  payload: {
    char: CharacterData;
    isFave: boolean;
  };
} => {
  return {
    type: 'EDIT_CHARACTER',
    payload: {
      char,
      isFave,
    },
  };
};
