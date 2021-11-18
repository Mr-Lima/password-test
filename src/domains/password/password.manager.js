import PasswordService from './password.service';

async function PasswordManager(req, res, next) {
  const password = req.params.password || req.body.password;
  const isValid = PasswordService.isValid(password);

  res.status(isValid ? 200 : 422).send(isValid);

  return next();
}

export default PasswordManager;
