import { connect } from "react-redux";
import {
  editProduct,
  addProduct,
  addCategory,
  editProductAsync
} from "../actions";
import AddButton from "../components/buttons/add-btn";

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  addProduct: obj => dispatch(addProduct(obj)),
  addCategory: obj => dispatch(addCategory(obj)),
  editProduct: obj => dispatch(editProductAsync(obj))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
