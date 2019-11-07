import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Table, Divider } from "antd";
import EditRemoveBtn from "../containers/edit-remove-product";
import AddButton from "../containers/add-buttons";
import { getProducts } from "../actions";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Product Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Purchase price",
    dataIndex: "purchPrice",
    key: "purchPrice"
  },
  {
    title: "The sale price",
    dataIndex: "salePrice",
    key: "salesPrice"
  },
  {
    title: "edit / remove",
    key: "action",
    render: prod => (
      <Fragment>
        <AddButton title="Edit" product={prod} />
        <Divider type="vertical" />
        <EditRemoveBtn
          type="danger"
          name="Delete"
          prodId={prod.id}
          prodName={prod.name}
        />
      </Fragment>
    )
  }
];

function ProductsInfoTable(props) {
  useEffect(() => {
    props.getProducts();
  }, []);
  return <Table columns={columns} dataSource={props.products} rowKey="name" />;
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDisPatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(ProductsInfoTable);
