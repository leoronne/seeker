import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import GetCharacterService from '../services/GetCharacterService';

class CharactersController {
  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const getCharacters = container.resolve(GetCharacterService);

      const character = await getCharacters.show(id);
      return res.status(200).json(character);
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }

  async index(req: Request, res: Response) {
    try {
      const { sort, filter, limit, offset } = req.query;

      const getCharacters = container.resolve(GetCharacterService);

      const characters = await getCharacters.index(sort ? String(sort) : null, filter ? String(filter) : null, limit ? String(limit) : null, offset ? String(offset) : null);
      return res.status(200).json(characters);
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
}

export default new CharactersController();
