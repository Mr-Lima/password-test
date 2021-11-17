import PasswordService from '../../src/domains/password/password.service';

test('password challenges', () => {
  const passwords = {
    invalids: [
      '',
      'aa',
      'ab',
      'AAAbbbCc',
      'AbTp9!foo',
      'AbTp9!foA',
      'AbTp9 fok',
    ],
    valids: [
      'AbTp9!fok',
    ]
  };

  passwords.invalids.forEach((password) => {
    expect(PasswordService.isValid(password)).toBe(false);
  });

  passwords.valids.forEach((password) => {
    expect(PasswordService.isValid(password)).toBe(true);
  });
});
