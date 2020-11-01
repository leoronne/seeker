import { injectable, inject } from 'tsyringe';
import axios from 'axios';

// import ICreateCharacterDTO from '@modules/characters/dtos/ICreateCharacterDTO';

import AppError from '@shared/errors/AppError';

import Characters from '@modules/characters/infra/typeorm/entities/Characters';

import { APP_API_URL, API_KEY } from '@shared/utils/environment';

import { CharacterData, GetCharacterResponse } from '../../../@types';

import ICharactersRepository from '../repositories/ICharactersRepository';

const fields = [
  'name',
  'gender',
  'real_name',
  'aliases',
  'birth',
  'api_detail_url',
  'count_of_issue_appearances',
  'deck',
  'image',
  'creators',
  'origin',
  'powers',
  'publisher',
  'site_detail_url',
  'id'
];
const format = 'json';

@injectable()
class GetCharacterService {
  constructor(
    @inject('CharactersRepository')
    private charactersRepository: ICharactersRepository
  ) {
    this.charactersRepository = charactersRepository;
  }

  public async show(id: string): Promise<Characters | CharacterData> {
    try {
      // const character = await this.charactersRepository.get(id);

      const response = await axios.get(`${APP_API_URL}character/${id}/?api_key=${API_KEY}&format=${format}&field_list=${fields.join(',')}`);
      const { data } = response;
      const { results } = data;

      if (!results) {
        throw new Error('Character not found');
      }

      let aliases = results?.aliases ? results?.aliases : null;
      aliases = aliases ? aliases.replace(/\r/g, '') : null;
      aliases = aliases ? aliases.replace(/\n/g, ', ') : null;

      results.aliases = aliases;

      const character = results;

      return character;
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }

  public async index(sort: string | null, filter: string | null, limit: string | null, offset: string | null): Promise<Characters[] | GetCharacterResponse> {
    try {
      // const characters = await this.charactersRepository.index();

      const sortQuery = sort ? `&sort=${sort}` : '';
      const filterQuery = filter ? `&filter=${filter}` : '';
      const limitQuery = limit ? `&limit=${limit}` : '';
      const offsetQuery = offset ? `&offset=${offset}` : '';

      const response = await axios.get(
        `${APP_API_URL}characters/?api_key=${API_KEY}&format=${format}&field_list=${fields.join(',')}${sortQuery}${filterQuery}${limitQuery}${offsetQuery}`
      );
      const { data } = response;

      if (!data) {
        throw new Error('Not found');
      }

      const characters = data;

      return characters;
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
}

export default GetCharacterService;
