import * as types from './constants';

// adminDashboarddefaultAction :: Int -> {Action}
export const setActiveTab = (tab) => ({
  type: types.ADMIN_DASHBOARD_SET_ACTIVE_TAB,
  tab,
});
