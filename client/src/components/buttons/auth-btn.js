import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

function AuthBtn({ logout, isLoggedIn }) {
  const title = isLoggedIn ? "Logout" : "Login";

  const button = isLoggedIn ? (
    <Button className="row-table__btn-show" onClick={logout}>
      {title}
    </Button>
  ) : (
    <Button className="row-table__btn-show">
      {" "}
      <Link to="/login">{title}</Link>
    </Button>
  );

  return button;
}
export default AuthBtn;
