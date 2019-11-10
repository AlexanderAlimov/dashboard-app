import React from "react";
import { Button } from "antd";
import deleteModal from "../modals/delete-modal";

function RemoveCategoryBtn(props) {
  const { removeCategory } = props;
  return (
    <Button
      onClick={() => {
        deleteModal(removeCategory);
      }}
      className="btn-remove__categ"
      shape="circle"
      size="small"
      type="default"
    >
      X
    </Button>
  );
}
export default RemoveCategoryBtn;
