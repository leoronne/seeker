import express from 'express';

import charactersRouter from '@modules/characters/infra/http/routes/characters.routes';

const routes = express.Router();

const Development = [
  'Seeker',
  {
    'Made by': 'Leonardo Ronne',
    GitHub: 'https://github.com/leoronne',
  },
];

routes
  // Copyright
  .get('/', (req, res) => {
    res.status(200).send({
      Development,
    });
  })
  .use('/characters', charactersRouter);

export default routes;
