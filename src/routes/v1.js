import { Router } from 'express';
import PasswordManager from '../domains/password/password.manager';

function V1Router() {
  const router = Router();

  router.get('/password/:password', PasswordManager);
  router.post('/password', PasswordManager);

  return router;
}

export default V1Router;
