import { connect } from "react-redux";
import { addProduct, addCategory } from "../actions";
import AddButton from "../components/buttons/add-btn";

// const newProductTest = {
//   id: 222,
//   name: "testProduct",
//   purchPrice: 999,
//   salesPrice: 9999
// };

// const newCategoryTest = {
//   name: "Category10",
//   id: 12345
// };

const mapDispatchToProps = dispatch => ({
  addProduct: () => dispatch(addProduct()),
  addCategory: () => dispatch(addCategory())
});

export default connect(
  null,
  mapDispatchToProps
)(AddButton);
