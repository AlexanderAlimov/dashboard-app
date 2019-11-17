import { connect } from "react-redux";
import AuthBtn from "../components/buttons/auth-btn";
import { logIn, logOut, dispatchWithParams } from "../actions/index";

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => ({
  login: dispatchWithParams(dispatch, logIn),
  logout: dispatchWithParams(dispatch, logOut)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthBtn);
