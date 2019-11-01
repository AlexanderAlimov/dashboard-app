import React from 'react';
import { Button  } from "antd";

class EditRemoveBtn extends React.Component{
	render(){
		const { name , type , removeProduct , editProduct } = this.props;
		const onClick = name === "Delete" ? removeProduct : editProduct;
		return(
			<Button onClick={onClick} type={this.props.type}>{this.props.name}</Button>
		)
	}
}
export default EditRemoveBtn;