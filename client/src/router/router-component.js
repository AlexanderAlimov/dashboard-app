import React from "react";
import Dashboard from "../components/dashboard/dashboard";
import LoginForm from "../components/forms/login-form";
import ErrorMessage from "../containers/dashboard/alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NavHeader from "../components/header";
import HomePage from "../containers/public-page/home-page";
import Logo from "../components/dashboard/logo";
import ProductDetails from "../containers/public-page/product-details";

function RouterComponent({ isLogin, login }) {
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
        <Route path="/products/:id">
          <ProductDetails isLogin={isLogin} />
        </Route>
        <Route exact path="/">
          <HomePage isLogin={isLogin} />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterComponent;
