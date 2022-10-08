import React from "react";

const Almostthere = () => {
  return (
    <div className="container">
      <nav>
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
