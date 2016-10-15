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

const emailInput = [
  validation.isEmail,
  validation.valueRequired,
  validation.maxLength(50),
  validation.minLength(2),
];

// Create the validator
const signupValidation = validation.createValidator({
  passwordInput,
  emailInput,
});

/* Memoize and export */
const validator = memoize(10)(signupValidation);
export default validator;
