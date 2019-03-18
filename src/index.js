import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import CounterReducer from "./store/reducers.js/counter";
import ResultReducer from "./store/reducers.js/result";

const rootReducer = combineReducers({
  ctr: CounterReducer,
  res: ResultReducer
});

const store = createStore(rootReducer);

// provider passes info to the rest of the app. In this case reducer, which contains the state
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
