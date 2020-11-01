import { container } from 'tsyringe';

import ICharactersRepository from '@modules/characters/repositories/ICharactersRepository';
import CharactersRepository from '@modules/characters/infra/typeorm/repositories/CharactersRepository';

container.registerSingleton<ICharactersRepository>('CharactersRepository', CharactersRepository);
