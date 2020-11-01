import { Reducer } from 'redux';

import { GetCharacterResponse } from '../../../@types';

const INITIAL_STATE = {
  error: '',
  limit: 100,
  offset: 0,
  number_of_page_results: 0,
  number_of_total_results: 0,
  status_code: 0,
  results: [],
};

const characters: Reducer<GetCharacterResponse> = () => {
  return INITIAL_STATE;
};

export default characters;
