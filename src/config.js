import { config as dotenv} from 'dotenv';
dotenv(); //lee las variables de entorno

export const configSource ={
  service: process.env.SOURCE_SERVICE,
  user: process.env.SOURCE_USER,
  pass: process.env.SOURCE_PASS
};