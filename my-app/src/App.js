import React from 'react';
import { Row, Col } from 'antd';
import CategoryList from './components/category-list';
import AddButton from './containers/add-buttons';
import Logo from './components/logo';
import ProductsInfoTable from './components/products-info-table';

import 'antd/dist/antd.css';
import './style.css';

function App() {
  return (
		<React.Fragment>
			<Row>
				<Col span={6} className="col-logo">
					<Logo	/>
				</Col>
				<Col span={18} className="col-buttons">
					<AddButton  title="Add Category" />
					<AddButton  title="Add Product" />
				</Col>
			</Row>		
			<Row className="row-table">
				<Col span={6} >
					<CategoryList />
				</Col>
				<Col span={18} >
					<ProductsInfoTable />
				</Col>
			</Row>
		</React.Fragment>
  );
}

export default App;
