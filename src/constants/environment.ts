import * as dotenv from 'dotenv';
dotenv.config();

export const ENVIRONMENT = {
  PORT: process.env.PORT,

  MONGO_URL: process.env.MONGO_URL,

  OPENAI_KEY: process.env.OPENAI_KEY,
  OPENAI_API_URL: process.env.OPENAI_API_URL,
};
