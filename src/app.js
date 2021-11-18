import express from 'express';
import loadRoutes from './routes';

const app = express();

async function main() {
  app.use(express.json());

  loadRoutes(app);
  // openServer(app, ENVS.PORT);
}

main();

export default app;
