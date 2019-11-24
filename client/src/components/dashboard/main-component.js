import React from "react";
import Dashboard from "./dashboard";
import LoginForm from "../forms/login-form";
import ErrorMessage from "../../containers/dashboard/alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavHeader from "../header";
import HomePage from "../../containers/public-page/home-page";
import Logo from "./logo";

function MainComponent({ isLogin, login }) {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <div className="login-form__with-error">
            <div className="login-form__error-message">
              <ErrorMessage />
            </div>
            <Link to="/">
              <Logo place="login-form" />
            </Link>
            <LoginForm onClick={login} isLogin={isLogin} />
          </div>
        </Route>
        <Route path="/dashboard">
          <NavHeader isLogin={isLogin} />
          <Dashboard />
        </Route>
        <Route path="/">
          <HomePage isLogin={isLogin} />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainComponent;
