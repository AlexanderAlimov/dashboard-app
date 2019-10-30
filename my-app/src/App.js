import React from 'react';
import { Row, Col } from 'antd';
import CategoryList from './components/category-list';
import AddButton from './components/buttons/add-btn';
import Logo from './components/logo';
import ProductsInfoTable from './components/products-info-table';

import 'antd/dist/antd.css';
import './style.css';

function App() {
  return (
		<div>
			<div>
				<Row>
					<Col span={6} className="col-logo">
						<Logo	/>
					</Col>
					<Col span={18} className="col-buttons">
						<AddButton  title="Add Category" />
						<AddButton  title="Add Product" />
					</Col>
				</Row>
			</div>
			<Row>
			<Col span={6} >
				<CategoryList />
			</Col>
			<Col span={17} >
				<ProductsInfoTable />
			</Col>
			</Row>
		</div>
  );
}

export default App;
