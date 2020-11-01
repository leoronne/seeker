import express from 'express';
import { celebrate } from 'celebrate';

import CharactersController from '@modules/characters/controllers/CharactersController';
import CharactersValidator from '@modules/characters/infra/http/validators/CharactersValidator';

const charactersRouter = express.Router();

charactersRouter
  // .post('/', celebrate(CharactersValidator.store), CharactersController.store)
  .get('/:id', celebrate(CharactersValidator.get), CharactersController.get)
  .get('/', CharactersController.index);
// .patch('/images', upload.array('images'), CharactersController.uploadImages)
export default charactersRouter;
