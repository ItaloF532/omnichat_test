import * as dotenv from 'dotenv';
dotenv.config();

export const ENVIRONMENT = {
  PORT: `${process.env.PORT ?? ''}`,
  GROQ_API_KEY: `${process.env.GROQ_API_KEY ?? ''}`,
  THEMOVIEDB_API_KEY: `${process.env.THEMOVIEDB_API_KEY ?? ''}`,
};
