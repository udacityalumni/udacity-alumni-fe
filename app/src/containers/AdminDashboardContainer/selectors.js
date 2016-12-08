import { createSelector } from 'reselect';

const getArticles = () => (state) => state.articles.items;
const getArticlesCurrentPage = () => (state) => state.articles.currentPage;
const getArticlesPerPage = () => (state) => state.articles.perPage;

const getUsers = () => (state) => state.users.items;
const getUsersCurrentPage = () => (state) => state.users.currentPage;
const getUsersPerPage = () => (state) => state.users.perPage;

export const getPagedArticles = createSelector(
  getArticles(),
  getArticlesCurrentPage(),
  getArticlesPerPage(),
  (articles, currentPage, perPage) => {
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

export const getPagedUsers = createSelector(
  getUsers(),
  getUsersCurrentPage(),
  getUsersPerPage(),
  (users, currentPage, perPage) => {
    if (users && users.length > 0) {
      const current = currentPage - 1;
      const from = current * perPage;
      const to = current * perPage + perPage;
      return users.filter((_, i) =>
        i >= from && i < to
      );
    }
  }
);
