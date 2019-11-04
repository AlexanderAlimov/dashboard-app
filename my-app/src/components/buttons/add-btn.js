import React, { Component, Fragment } from "react";
import { Button, Modal } from "antd";
import AddCategory from "../forms/addCategory";
import AddProduct from "../forms/addProduct";
import EditProduct from "../forms/editProduct";

class AddButton extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleHideModal = e => {
    this.setState({
      visible: false
    });
  };

  render() {
    const {
      addCategory,
      addProduct,
      editProduct,
      title,
      categories,
      prodId
    } = this.props;
    const onClick =
      title === "Add Category"
        ? addCategory
        : title === "Edit"
        ? editProduct
        : addProduct;
    const addForm =
      title === "Add Category" ? (
        <AddCategory
          onOk={this.handleHideModal}
          title={title}
          onClick={onClick}
        />
      ) : title === "Edit" ? (
        <EditProduct
          onOk={this.handleHideModal}
          title={title}
          onClick={onClick}
          categories={categories}
          prodId={prodId}
        />
      ) : (
        <AddProduct
          onOk={this.handleHideModal}
          title={title}
          onClick={onClick}
          categories={categories}
        />
      );
    return (
      <Fragment>
        <Button className="col-btn" onClick={this.showModal}>
          {title}
        </Button>
        <Modal
          title={title}
          visible={this.state.visible}
          onCancel={this.handleHideModal}
        >
          {addForm}
        </Modal>
      </Fragment>
    );
  }
}
export default AddButton;
