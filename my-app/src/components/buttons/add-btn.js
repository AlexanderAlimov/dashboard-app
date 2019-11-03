import React, { Component, Fragment } from "react";
import { Button, Modal } from "antd";
import AddForm from "../form";

class AddButton extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    const { addCategory, addProduct, title } = this.props;
    const onClick = title === "Add Category" ? addCategory : addProduct;
    return (
      <Fragment>
        <Button className="col-btn" onClick={this.showModal}>
          {title}
        </Button>
        <Modal
          title={title}
          visible={this.state.visible}
          onCancel={this.handleCancel}
        >
          <AddForm onOk={this.handleOk} title={title} onClick={onClick} />
        </Modal>
      </Fragment>
    );
  }
}
export default AddButton;