import React from 'react';
import { Table, Divider } from 'antd';
import EditRemoveBtn from './buttons/edit-remove-btn';

const productArr = [
	{
		id: "1",
		name: "product1",
		purchPrice: 200,
		salePrice: 300
	},
	{
		id: "2",
		name: "product2",
		purchPrice: 200,
		salePrice: 400
	},
	{
		id: "3",
		name: "product3",
		purchPrice: 300,
		salePrice: 500
	},
	{
		id: "4",
		name: "product4",
		purchPrice: 400,
		salePrice: 600
	}
]

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
	render(){
		return(
			<Table columns={columns} dataSource={productArr}/>
		)
	}
}
export default ProductsInfoTable;