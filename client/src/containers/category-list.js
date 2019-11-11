import { connect } from "react-redux";
import { getProducts, getCategories, dispatchWithParams } from "../actions";
import CategoryList from "../components/category-list";

const mapStateToProps = state => ({
  categories: state.categories
});
const mapDispatchToProps = dispatch => ({
  getCategories: dispatchWithParams(dispatch, getCategories),
  getProducts: dispatchWithParams(dispatch, getProducts)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
