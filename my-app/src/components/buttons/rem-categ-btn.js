import React from 'react';
import { Button } from 'antd'

class RemoveCategoryBtn extends React.Component{
	render(){
		const {removeCategory} = this.props;
		return(
			<Button onClick={removeCategory} className="btn-remove__categ" shape="circle" size="small" type="default">X</Button>
		)
	}
}
export default RemoveCategoryBtn;