import { connect } from "react-redux";
import { editProduct, removeProduct } from "../actions";
import EditRemoveBtn from "../components/buttons/edit-remove-btn";

const matchDispatchToProps = (dispatch, ownProps) => ({
  removeProduct: () => dispatch(removeProduct(ownProps.prodId)),
  editProduct: obj => dispatch(editProduct(obj))
});

export default connect(
  null,
  matchDispatchToProps
)(EditRemoveBtn);
