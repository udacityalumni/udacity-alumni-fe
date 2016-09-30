## ErrorAlert Component
A component that shows alert notifications, given an input array of errors.

### Example

```js
<ErrorAlert onClose={this.handleClose} errors={myErrors} />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **errors**    | Array   |             | An array of errors with corresponding messages.
| **onClose**    | Function   |             | A function that is called when the close button is pressed.


### Other Information
Currently only showing as critical errors, although there are multiple types of errors.

See: http://grommet.github.io/docs/notification

The onClose callback will be called with an index, so the reducer needs to slice out the remaining errors.  See the reducer file in LoginContainer for reference.
