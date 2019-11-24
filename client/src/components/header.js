import React from "react";
import { Link } from "react-router-dom";
import AuthBtn from "../containers/dashboard/auth-btn";
import Logo from "./dashboard/logo";
import { Layout } from "antd";
const { Header } = Layout;

function NavHeader({ isLogin }) {
  const dashboard = isLogin ? <Link to="/dashboard">Dashboard</Link> : null;
  return (
    <Header className="header">
      <ul className="header-menu">
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li className="link">{dashboard}</li>
      </ul>
      <div>
        <AuthBtn />
      </div>
    </Header>
  );
}

export default NavHeader;
