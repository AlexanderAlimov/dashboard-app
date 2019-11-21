import React, { Fragment } from "react";
import { Spin } from "antd";

function Spiner({ loading, belongs }) {
  const position =
    belongs === "products-table" ? "prod-position" : "categ-position";
  return (
    <Fragment>
      {loading ? (
        <div className={position}>
          <Spin size="large" />
        </div>
      ) : null}
    </Fragment>
  );
}

export default Spiner;
