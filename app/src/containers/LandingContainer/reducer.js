import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isLoading: false,
};

const landingReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.START_LANDING_LOADING:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.STOP_LANDING_LOADING:
        return update(state, {
          isLoading: {
            $set: false,
          },
        });
      default:
        return state;
    }
  };

export default landingReducer;
