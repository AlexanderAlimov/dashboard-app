import React, { Component } from "react";
import { Button, Modal } from "antd";

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
    const clickAndClose = () => {
      onClick();
      this.handleOk();
    };
    return (
      <React.Fragment>
        <Button className="col-btn" onClick={this.showModal}>
          {title}
        </Button>
        <Modal
          title={title}
          visible={this.state.visible}
          onOk={clickAndClose}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: false }}
          cancelButtonProps={{ disabled: false }}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AddButton;
