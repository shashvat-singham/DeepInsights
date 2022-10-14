import React from "react";

const Emailsent = () => {
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
