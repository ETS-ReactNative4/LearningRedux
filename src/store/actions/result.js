import * as actionTypes from "./actionTypes";

export const saveResust = res => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};

export const storeResult = res => {
  // thunk will give us the dispatch
  //middleware runs between the dispatch and before the action reaches the reducer
  return dispatch => {
    setTimeout(() => {
      // we need to use a synchronus action creator in an a-synchronus function
      dispatch(saveResust(res));
    }, 2000);
  };
};

export const deleteResult = resElID => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId: resElID
  };
};
