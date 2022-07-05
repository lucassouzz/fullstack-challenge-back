import Koa from 'koa'
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import { router } from './routes.js'

export const app = new Koa()

//Maneira de utilizar o use encadeado.
app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());