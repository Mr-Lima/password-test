import NO_LIST from './NO_LIST';

class PasswordService {
  static isValid(password) {
    const SYMBOLS = '!@#$%^&*()\\-+';

    const ONE_DIGIT_REGEX = '(?=.*[0-9])';
    const ONE_UPPERCASE_LETTER_REGEX = '(?=.*[A-Z])';
    const ONE_LOWERCASE_LETTER_REGEX = '(?=.*[a-z])';
    const ONE_SYMBOL_REGEX = `[0-9a-zA-Z${SYMBOLS}]`;
    const NINE_CHARS_REGEX = '{8,}';
    const REPEATING_CHARS_REGEX = /(.).*\1/;

    const PASSWORD_REGEX = new RegExp(`^${ONE_DIGIT_REGEX}${ONE_UPPERCASE_LETTER_REGEX}${ONE_LOWERCASE_LETTER_REGEX}${ONE_SYMBOL_REGEX}${NINE_CHARS_REGEX}$`);

    return PASSWORD_REGEX.test(password) && !REPEATING_CHARS_REGEX.test(password) && !NO_LIST.has(password);
  }
}

export default PasswordService;
