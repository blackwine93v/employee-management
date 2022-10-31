import validator from 'validator';

export const required = (value) => (value ? undefined : 'Required');
export const mustBeAlphabets = (value) =>
  validator.isAlpha(value) ? undefined : 'Must be alphabets';
export const mustBeEmail = (value) =>
  validator.isEmail(value) ? undefined : 'Must be an email';
export const mustBeLKPhone = (value) =>
  validator.isMobilePhone(value, 'si-LK')
    ? undefined
    : 'Must be a phone number';
export const minLength = (length) => (value) =>
  validator.isLength(value, { min: length })
    ? undefined
    : `Should be greater than ${length} characters`;
export const maxLength = (length) => (value) =>
  validator.isLength(value, { max: length })
    ? undefined
    : `Should be less than ${length} characters`;
export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
