import React from 'react';

class Category extends React.Component{
	render(){
		return(
			<a href="#">{this.props.name}</a>
		)
	}
}
export default Category;