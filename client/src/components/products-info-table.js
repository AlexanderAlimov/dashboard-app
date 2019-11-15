import React, { Fragment, useEffect } from "react";
import { Table, Divider } from "antd";
import RemoveBtn from "../containers/remove-product";
import AddButton from "../containers/add-buttons";

const columns = [
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
        <RemoveBtn
          type="danger"
          name="Delete"
          prodId={prod._id}
          prodName={prod.name}
        />
      </Fragment>
    )
  }
];

function ProductsInfoTable({ getProducts = () => {}, products = [] }) {
  useEffect(() => {
    getProducts();
  }, []);
  return <Table columns={columns} dataSource={products} rowKey="name" />;
}

export default ProductsInfoTable;
