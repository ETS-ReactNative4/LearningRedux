const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// Reducer
// rootReducer is the name we chose for the reducer
// action returns the updated state
// reducer changes the state manipulation data of the project

const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
// subscriptions make sure you don't have to manually call getState(). It informs you when you need to get a new state when something changes
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
