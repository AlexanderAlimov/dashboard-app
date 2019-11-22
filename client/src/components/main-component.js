import React, { useState, Fragment } from "react";
import Dashboard from "../components/dashboard/dashboard";
import LoginForm from "../components/forms/login-form";

function MainComponent({ isLogin, login }) {
  const displayComponent = isLogin ? (
    <Dashboard />
  ) : (
    <LoginForm onClick={login} className="login-form" />
  );
  return <Fragment>{displayComponent}</Fragment>;
}

export default MainComponent;
