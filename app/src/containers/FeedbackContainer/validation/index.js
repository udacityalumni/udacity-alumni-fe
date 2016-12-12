import * as validation from 'utils/validation';
import memoize from 'lru-memoize';

const nameInput = [
  validation.valueRequired,
];


const feedbackInput = [
  validation.valueRequired,
];

const formValidation = validation.createValidator({
  nameInput,
  feedbackInput,
});

const validator = memoize(10)(formValidation);
export default validator;
