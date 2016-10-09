## SignupForm Component
A reusable signup form component.

### Example

```js
const fields = [
  'nameInput',
  'emailInput',
  'passwordInput',
  'passwordConfirmationInput'
];
<SignupForm {...fields} onSubmit={this.handleSubmit} />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **onSubmit**    | Function   |             | An on submit callback
| **fields**    | Object   |             | With the keys shown below
- nameInput
- emailInput
- passwordInput
- passwordConfirmationInput


### Other Information
Use the redux form field model.
