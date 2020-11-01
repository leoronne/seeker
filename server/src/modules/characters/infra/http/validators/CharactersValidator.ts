import { Segments, Joi } from 'celebrate';

export default {
  index: {
    [Segments.PARAMS]: {
      sort: Joi.string().error(new Error('Invalid sort field!')),
      filter: Joi.string().error(new Error('Invalid filter field!')),
      limit: Joi.number().error(new Error('Invalid limit field!')),
      offset: Joi.number().error(new Error('Invalid offset field!')),
    },
  },
  get: {
    [Segments.PARAMS]: {
      id: Joi.string().required().error(new Error('Invalid ID!')),
    },
  },
};
