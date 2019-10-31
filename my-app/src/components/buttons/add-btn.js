import React from 'react';
import { Button } from 'antd';

class AddButton extends React.Component{
	
	render(){
		console.log(this.props);
		return <Button className="col-btn" onClick={this.props.onClick}>{this.props.title}</Button>
	}
}
export default AddButton;