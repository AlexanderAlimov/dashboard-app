import { connect } from "react-redux";
import ErrorMessage from "../components/alert";
import { removeError } from "../actions/index";

const mapStateToProps = state => ({
  error: state.errors
});

const mapDispatchToProps = dispatch => ({
  removeError: () => dispatch(removeError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorMessage);
