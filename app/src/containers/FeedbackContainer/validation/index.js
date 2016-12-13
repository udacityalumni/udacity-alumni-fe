import * as validation from 'utils/validation';
import memoize from 'lru-memoize';

const nameInput = [
  validation.valueRequired,
];


const urlInput = [
  validation.valueRequired,
];

const formValidation = validation.createValidator({
  nameInput,
  urlInput,
});

const validator = memoize(10)(formValidation);
export default validator;
