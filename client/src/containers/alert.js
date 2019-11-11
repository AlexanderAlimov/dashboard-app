import { connect } from "react-redux";
import ErrorMessage from "../components/alert";
import { removeError, dispatchWithParams } from "../actions/index";

const mapStateToProps = state => ({
  error: state.errors
});

const mapDispatchToProps = dispatch => ({
  removeError: dispatchWithParams(dispatch, removeError)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorMessage);
