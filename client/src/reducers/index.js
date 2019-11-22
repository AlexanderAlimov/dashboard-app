import { combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
import errors from "./errors";
import loading from "./load";
import isLogin from "./login";

export default combineReducers({
  products,
  categories,
  errors,
  loading,
  isLogin
});
