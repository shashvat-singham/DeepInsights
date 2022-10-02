import React from "react";
import "./registerstyle.css";
const Register = () => {
  const url = "";
  const array = ["your first name", "your last name"];
  const signUp = [
    {
      type: "text",
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
        <nav>
          <h1 className="logo">LOGO</h1>
        </nav>
        <div className="main-div">
          <div className="sub-div">
            <h1 className="head">Create Account</h1>
            <p className="cont">
              Signing up with your work email is encouraged
            </p>
            <a href={url} className="links">
              Sign up with Google
            </a>
            <p className="or">OR</p>
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
              return <input type={e.type} placeholder={e.placeholder}></input>;
            })}
            <a href={url} className="links login">
              Create account
            </a>
            <p className="cont">Already a user? Log in to your account</p>
            <p className="cont">
              By using <b>DeepInsights</b> you agree to the{" "}
              <b>Terms of Services</b> and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
