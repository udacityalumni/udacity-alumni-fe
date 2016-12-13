import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';

/* GENERATOR: Import all of your reducers */
import feedbackContainer from 'containers/FeedbackContainer/reducer';
import writerDashboard from './containers/WriterDashboardContainer/reducer';
import adminDashboardContainer from 'containers/AdminDashboardContainer/reducer';
import landing from 'containers/LandingContainer/reducer';
import loginContainer from 'containers/LoginContainer/reducer';
import signupContainer from 'containers/SignupContainer/reducer';
import cmsEditorContainer from 'containers/CmsEditorContainer/reducer';
import singleArticleContainer from 'containers/SingleArticleContainer/reducer';
import searchContainer from 'containers/SearchContainer/reducer';
import carouselWidgetContainer from 'containers/CarouselWidgetContainer/reducer';
import articleFeedContainer from 'containers/ArticleFeedContainer/reducer';
import userProfileContainer from 'containers/UserProfileContainer/reducer';
import archiveContainer from 'containers/ArticleArchiveContainer/reducer';
import resetPassword from 'containers/ResetPasswordContainer/reducer';
import app from 'containers/AppContainer/reducer';

const rootReducer = combineReducers({
  /* GENERATOR: Compile all of your reducers */
  feedbackContainer,
  writerDashboard,
  adminDashboardContainer,
  loginContainer,
  signupContainer,
  landing,
  app,
  searchContainer,
  cmsEditorContainer,
  singleArticleContainer,
  carouselWidgetContainer,
  articleFeedContainer,
  userProfileContainer,
  archiveContainer,
  resetPassword,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
