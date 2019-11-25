import { connect } from "react-redux";
import RouteComponent from "../../router/router-component";
import { logIn, dispatchWithParams } from "../../actions/index";

const mapStateToProps = state => ({
  isLogin: state.user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  login: dispatchWithParams(dispatch, logIn)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteComponent);
