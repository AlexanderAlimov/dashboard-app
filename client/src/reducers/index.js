import { combineReducers } from "redux";
import products from "./products";
import categories from "./categories";
import user from "./user";
import productDetails from "./singleProduct";

export default combineReducers({
  products,
  categories,
  user,
  productDetails
});
