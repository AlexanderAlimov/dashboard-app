import React from 'react';
import { Button  } from "antd";
import EditModalProduct from "../modals/delete-modal"

class EditRemoveBtn extends React.Component{
	render(){
		const { name , removeProduct , editProduct } = this.props;
		const onClick = name === "Delete" ? removeProduct : EditModalProduct;
		return(
			<Button onClick={EditModalProduct.bind(null,{func: onClick})} type={this.props.type}>{this.props.name}</Button>
		)
	}
}
export default EditRemoveBtn;