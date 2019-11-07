import { connect } from "react-redux";
import { filterProductsByCategory, getCategories } from "../actions";
import CategoryList from "../components/category-list";

const mapStateToProps = state => ({
  categories: state.categories
});
const mapDispatchToProps = dispatch => ({
  showFilterProducts: categoryId =>
    dispatch(filterProductsByCategory(categoryId)),
  getCategories: () => dispatch(getCategories()),
  filterProductsByCategory: id => dispatch(filterProductsByCategory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
