import * as validation from '../../../../utils/validation';
import memoize from 'lru-memoize';

// Compose validation functions for all input fields
const passwordInput = [
  validation.containsLowercase,
  validation.containsUppercase,
  validation.minLength(8),
  validation.maxLength(20),
  validation.containsNumber,
  validation.valueRequired,
  validation.containsSpecialChar,
];

const passwordConfirmationInput = [
  validation.valueRequired,
];

// Create the validator
const signupValidation = validation.createValidator({
  passwordInput,
  passwordConfirmationInput,
});

/* Memoize and export */
const validator = memoize(10)(signupValidation);
export default validator;
