import React from "react";
import { Button } from "antd";

function AddButton(props) {
  const { addCategory, addProduct, title } = props;
  const onClick = title === "Add Category" ? addCategory : addProduct;
  return (
    <Button className="col-btn" onClick={onClick}>
      {title}
    </Button>
  );
}

export default AddButton;
