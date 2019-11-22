import React from "react";
import { Row, Col, Layout, Button } from "antd";
import CategoryList from "../../containers/category-list";
import AddButton from "../../containers/add-btn";
import Logo from "../logo";
import ProductsInfoTable from "../../containers/product-table";
import ErrorMessage from "../../containers/alert";
import ShowAll from "../../containers/show-all";
import AuthBtn from "../../containers/auth-btn";
import Spiner from "../../containers/spiner";

import "antd/dist/antd.css";
import "../../style.css";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
        <Logo />
        <div>
          <AuthBtn title="Logout" />
        </div>
      </Header>
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
