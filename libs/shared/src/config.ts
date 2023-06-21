import * as Joi from 'joi';

export const API_ENV = Joi.object({
  API_PORT: Joi.number().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().default(5432).required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'staging')
    .default('development'),
});

export const EVENT_ORG_ENV = Joi.object({
  KAFKA_URI: Joi.string().required(),
  KAFKA_GROUP_ID: Joi.string().required(),
  KAFKA_CLIENT_ID: Joi.string().required(),
});

export const EVENT_ENV = Joi.object({
  KAFKA_URI: Joi.string().required(),
  KAFKA_GROUP_ID: Joi.string().required(),
  KAFKA_CLIENT_ID: Joi.string().required(),
});
