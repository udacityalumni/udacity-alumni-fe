## EditableField Component
A reusable component that shows some child content and switches to an input field when clicked to edit.

### Example

```js
<EditableField
  isEditing={isEditing}
  onClickToEdit={onClickToEdit}
  onEdit={onEditBio}
  value={bioInput || user.bio}
  name="bio"
>
  <Paragraph className={`${styles.isButton} ${styles.paragraph}`}>
    {user.bio ? user.bio : 'Click to add a bio.'}
  </Paragraph>
</EditableField>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **isEditing**    | Bool   |             | Any bool value
| **onEdit**    | Func   |             | Any function value
| **value**    | String   |             | Any string value, represents the current input value
| **name**    | String   |             | A string that sets the label of the input, i.e. 'Bio'
| **onClickToEdit**    | Func   |             | Callback to call when the control is clicked to edit
| **children**    | Node   |             | The child component to show in non-editing state


### Other Information
Reusable, see the UserProfile for example usage.
