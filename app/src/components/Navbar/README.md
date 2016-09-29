## Navbar Component
A simple Navbar component

### Example

```js
<Navbar
  isLoggedIn={false}
  onSearch={this.handleSearch}
/>
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **onSearch**    | Function   |             | A callback function that is called when text is entered in the search bar
| **isLoggedIn**    | Bool   |  false        | Boolean determining if the user is logged in or not


### Other Information
Note: the search component is not wired up, but an example of it can be seen here:
https://corporate-dashboard-client.herokuapp.com/data
and the code is here: https://github.com/RyanCCollins/corporate-dashboard/blob/master/app/src/containers/DataViewContainer/index.js
documentation from Grommet is here: https://grommet.github.io/docs/search
