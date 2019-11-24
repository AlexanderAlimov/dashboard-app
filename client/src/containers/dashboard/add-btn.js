import { connect } from "react-redux";
import {
  editProduct,
  addProduct,
  addCategory,
  dispatchWithParams
} from "../../actions";
import AddButton from "../../components/buttons/add-btn";

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  addProduct: dispatchWithParams(dispatch, addProduct),
  addCategory: dispatchWithParams(dispatch, addCategory),
  editProduct: dispatchWithParams(dispatch, editProduct)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
