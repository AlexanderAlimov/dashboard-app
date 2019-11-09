import { Alert } from "antd";
import React, { useState, Fragment } from "react";

function ErrorMessage({ error, removeError }) {
  const isError = error.length > 0 ? true : false;
  return (
    <Fragment>
      {isError ? (
        <Alert
          message="Error"
          description={error}
          type="error"
          closable
          afterClose={removeError}
        />
      ) : null}
    </Fragment>
  );
}

export default ErrorMessage;
