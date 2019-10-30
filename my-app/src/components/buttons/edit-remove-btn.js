import React from 'react';
import { Button  } from "antd";

class EditRemoveBtn extends React.Component{
	render(){
		return(
			<Button type={this.props.type}>{this.props.name}</Button>
		)
	}
}

export default EditRemoveBtn;