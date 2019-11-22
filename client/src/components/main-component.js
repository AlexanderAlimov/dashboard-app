import React, { useState, Fragment } from "react";
import Dashboard from "../components/dashboard/dashboard";
import LoginForm from "../components/forms/login-form";
import ErrorMessage from "../containers/alert";

function MainComponent({ isLogin, login }) {
  const displayComponent = isLogin ? (
    <Dashboard />
  ) : (
    <Fragment>
      <ErrorMessage />
      <LoginForm onClick={login} className="login-form" />
    </Fragment>
  );
  return <Fragment>{displayComponent}</Fragment>;
}

export default MainComponent;
