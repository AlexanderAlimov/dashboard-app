import { combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
import { itemsHasErrored, itemsIsLoading, items } from "./items";

export default combineReducers({
  products,
  categories,
  items,
  itemsHasErrored,
  itemsIsLoading
});
