import { connect } from "react-redux";
import { removeProduct } from "../actions";
import RemoveBtn from "../components/buttons/remove-btn";

const matchDispatchToProps = (dispatch, ownProps) => ({
  removeProduct: () => dispatch(removeProduct(ownProps.prodId))
});

export default connect(
  null,
  matchDispatchToProps
)(RemoveBtn);
