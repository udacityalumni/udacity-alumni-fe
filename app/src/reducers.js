import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// Import all of your reducers here:
import landing from 'containers/LandingContainer/reducer';
import loginContainer from 'containers/LoginContainer/reducer';
import signupContainer from 'containers/SignupContainer/reducer';
import cmsEditorContainer from 'containers/CmsEditorContainer/reducer';
import SinglePostReducer from 'containers/SinglePostContainer/reducer';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  loginContainer,
  signupContainer,
  landing,
  cmsEditorContainer,
  SinglePostReducer,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
