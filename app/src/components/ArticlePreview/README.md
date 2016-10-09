## ArticlePreview Component
A component that shows a preview of an article.

### Example

```js
<ArticlePreview article={article} />
```

### Props

| Prop          | Type     | Default     | Possible Values
| ------------- | -------- | ----------- | ---------------------------------------------
| **article**    | Object   |             | An object value, with the keys shown below

Article Keys:
user: {
  name: PropTypes.string.isRequired,
},
feature_image: PropTypes.string.isRequired,
content: PropTypes.string.isRequired,
id: PropTypes.number.isRequired,


### Other Information
Reused on search and landing pages as of 10/8/2016
