import { connect } from "react-redux";
import MainComponent from "../components/main-component";
import { logIn, dispatchWithParams } from "../actions/index";

const mapStateToProps = state => ({
  isLogin: state.isLogin
});

const mapDispatchToProps = dispatch => ({
  login: dispatchWithParams(dispatch, logIn)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent);
