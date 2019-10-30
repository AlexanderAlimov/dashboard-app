import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Row, Col } from 'antd';
import { Table } from 'antd';
import CategoryList from './components/category-list';
import AddButton from './components/buttons/add-btn';
import Logo from './components/logo';

const columns = [{ title: 'Id'},{title: 'Product Name'},{ title: 'Value / Price'},{title: 'Price'},{title: 'edit / remove'}];
const data = [];

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
				<Col span={18} push={6}>
					<Table columns={columns} dataSource={data} />
				</Col>
				<Col span={6} pull={18}>
					<CategoryList  />
				</Col>
			</Row>
		</div>
  );
}

export default App;
