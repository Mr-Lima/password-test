import Logger from '../utils/logger';
import V1Router from './v1';

function loadRoutes(app) {
  app.use('/api/v1', V1Router());

  app.get('/ping', async (_, res, next) => {
    res.send({ data: 'pong' });
    next();
  });

  Logger.info('Routes loaded');
  return app;
}

export default loadRoutes;
