import { createSelector } from 'reselect';

const getArticles = () => (state) => state.articles.items;
const getArticlesCurrentPage = () => (state) => state.articles.currentPage;
const getArticlesPerPage = () => (state) => state.articles.perPage;

const getArticlesSortIndex = () => (state) => state.articles.sortIndex;
const getArticlesSortAscending = () => (state) => state.articles.sortAscending;

export const getPagedArticles = createSelector(
  getArticles(),
  getArticlesCurrentPage(),
  getArticlesPerPage(),
  (articles, currentPage, perPage) => { // eslint-disable-line
    if (articles && articles.length > 0) {
      const current = currentPage - 1;
      const from = current * perPage;
      const to = current * perPage + perPage;
      return articles.filter((_, i) =>
        i >= from && i < to
      );
    }
  }
);

export const getSortedArticles = createSelector(
  getPagedArticles,
  getArticlesSortIndex(),
  getArticlesSortAscending(),
  (articles, index, isAscending) => { // eslint-disable-line
    if (articles && articles.length > 0) {
      if (index === 1) {
        return articles.sort((a, b) =>
          isAscending ? a.title > b.title : b.title > a.title
        );
      }
      if (index === 2) {
        return articles.sort((a, b) =>
          isAscending ? a.status > b.status : b.status > a.status
        );
      }
      if (index === 3) {
        return articles.sort((a, b) =>
          isAscending ?
            new Date(a.updated_at.split('T')) - new Date(b.updated_at.split('T'))
          :
            new Date(b.updated_at.split('T')) - new Date(a.updated_at.split('T'))
        );
      }
      if (index === 4) {
        return articles.sort((a, b) =>
          isAscending ? a.user.name > b.user.name : b.user.name > a.user.name
        );
      }
      if (index === 5) {
        return articles.sort((a, b) =>
          a.title > b.title
        );
      }
      return articles;
    }
  }
);
