import expect from 'expect';
import adminDashboardReducer, { initialState } from '../reducer';
import * as types from '../constants';

describe('adminDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(
      adminDashboardReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_SELECTED_ROW', () => {
    const row = 3;
    const stateBefore = {
      userTable: {
        selectedRow: null,
      },
    };
    const stateAfter = {
      userTable: {
        selectedRow: row,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_SET_SELECTED_ROW,
        row,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_SORT_OPTIONS', () => {
    const index = 3;
    const ascending = false;
    const stateBefore = {
      userTable: {
        sortIndex: 0,
        sortAscending: true,
      },
    };
    const stateAfter = {
      userTable: {
        sortIndex: index,
        sortAscending: ascending,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_SET_SORT_OPTIONS,
        index,
        ascending,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_SET_ERROR', () => {
    const error = new Error('Oopsies');
    const stateBefore = {
      error: null,
    };
    const stateAfter = {
      error,
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_SET_ERROR,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_CLEAR_ERROR', () => {
    const error = new Error('Oopsies');
    const stateBefore = {
      error,
    };
    const stateAfter = {
      error: null,
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_CLEAR_ERROR,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_TOGGLE_ASIDE', () => {
    const stateBefore = {
      aside: {
        isVisible: true,
      },
    };
    const stateAfter = {
      aside: {
        isVisible: false,
      },
    };
    expect(
      adminDashboardReducer(stateBefore, {
        type: types.ADMIN_DASHBOARD_TOGGLE_ASIDE,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for ADMIN_DASHBOARD_CLEAR_USER_EDITING', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_USER_EDITING', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_USERS_PAGE', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_ARTICLES_PAGE', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_USERS', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_ARTICLES', () => {});
  it('should handle reducer for ADMIN_DASHBOARD_SET_ACTIVE_TAB', () => {});
});
