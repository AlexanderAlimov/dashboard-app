import React, { Component, Fragment } from "react";
import { Button, Modal } from "antd";
import AddCategory from "../forms/addCategory";
import AddProduct from "../forms/addProduct";

class AddButton extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleHideModal = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { addCategory, addProduct, title, categories } = this.props;
    const onClick = title === "Add Category" ? addCategory : addProduct;
    const addForm =
      title === "Add Category" ? (
        <AddCategory
          onOk={this.handleHideModal}
          title={title}
          onClick={onClick}
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
