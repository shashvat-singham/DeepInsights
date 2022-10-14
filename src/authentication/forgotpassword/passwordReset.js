import React from "react";
const Passwordreset = () => {
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
          <div className="sub-div" style={{ width: "auto" }}>
            <h1 className="head">Password reset</h1>
            <p className="cont">
              Please enter your new password twice so we can verify you typed it
              correctly.
            </p>

            {/* email and password input tag */}

            <label for="new-pass">New password</label>
            <input
              type="password"
              id="new-pass"
              placeholder="New password"
              style={{ width: "auto" }}
            ></input>
            <ul style={{ marginTop: "10px" }}>
              <li>Must contain at least 8 characters (12+ recommended)</li>
              <li>
                Must contain at least one uppercase letter and one lowercase
                letter
              </li>
              <li>Must contain at least one number</li>
              <li>Must contain at least one special character</li>
              <li>
                Must not contain your first name, last name, or commonly used
                passwords
              </li>
            </ul>
            <label for="new-pass-conf">New password confirmation</label>
            <input
              type="password"
              id="new-pass-conf"
              placeholder="New password confirmation"
              style={{ width: "auto" }}
            ></input>

            <a href="/reset-success" className="links sign-up">
              Change password
            </a>
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

export default Passwordreset;
