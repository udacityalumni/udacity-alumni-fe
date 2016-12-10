import expect from 'expect';
import adminDashboardReducer, { initialState } from '../reducer';

describe('adminDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(
      adminDashboardReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_ERROR', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_CLEAR_ERROR', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_TOGGLE_ASIDE', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_CLEAR_USER_EDITING', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_USER_EDITING', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_USERS_PAGE', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_ARTICLES_PAGE', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_USERS', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_ARTICLES', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_ACTIVE_TAB', () => {});
});
