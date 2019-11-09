import React from "react";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware, thunkMiddleware)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
