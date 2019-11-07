import { connect } from "react-redux";
import { getProducts } from "../actions";
import ProductsInfoTable from "../components/products-info-table";

const mapStateToProps = state => ({
  products: state.products
});
const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsInfoTable);
