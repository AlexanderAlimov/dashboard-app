import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Row, Col } from 'antd';
import { Table , Button } from 'antd';

const columns = [{ title: 'Id'},{title: 'Product Name'},{ title: 'Value / Price'},{title: 'Price'},{title: 'edit / remove'}];
const data = [];

function App() {
  return (
		<div>
			<div>
				<Row>
					<Col span={6} className="col-logo">
						Here will be logo
					</Col>
					<Col span={18} className="col-buttons">
						<Button className="col-btn">Add Category</Button>
						<Button className="col-btn">Add Product</Button>
					</Col>
				</Row>
			</div>
			<Row>
				<Col span={18} push={6}>
					<Table columns={columns} dataSource={data} />
				</Col>
				<Col span={6} pull={18}>
					<ul className="col-category-list">
						<li>Category1</li>
						<li>Category2</li>
						<li>Category3</li>
						<li>Category4</li>
						<li>Category5</li>
					</ul>
				</Col>
			</Row>
		</div>
  );
}

export default App;
