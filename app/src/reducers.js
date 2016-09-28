import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// Import all of your reducers here:
import landing from 'containers/LandingContainer/reducer';
import loginContainer from 'containers/LoginContainer/reducer';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  loginContainer,
  landing,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
