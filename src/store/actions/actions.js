export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = value => {
  return {
    type: ADD,
    value: value
  };
};

export const subtract = value => {
  return {
    type: SUBTRACT,
    value: value
  };
};

export const saveResust = res => {
  return {
    type: STORE_RESULT,
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
    type: DELETE_RESULT,
    resultElementId: resElID
  };
};
