## AuthFormFooter Component
A component that shows at the bottom of an auth form, with link to the opposite auth form, i.e. from signup link to login.

### Example

```js
<AuthFormFooter text="Need an Account?" link="/signup" />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **text**    | String   |             | Any string value
| **link**    | String   |             | Any string value


### Other Information
Pass in a link and a string value.  
Note: the component will take the link, say signup and convert that into a text link.  The above component will look like:
Need an Account?  Signup.
