import React from "react";
import "./style.css";
const Login = () => {
  const url = "";
  return (
    <>
      <div className="container">
        {/* logo */}
        <nav>
          <img
            src="https://static.wixstatic.com/media/294c26_adc54652a0c84c6b8ea0d74e68a38033~mv2.jpg/v1/fill/w_52,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Insights-white_edited.jpg"
            alt="img not found"
          />
          <h1 className="logo">DeepInsights</h1>
        </nav>
        {/* login setup */}
        <div className="main-div">
          <div className="sub-div">
            <h1 className="head">Log In to your Account</h1>
            <a href={url} className="links">
              Continue with Google
            </a>
            <p className="or">
              ------------- or Sign in with Email -------------{" "}
            </p>
            {/* email and password */}
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="email address..."
            ></input>
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="password..."
            ></input>

            <a href="/forgot-password" className="forgot-password">
              Forgot your password?
            </a>
            <p className="err-msg">
              Your password is incorrect or this account doesn’t exist. Please
              try again or{" "}
              <a href="/forgot-password" style={{ color: "#B44538" }}>
                reset your password.
              </a>
            </p>
            <a href="/dashboard" className="links sign-up">
              Log In
            </a>
            <p className="cont">
              Not Registered Yet?{" "}
              <a href="/sign-up" style={{ color: "#B44538" }}>
                Create an account
              </a>
            </p>
            <p className="cont">
              By using <b>DeepInsights</b> you agree to the{" "}
              <span style={{ color: "#B44538" }}>Terms of Services</span> and{" "}
              <span style={{ color: "#B44538" }}>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
