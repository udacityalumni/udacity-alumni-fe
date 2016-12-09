const DEFAULT_PAGE_TITLE = 'Udacity Alumni';

export function updatePageTitle(title) {
  if (document) {
    if (title) {
      document.title = `${title} | ${DEFAULT_PAGE_TITLE}`;
    } else {
      document.title = DEFAULT_PAGE_TITLE;
    }
  }
}

export function getTitleFromRoute(route) {
  const parts = route.split('/');
  return parts[0] || 'Home';
}

export default { updatePageTitle, getTitleFromRoute };
