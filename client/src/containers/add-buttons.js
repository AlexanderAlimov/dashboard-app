import { connect } from "react-redux";
import {
  addProduct,
  addCategory,
  editProduct,
  addProductAsync,
  addCategoryAsync
} from "../actions";
import AddButton from "../components/buttons/add-btn";

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  addProduct: obj => dispatch(addProductAsync(obj)),
  addCategory: obj => dispatch(addCategoryAsync(obj)),
  editProduct: obj => dispatch(editProduct(obj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
