import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('WriterDashboard actions', () => {
  it('has a type of WRITERDASHBOARD_DEFAULT_ACTION', () => {
    const expected = {
      type: types.WRITERDASHBOARD_DEFAULT_ACTION,
    };
    expect(actions.writerDashboardDefaultAction()).toEqual(expected);
  });
});
