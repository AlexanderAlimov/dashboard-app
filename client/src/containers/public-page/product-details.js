import { connect } from "react-redux";
import ProductDetails from "../../components/public-page/product.details";

const mapStateToProps = state => ({
  products: state.products,
  categories: state.categories
});

export default connect(mapStateToProps)(ProductDetails);
