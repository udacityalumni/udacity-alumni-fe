## ToastMessage Component
A toast component that shows up at the top of the screen with an alert.
message,
onClose,
status,
### Example

```js
<ToastMessage />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **message**    | String   |             | Any string value
| **onClose**    | Func   |             | A callback when requesting to close
| **status**    | String / Enum   |  'ok'           | An enum value, one of: critical|warning|ok|disabled|unknown


### Other Information
See: https://grommet.github.io/docs/toast
