import React from "react";
import { connect } from "react-redux";
import { removeProduct } from "../actions"
import EditRemoveBtn from "../components/buttons/edit-remove-btn";

const matchDispatchToProps = (dispatch , ownProps) => ({
	removeProduct: () => dispatch(removeProduct(ownProps.id)),
	editProduct: () => dispatch(console.log("EDITING PRODUCT")),
})


export default connect(null,matchDispatchToProps)(EditRemoveBtn);