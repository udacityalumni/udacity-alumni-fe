## ErrorAlert Component
A component that shows alert notifications, given an input array of errors.

### Example

```js
<ErrorAlert errors={myErrors} />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **errors**    | Array   |             | An array of errors with corresponding messages.


### Other Information
Currently only showing as critical errors, although there are multiple types of errors.

See: http://grommet.github.io/docs/notification
