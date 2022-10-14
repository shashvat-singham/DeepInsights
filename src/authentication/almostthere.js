import React from "react";

const Almostthere = () => {
  return (
    <div className="container">
      <nav>
        <img
          src="https://static.wixstatic.com/media/294c26_adc54652a0c84c6b8ea0d74e68a38033~mv2.jpg/v1/fill/w_52,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Insights-white_edited.jpg"
          alt="img not found"
        />
        <h1 className="logo">DeepInsights</h1>
      </nav>
      <div
        style={{
          marginTop: "10rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="head">You are almost there</h1>
        <p style={{ lineHeight: "40px", fontSize: "1.1em" }} className="msg">
          We sent an account verification email to name@company.com
          <br />
          Please click the link in the email in order to verify your account and
          log in.
          <br />
          You can close this page now.
        </p>
      </div>
    </div>
  );
};

export default Almostthere;
