import dotenv from 'dotenv';
import Logger from '../utils/logger';

class Env {
  static get() {
    return {
      PORT: process.env.PORT || 3000,
    };
  }

  static load() {
    dotenv.config();
    Logger.info('Envs loaded');

    return Env.get();
  }
}

export default Env;
