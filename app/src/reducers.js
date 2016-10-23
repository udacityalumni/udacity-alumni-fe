import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';

// Import all of your reducers here:
import landing from 'containers/LandingContainer/reducer';
import loginContainer from 'containers/LoginContainer/reducer';
import signupContainer from 'containers/SignupContainer/reducer';
import cmsEditorContainer from 'containers/CmsEditorContainer/reducer';
import contentDashboardContainer from 'containers/ContentDashboardContainer/reducer';
import singleArticleContainer from 'containers/SingleArticleContainer/reducer';
import searchContainer from 'containers/SearchContainer/reducer';
import carouselWidgetContainer from 'containers/CarouselWidgetContainer/reducer';
import articleFeedContainer from 'containers/ArticleFeedContainer/reducer';
import userProfileContainer from 'containers/UserProfileContainer/reducer';
import archiveContainer from 'containers/ArticleArchiveContainer/reducer';
import app from 'components/App/reducer';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  loginContainer,
  signupContainer,
  landing,
  app,
  searchContainer,
  cmsEditorContainer,
  singleArticleContainer,
  contentDashboardContainer,
  carouselWidgetContainer,
  articleFeedContainer,
  userProfileContainer,
  archiveContainer,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
