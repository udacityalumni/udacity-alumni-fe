import * as types from './constants';

// startLoading :: None -> {Action}
export const startLoading = () => ({
  type: types.START_LANDING_LOADING,
});

// stopLoading :: None -> {Action}
export const stopLoading = () => ({
  type: types.STOP_LANDING_LOADING,
});

// fakeLatency :: None -> Promise
const fakeLatency = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

// fakeLoading :: None -> Thunk
export const fakeLoading = () =>
  (dispatch) => {
    dispatch(
      startLoading()
    );
    fakeLatency().then(() => {
      dispatch(
        stopLoading()
      );
    });
  };
