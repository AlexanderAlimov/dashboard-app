import React from 'react';
import { Button } from 'antd'

class RemoveCategoryBtn extends React.Component{
	render(){
		return(
			<Button className="btn-remove__categ" shape="circle" size="small" type="default">X</Button>
		)
	}
}
export default RemoveCategoryBtn;