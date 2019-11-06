import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Table, Divider } from "antd";
import EditRemoveBtn from "../containers/edit-remove-product";
import AddButton from "../containers/add-buttons";

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

function ProductsInfoTable({ products }) {
  return <Table columns={columns} dataSource={products} rowKey="name" />;
}

const mapStateToProps = state => ({
  products: state.products
});

export default connect(mapStateToProps)(ProductsInfoTable);
