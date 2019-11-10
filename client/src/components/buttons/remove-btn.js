import React from "react";
import { Button } from "antd";
import deleteModal from "../modals/delete-modal";

function RemoveBtn(props) {
  const { name, removeProduct, prodName, type } = props;
  return (
    <Button onClick={() => deleteModal(removeProduct, prodName)} type={type}>
      {name}
    </Button>
  );
}
export default RemoveBtn;
