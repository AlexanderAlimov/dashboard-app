import React from 'react';
import { Button } from 'antd';

class AddButton extends React.Component{
	render(){
		return <Button className="col-btn">{this.props.title}</Button>
	}
}

export default AddButton;