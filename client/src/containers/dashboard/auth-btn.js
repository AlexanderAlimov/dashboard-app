import { connect } from "react-redux";
import AuthBtn from "../../components/buttons/auth-btn";
import { logOut, dispatchWithParams } from "../../actions/index";

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  logout: dispatchWithParams(dispatch, logOut)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthBtn);
