import { connect } from "react-redux";
import HomePage from "../../components/public-page/home-page";
import { getProducts, dispatchWithParams } from "../../actions";

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  getProducts: dispatchWithParams(dispatch, getProducts)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
