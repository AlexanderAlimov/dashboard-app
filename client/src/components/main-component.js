import React, { useState, Fragment } from "react";
import Dashboard from "../components/dashboard/dashboard";
import LoginForm from "../components/forms/login-form";
import ErrorMessage from "../containers/alert";

function MainComponent({ isLogin, login }) {
  const displayComponent = isLogin ? (
    <Dashboard />
  ) : (
    <div className="login-form__with-error">
      <div className="login-form__error-message">
        <ErrorMessage />
      </div>
      <LoginForm onClick={login} />
    </div>
  );
  return displayComponent;
}

export default MainComponent;
