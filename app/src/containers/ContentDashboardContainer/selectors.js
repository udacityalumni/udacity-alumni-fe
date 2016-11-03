import { createSelector } from 'reselect';

const getArticles = () => (state) => state.articles;
const getCurrentPage = () => (state) => state.paginator.currentPage;
const getPerPage = () => (state) => state.paginator.perPage;

export const getArticlesByPage = createSelector(
  getArticles(),
  getCurrentPage(),
  getPerPage(),
  (articles, currentPage, perPage) => {
    if (articles && articles.length > 0) {
      const current = currentPage - 1;
      const from = current * perPage;
      const to = current * perPage + perPage;
      return articles.filter((_, i) =>
        i >= from && i < to
      );
    }
    return articles;
  }
);
