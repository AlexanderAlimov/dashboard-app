import React, { Fragment, useState } from "react";
import { Button, Modal } from "antd";
import AddCategory from "../forms/add-category";
import AddEditProduct from "../forms/add-edit-product";

function AddButton(props) {
  const [isVisible, setInvisible] = useState(false);

  const showModal = () => {
    setInvisible(true);
  };

  const handleHideModal = () => {
    setInvisible(false);
  };

  const {
    addCategory,
    addProduct,
    editProduct,
    title,
    categories,
    product
  } = props;

  const onClick =
    title === "Add Category"
      ? addCategory
      : title === "Edit"
      ? editProduct
      : addProduct;

  const addForm =
    title === "Add Category" ? (
      <AddCategory onOk={handleHideModal} title={title} onClick={onClick} />
    ) : (
      <AddEditProduct
        onOk={handleHideModal}
        title={title}
        onClick={onClick}
        categories={categories}
        prod={product}
      />
    );

  const classNameBtn = title === "Edit" ? "ant-btn__width" : "col-btn";

  return (
    <Fragment>
      <Button className={classNameBtn} onClick={showModal}>
        {title}
      </Button>
      <Modal title={title} visible={isVisible} onCancel={handleHideModal}>
        {addForm}
      </Modal>
    </Fragment>
  );
}
export default AddButton;
