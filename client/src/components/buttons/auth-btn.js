import React, { Fragment, useState } from "react";
import { Button, Modal } from "antd";
import AuthForm from "../forms/auth-form";

function AuthBtn({ title, login, logout }) {
  const [isVisible, setInvisible] = useState(false);

  const showModal = () => {
    setInvisible(true);
  };

  const handleHideModal = () => {
    setInvisible(false);
  };

  const onClick = title === "Login" ? showModal : logout;

  return (
    <Fragment>
      <Button className="row-table__btn-show" onClick={onClick}>
        {title}
      </Button>
      <Modal title={title} visible={isVisible} onCancel={handleHideModal}>
        <AuthForm title={title} onOk={handleHideModal} onClick={login} />
      </Modal>
    </Fragment>
  );
}

export default AuthBtn;
