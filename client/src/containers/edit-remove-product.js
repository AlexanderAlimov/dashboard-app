import { connect } from "react-redux";
import { removeProduct, editProduct, removeProductAsync } from "../actions";
import EditRemoveBtn from "../components/buttons/edit-remove-btn";

const matchDispatchToProps = (dispatch, ownProps) => ({
  removeProduct: () => dispatch(removeProductAsync(ownProps.prodId)),
  editProduct: obj => dispatch(editProduct(obj))
});

export default connect(
  null,
  matchDispatchToProps
)(EditRemoveBtn);
