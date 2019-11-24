import { connect } from "react-redux";
import { getProducts, dispatchWithParams } from "../../actions";
import ShowAll from "../../components/buttons/show-btn";

const matchDispatchToProps = dispatch => ({
  getProducts: dispatchWithParams(dispatch, getProducts)
});

export default connect(
  null,
  matchDispatchToProps
)(ShowAll);
