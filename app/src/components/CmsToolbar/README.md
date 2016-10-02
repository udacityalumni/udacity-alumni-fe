## CmsToolbar Component
A component that acts as the main toolbar for the cms.

### Example

```js
<CmsToolbar
  spotlighted={spotlighted}
  onToggleSpotlight={this.setSpotlightToggle}
  onSetStatus={this.setStatus}
  status={status}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **spotlighted**    | Bool   |  False   | Any boolean value
| **onToggleSpotlight**    | Func   |     | Callback Function for the spotlight toggle
| **onSetStatus**    |  Func   |     | Callback Function for the status toggle
| **status**    | Int / Enum   |  0   | The integer value for the status (0-2)


### Other Information
