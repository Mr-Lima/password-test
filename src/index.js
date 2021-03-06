import Logger from './utils/logger';
import Env from './config/env';
import http from 'http';
import { promisify } from 'util';
import app from './app';

async function openServer(app, PORT) {
  Logger.info('Opening server');

  const httpServer = http.createServer(app);
  const listen = promisify(httpServer.listen.bind(httpServer));
  await listen(PORT);

  Logger.log(`Server listening at http://localhost:${PORT}`);
}

const ENVS = Env.load();
openServer(app, ENVS.PORT);







































































































































