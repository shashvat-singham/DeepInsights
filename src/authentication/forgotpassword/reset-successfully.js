import React from "react";

const Resetsuccess = () => {
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
        <p style={{ lineHeight: "40px", fontSize: "1.2em" }} className="msg">
          Your password has been reset successfully
        </p>
        <p style={{ lineHeight: "40px", fontSize: "1em" }}>
          <a href="/login" style={{ color: "#B44538" }}>
            Log In
          </a>{" "}
          to continue
        </p>
      </div>
    </div>
  );
};

export default Resetsuccess;
