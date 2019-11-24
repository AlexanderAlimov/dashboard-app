import React from "react";
import { Row, Col, Layout } from "antd";
import CategoryList from "../../containers/dashboard/category-list";
import AddButton from "../../containers/dashboard/add-btn";
import ProductsInfoTable from "../../containers/dashboard/product-table";
import ErrorMessage from "../../containers/dashboard/alert";
import ShowAll from "../../containers/dashboard/show-all";
import Spiner from "../../containers/spiner";

import "antd/dist/antd.css";
import "../../style.css";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Content className="content">
        <Row>
          <Col span={6} className="col-logo"></Col>
          <Col span={11} className="col-buttons">
            <AddButton title="Add Category" />
            <AddButton title="Add Product" />
          </Col>
          <Col span={7} className="col-logo">
            <ErrorMessage />
          </Col>
        </Row>
        <Row className="row-table">
          <Col span={6} className="col-position">
            <Spiner belongs="categ-list" />
            <ShowAll title="Show All" />
            <CategoryList />
          </Col>
          <Col span={18} className="col-position">
            <ProductsInfoTable />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
