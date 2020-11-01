import { getRepository, Repository } from 'typeorm';
import Characters from '@modules/characters/infra/typeorm/entities/Characters';

import AppError from '@shared/errors/AppError';

import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';
// import ICreatePlaceDTO from '@modules/characters/dtos/ICreatePlaceDTO';

class CharactersRepository implements ICharactersRepository {
  private ormRepository: Repository<Characters>;

  constructor() {
    this.ormRepository = getRepository(Characters);
  }

  // public async create({ name, latitude, longitude, whatsapp, about, instructions, opening_hours, open_on_weekends, images }: ICreatePlaceDTO): Promise<Characters> {
  //   try {
  //     const place = this.ormRepository.create({
  //       name,
  //       latitude,
  //       longitude,
  //       whatsapp,
  //       about,
  //       instructions,
  //       opening_hours,
  //       open_on_weekends,
  //       images,
  //     });

  //     await this.ormRepository.save(place);

  //     return place;
  //   } catch (err) {
  //     throw new AppError(err.message, 500);
  //   }
  // }

  public async get(id: string): Promise<Characters> {
    try {
      const character = this.ormRepository.findOneOrFail(id);

      return character;
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }

  public async index(): Promise<Characters[]> {
    try {
      const characters = this.ormRepository.find();

      return characters;
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
}

export default CharactersRepository;
