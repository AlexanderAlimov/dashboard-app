import React from "react";

function Logo({ place }) {
  const logoStyle =
    place === "login-form" ? "login-form__logo" : "my-app__logo";
  return <div className={logoStyle}> MY APP</div>;
}
export default Logo;
