import { createSelector } from 'reselect';

const getArticles = () => (state) => state.articles.items;
const getArticlesCurrentPage = () => (state) => state.articles.currentPage;
const getArticlesPerPage = () => (state) => state.articles.perPage;

const getUsers = () => (state) => state.users.items;
const getUsersCurrentPage = () => (state) => state.users.currentPage;
const getUsersPerPage = () => (state) => state.users.perPage;

const getUsersSortIndex = () => (state) => state.users.sortIndex;
const getUsersSortAscending = () => (state) => state.users.sortAscending;

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
          isAscending ? a.user.name > b.user.name : b.user.name > a.user.name
        );
      }
      if (index === 4) {
        return articles.sort((a, b) =>
          a.title > b.title
        );
      }
      return articles;
    }
  }
);

export const getPagedUsers = createSelector(
  getUsers(),
  getUsersCurrentPage(),
  getUsersPerPage(),
  (users, currentPage, perPage) => { // eslint-disable-line
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
  getUsersSortIndex(),
  getUsersSortAscending(),
  (users, index, isAscending) => { // eslint-disable-line
    if (users && users.length > 0) {
      if (index === 1) {
        return users.sort((a, b) =>
          isAscending ? a.name > b.name : b.name > a.name
        );
      }
      if (index === 2) {
        return users.sort((a, b) =>
          isAscending ? a.email > b.email : b.email > a.email
        );
      }
      if (index === 3) {
        return users.sort((a, b) =>
          isAscending ? a.role > b.role : b.role > a.role
        );
      }
      if (index === 4) {
        return users.sort((a, b) =>
          isAscending ? a.bio > b.bio : b.bio > a.bio
        );
      }
      if (index === 5) {
        return users.sort((a, b) =>
          isAscending ? a.public > b.public : b.public > a.public
        );
      }
      if (index === 6) {
        return users.sort((a, b) => a.name > b.name);
      }
      return users;
    }
  }
);
