import { connect } from "react-redux";
import { removeProduct, dispatchWithParams } from "../actions";
import RemoveBtn from "../components/buttons/remove-btn";

const matchDispatchToProps = (dispatch, ownProps) => ({
  removeProduct: dispatchWithParams(dispatch, () =>
    removeProduct(ownProps.prodId)
  )
});

export default connect(
  null,
  matchDispatchToProps
)(RemoveBtn);
