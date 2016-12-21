## AppNavigation Component
A component that is the navigator of the app, used in
containers/AppContainer container.


### Example

```js
<AppNavigation
  pathname={location.pathname}
  isMobile={isMobile}
  user={user}
  handleSearch={this.handleSearch}
  navIsActive={navIsActive}
  navLinks={navLinks}
  onToggleNav={this.handleToggleNav}
>
  {React.cloneElement(this.props.children, this.props)}
</AppNavigation>

```

### Props

| Prop             | Type     | Default     | Possible Values
| ---------------- | -------- | ----------- | -------------------
| **isMobile**     | Bool     |             |
| **children**     | Node     |             |
| **user**         | Object   |             |
| **handleSearch** | Func     |             | A callback function
| **navIsActive**  | Bool     |             |
| **navLinks**     | Array    |             |
| **onToggleNav**  | Func     |             | A callback function
| **pathname**     | String   |             |

### Other Information
