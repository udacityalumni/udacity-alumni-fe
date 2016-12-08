import * as types from './constants';

export const initialState = {
  activeTab: 0,
};

const adminDashboardReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.ADMIN_DASHBOARD_SET_ACTIVE_TAB:
        return {
          ...state,
          activeTab: action.tab,
        };
      default:
        return state;
    }
  };

export default adminDashboardReducer;
