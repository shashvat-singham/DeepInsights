import React from "react";
import "./style.css";
const Login = () => {
  const url = "";
  return (
    <>
      <div className="container">
        <nav>
          <h1 className="logo">LOGO</h1>
        </nav>
        <div className="main-div">
          <div className="sub-div">
            <h1 className="head">Log In</h1>
            <a href={url} className="links">
              Log in with Google
            </a>
            <p className="or">OR</p>
            <input type="text" placeholder="email address..."></input>
            <input type="password" placeholder="password..."></input>
            <a href={url} className="forgot-password">
              Forgot your password?
            </a>
            <a href={url} className="links login">
              Log In
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
