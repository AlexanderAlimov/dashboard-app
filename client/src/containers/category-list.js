import { connect } from "react-redux";
import { getProducts, getCategories } from "../actions";
import CategoryList from "../components/category-list";

const mapStateToProps = state => ({
  categories: state.categories
});
const mapDispatchToProps = dispatch => ({
  showFilterProducts: categoryId => dispatch(getProducts(categoryId)),
  getCategories: () => dispatch(getCategories()),
  getProducts: id => dispatch(getProducts(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
