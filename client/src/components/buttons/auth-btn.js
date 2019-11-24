import React from "react";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";

function AuthBtn({ logout, isLoggedIn }) {
  const title = isLoggedIn ? "Logout" : "Login";

  let history = useHistory();

  const handleClick = () => {
    logout();
    history.push("/");
  };

  const button = isLoggedIn ? (
    <Button className="row-table__btn-show" onClick={handleClick}>
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
