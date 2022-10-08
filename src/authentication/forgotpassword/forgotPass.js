import React from "react";

const ForgotPass = () => {
  return (
    <div className="container">
      <nav>
        <h1 className="logo">DeepInsights</h1>
      </nav>
      <div className="main-div" style={{ marginTop: "10rem" }}>
        <div className="sub-div">
          <h1 className="head">Forgot your password?</h1>
          <label for="forgot">
            Enter your email and we’ll send you a link to reset your password
          </label>
          <input
            type="password"
            id="forgot"
            placeholder="name@company.com"
          ></input>
          <a
            href="/reset-sent"
            className="links sign-up"
            style={{ border: "none" }}
          >
            Send password reset link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPass;
