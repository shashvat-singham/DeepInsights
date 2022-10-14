import React from "react";

const ForgotPass = () => {
  return (
    <div className="container">
      <nav>
        <img
          src="https://static.wixstatic.com/media/294c26_adc54652a0c84c6b8ea0d74e68a38033~mv2.jpg/v1/fill/w_52,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Insights-white_edited.jpg"
          alt="img not found"
        />
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
