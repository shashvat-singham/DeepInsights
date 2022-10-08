import React from "react";

const Emailsent = () => {
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
        <h1 className="head">Email sent</h1>
        <p style={{ lineHeight: "40px", fontSize: "1.1em" }} className="msg">
          Check your email and open the link we sent to continue resetting your
          password
        </p>
      </div>
    </div>
  );
};

export default Emailsent;
