const DEVELOPMENT_URL = 'http://localhost:3000/';
const STAGING_URL = 'https://udacity-alumni-api.herokuapp.com/';
const PRODUCTION_URL = 'https://udacity-alumni-api.herokuapp.com/';
const environment = process.env.NODE_ENV || 'development';

const URL_MAP = {
  development: DEVELOPMENT_URL,
  staging: STAGING_URL,
  production: PRODUCTION_URL,
};

export const BASE_URL = URL_MAP[environment];
