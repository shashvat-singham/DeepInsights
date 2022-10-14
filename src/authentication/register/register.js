import React from "react";
import "./registerstyle.css";
const Register = () => {
  const url = "";
  const array = ["your first name", "your last name"];
  const signUp = [
    {
      type: "email",
      placeholder: "name@company.com",
    },
    {
      type: "password",
      placeholder: "pick a password",
    },
  ];
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
        {/* create account */}
        <div className="main-div">
          <div className="sub-div">
            <h1 className="head">Create Account</h1>
            <p className="cont">
              Signing up with your work email is encouraged
            </p>
            <a href={url} className="links">
              Sign up with Google
            </a>
            <p className="or">
              ------------- or Sign up with Email -------------{" "}
            </p>
            <div className="name-input">
              {/* name and last name input */}
              {array.map((e) => {
                return (
                  <input type="text" placeholder={e} className="myName"></input>
                );
              })}
            </div>
            {/* email and password input tag */}
            {signUp.map((e) => {
              return (
                <>
                  <label for={e.type}>{e.type}</label>
                  <input
                    type={e.type}
                    id={e.type}
                    placeholder={e.placeholder}
                  ></input>
                </>
              );
            })}
            <p className="err-msg">
              Password must have at least 8 characters and must contain at least
              one uppercase, one lowercase, one numeric, and one special
              character.
            </p>
            <a href="/verify" className="links sign-up">
              Create account
            </a>
            <p className="cont">
              Already a user?{" "}
              <a href="/login" style={{ color: "#B44538" }}>
                Log in to your account
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

export default Register;
