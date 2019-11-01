import React from 'react';
import { Button } from 'antd';

class AddButton extends React.Component{
	
	render(){
		const onClick = this.props.title === "Add Category" ? this.props.addCategory : this.props.addProduct
		return <Button className="col-btn" onClick={onClick}>{this.props.title}</Button>
	}
}
export default AddButton;