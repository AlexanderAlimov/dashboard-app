import { connect } from "react-redux";
import { getProducts, dispatchWithParams } from "../../actions";
import ProductsInfoTable from "../../components/dashboard/products-info-table";

const mapStateToProps = state => ({
  products: state.products,
  loading: state.loading
});
const mapDispatchToProps = dispatch => ({
  getProducts: dispatchWithParams(dispatch, getProducts)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsInfoTable);
