import React, { Fragment } from "react";
import { Row, Col } from "antd";
import CategoryList from "./containers/category-list";
import AddButton from "./containers/add-buttons";
import Logo from "./components/logo";
import ProductsInfoTable from "./containers/product-table";
import ErrorMessage from "./containers/alert";

import "antd/dist/antd.css";
import "./style.css";

function App() {
  return (
    <Fragment>
      <Row>
        <Col span={6} className="col-logo">
          <Logo />
        </Col>
        <Col span={11} className="col-buttons">
          <AddButton title="Add Category" />
          <AddButton title="Add Product" />
        </Col>
        <Col span={7} className="col-logo">
          <ErrorMessage />
        </Col>
      </Row>
      <Row className="row-table">
        <Col span={6}>
          <CategoryList />
        </Col>
        <Col span={18}>
          <ProductsInfoTable />
        </Col>
      </Row>
    </Fragment>
  );
}

export default App;
