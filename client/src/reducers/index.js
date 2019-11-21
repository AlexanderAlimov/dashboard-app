import { combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
import errors from "./errors";
import loading from "./load";

export default combineReducers({
  products,
  categories,
  errors,
  loading
});
