import React from "react";
import Logo from "./images/logo.png";
export const Login = () => {
  return (
    <>
      <img src={Logo} alt="logo" className="logo" />
      <form method="post" className="login-form">
        <h1>Sign in</h1>
        <div className="form-group">
          <label for="email">User Name</label>
          <input type="text" name="username" placeholder="Enter username" />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn-submit">
          Login
        </button>
        <p>
          <a className="forgot-link" href="#">
            Forgot password?
          </a>
        </p>
      </form>
    </>
  );
};
