import { connect } from "react-redux";
import ProductDetails from "../../components/public-page/product.details";
import { getSingleProduct, dispatchWithParams } from "../../actions";

const mapStateToProps = state => ({
  product: state.productDetails
});

const mapDispatchToProps = dispatch => ({
  getProduct: dispatchWithParams(dispatch, getSingleProduct)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
