import React from 'react';
import { connect } from 'react-redux'
import { Table, Divider } from 'antd';
import EditRemoveBtn from '../containers/edit-remove-product';

const columns = [
	{ 
		title: 'Id',
		dataIndex : 'id',
		key : 'id'
	},
	{
		title: 'Product Name',
		dataIndex : "name",
		key: "name"
	},
	{ 
		title: 'Purchase price',
		dataIndex : "purchPrice",
		key: "purchPrice"
	},
	{
		title: 'The sale price',
		dataIndex : "salePrice",
		key: 'salesPrice'
	},
	{
		title: 'edit / remove',
		key: 'action',
		render: () => (
			<React.Fragment>
				<EditRemoveBtn type="primary" name="Edit" />
				<Divider type="vertical" />
				<EditRemoveBtn type="danger" name="Delete" />
			</React.Fragment>
		)
	}];


class ProductsInfoTable extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		// console.log(this.props);
		return(
			<Table columns={columns} dataSource={this.props.products}/>
		)
	}
}

const mapStateToProps = (state) => ({
	products : state.products
}); 


export default connect(mapStateToProps)(ProductsInfoTable);