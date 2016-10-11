/* eslint-disable */
// helper to insert mark tags
function insertMarkTag(sourceString, subString) {
  return sourceString.replace(new RegExp("(" + subString + ")", "g"), "<mark>$1</mark>");
}

// helper to get right content snippet containing the search term
function setPreviewSnippet(searchTerm, text){
  /**
    TODO: make sure the text is not sliced in the middle of a <mark> tag
  **/
  let start, end;
  const offset = 200;
  const pos =  text.indexOf(searchTerm);
  if (pos > offset) {
    start = pos - offset;
    end = pos + offset;
  }else {
    start = 0;
    end = offset + offset - pos;
  }
  return text.slice(start, end);
}

// {`${article.content.slice(0, 200)}...`}
export const highlightContent = (searchTerm, text) => {
  if (text.indexOf(searchTerm) !== -1) {
    const formattedText = insertMarkTag(text, searchTerm);
    return setPreviewSnippet(searchTerm, formattedText);
  }
  else {
    return text.slice(0, 200);
  }
};
/* eslint-enable */
