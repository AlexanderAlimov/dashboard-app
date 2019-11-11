import React from "react";
import { Button } from "antd";

function ShowAll({ title, getProducts }) {
  return (
    <Button onClick={getProducts} className="row-table__btn-show">
      {title}
    </Button>
  );
}

export default ShowAll;
