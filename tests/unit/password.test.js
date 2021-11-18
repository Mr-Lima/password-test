import PasswordService from '../../src/domains/password/password.service';
import passwordsMock from '../mocks/passwords.json';

test('password challenges', () => {
  expect(PasswordService.isValid('')).toBe(false);
  expect(PasswordService.isValid('aa')).toBe(false);
  expect(PasswordService.isValid('ab')).toBe(false);
  expect(PasswordService.isValid('AAAbbbCc')).toBe(false);
  expect(PasswordService.isValid('AbTp9!foo')).toBe(false);
  expect(PasswordService.isValid('AbTp9!foA')).toBe(false);
  expect(PasswordService.isValid('AbTp9 fok')).toBe(false);
  expect(PasswordService.isValid('P@SsW0rD')).toBe(false);

  expect(PasswordService.isValid('AbTp9!fok')).toBe(true);
});

test('password mass test', () => {
  const passwords = passwordsMock;

  passwords.valids.forEach(password => {
    expect(PasswordService.isValid(password)).toBe(true);
  });

  passwords.invalids.forEach(password => {
    expect(PasswordService.isValid(password)).toBe(false);
  });
});
