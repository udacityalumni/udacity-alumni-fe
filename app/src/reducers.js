import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// Import all of your reducers here:
import landing from 'containers/LandingContainer/reducer';
import loginContainer from 'containers/LoginContainer/reducer';
import signupContainer from 'containers/SignupContainer/reducer';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  loginContainer,
  signupContainer,
  landing,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
