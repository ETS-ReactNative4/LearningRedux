import * as actionTypes from "../actions/actions";

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.STORE_RESULT) {
    return {
      ...state,
      // concat returns a new array by adding a new item
      results: state.results.concat({
        id: new Date().getTime(),
        value: action.result
      })
    };
  }
  if (action.type === actionTypes.DELETE_RESULT) {
    // filter returns a new array with all elements that are not equal to the id we passed with the action
    const updatedArray = state.results.filter(
      result => result.id !== action.resultElementId
    );
    return {
      ...state,
      results: updatedArray
    };
  }

  return state;
};

export default reducer;
