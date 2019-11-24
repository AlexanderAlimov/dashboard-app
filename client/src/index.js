import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import MainComponent from "./containers/dashboard/main-container";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

render(
  <Provider store={store}>
    <MainComponent />
  </Provider>,
  document.getElementById("root")
);
