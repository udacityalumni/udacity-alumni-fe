import { createSelector } from 'reselect';

const getArticles = () => (state) => state.articles.items;
const getArticlesCurrentPage = () => (state) => state.articles.currentPage;
const getArticlesPerPage = () => (state) => state.articles.perPage;

const getUsers = () => (state) => state.users.items;
const getUsersCurrentPage = () => (state) => state.users.currentPage;
const getUsersPerPage = () => (state) => state.users.perPage;

const getSortIndex = () => (state) => state.sort.index;
const getSortAscending = () => (state) => state.sort.ascending;

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

export const getSortedUsers = createSelector(
  getPagedUsers,
  getSortIndex(),
  getSortAscending(),
  (users, index, isAscending) => {
    if (users && users.length > 0) {
      if (index === 0) {
        return users.sort((a, b) =>
          isAscending ? a.name > b.name : b.name > a.name
        );
      }
      if (index === 1) {
        return users.sort((a, b) =>
          isAscending ? a.email > b.email : b.email > a.email
        );
      }
      return users;
    }
  }
);
