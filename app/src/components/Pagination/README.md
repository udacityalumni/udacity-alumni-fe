## Pagination Component
A reusable pagination component.

### Example

```js
<Pagination
   onChange={(newPage) => onChange(newPage)}
   defaultCurrent={1}
   pageSize={pageSize}
   current={currentPage}
   total={total}
 />
```
currentPage: PropTypes.number.isRequired,
total: PropTypes.number.isRequired,
onChange: PropTypes.func.isRequired,
### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **currentPage**    | Number   |             | Any Number value
| **total**    | Number   |             | Any Number value
| **onChange**    | Func   |             | Any function


### Other Information
Uses the rc-pagination component.  See here: https://github.com/react-component/pagination
