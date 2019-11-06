import { connect } from "react-redux";
import {
  addProduct,
  addCategory,
  editProduct,
  getCategories
} from "../actions";
import AddButton from "../components/buttons/add-btn";

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  addProduct: obj => dispatch(addProduct(obj)),
  addCategory: obj => dispatch(addCategory(obj)),
  editProduct: obj => dispatch(editProduct(obj)),
  getCategories: () => dispatch(getCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
