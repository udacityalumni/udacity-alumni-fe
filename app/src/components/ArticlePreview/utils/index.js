/* eslint-disable */
// helper to insert mark tags
function insertMarkTag(sourceString, subString) {
  return sourceString.replace(new RegExp("(" + subString + ")", "g"), "<mark>$1</mark>");
}

// {`${article.content.slice(0, 200)}...`}
export const highlightContent = (searchTerm, text) => {
  if (text.indexOf(searchTerm) !== -1) {
    /**
      TODO: do a better algorythm to get the right text section containing
      the search term. Right now we only show the first 200 characters of the text.
      This will be a problem for bigger texts.
    **/
    const formattedText = insertMarkTag(text, searchTerm);
    return formattedText.slice(0, 200);
  }
  else {
    return text.slice(0, 200);
  }
};
/* eslint-enable */
