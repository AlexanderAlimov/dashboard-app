import React from "react";
import { Button } from "antd";
import deleteModal from "../modals/delete-modal";

function EditRemoveBtn(props) {
  const { name, removeProduct, editProduct, prodName, type } = props;
  const onClick = name === "Delete" ? removeProduct : editProduct;
  return (
    <Button onClick={deleteModal.bind(null, onClick, prodName)} type={type}>
      {name}
    </Button>
  );
}
export default EditRemoveBtn;
