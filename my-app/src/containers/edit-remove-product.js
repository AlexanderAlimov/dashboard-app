import { connect } from "react-redux";
import { removeProduct } from "../actions";
import EditRemoveBtn from "../components/buttons/edit-remove-btn";

const matchDispatchToProps = (dispatch, ownProps) => ({
  removeProduct: () => dispatch(removeProduct(ownProps.prodId)),
  editProduct: () => dispatch(removeProduct(ownProps.prodId))
});

export default connect(
  null,
  matchDispatchToProps
)(EditRemoveBtn);
