import React from "react";
import Dashboard from "./dashboard";
import LoginForm from "../forms/login-form";
import ErrorMessage from "../../containers/dashboard/alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NavHeader from "../header";
import HomePage from "../../containers/public-page/home-page";
import Logo from "./logo";
import ProductDetails from "../../containers/public-page/product-details";

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
        {isLogin && (
          <Route path="/dashboard">
            <NavHeader isLogin={isLogin} />
            <Dashboard />
          </Route>
        )}
        <Route path="/:id">
          <ProductDetails isLogin={isLogin} />
        </Route>
        <Route path="/">
          <HomePage isLogin={isLogin} />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default MainComponent;
