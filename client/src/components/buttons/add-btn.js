import React, { Component, Fragment } from "react";
import { Button, Modal } from "antd";
import AddCategory from "../forms/add-category";
import AddEditProduct from "../forms/add-edit-product";

class AddButton extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

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
      product
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
      ) : (
        <AddEditProduct
          onOk={this.handleHideModal}
          title={title}
          onClick={onClick}
          categories={categories}
          prod={product}
        />
      );
    const classNameBtn = title === "Edit" ? "ant-btn__width" : "col-btn";
    return (
      <Fragment>
        <Button className={classNameBtn} onClick={this.showModal}>
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
