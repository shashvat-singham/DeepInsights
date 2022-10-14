import React from "react";
import "./style.css";

const Integration = () => {
  return (
    <>
      <div className="container-d">
        <nav className="nav-bar">
          <h1 className="logo-d">DEEPINSIGHTS</h1>
          <h1 className="logo-d">
            <i class="fa-solid fa-user"></i> Era Jain
          </h1>
        </nav>
        <div className="sub-container-d">
          <div className="v-nav-bar">
            <a href="/dashboard">
              <i class="fa-regular fa-database"></i> Home
            </a>
            <a href={"url"}>
              <i class="fa-regular fa-database"></i> Meeting Hub
            </a>
            <a href={"url"}>
              <i class="fa-regular fa-database"></i> My Tasks
            </a>
            <a href="/my-integration">
              <i class="fa-regular fa-database"></i> My Integrations
            </a>
            <a href={"url"}>
              <i class="fa-regular fa-database"></i> Settings
            </a>
            <a href={"url"} className="logout">
              Logout
            </a>
          </div>
          <div style={{ width: "80%", position: "fixed", right: "0" }}>
            <div className="integration">
              <h1>
                <i className="fa fa-database"></i> Integration
              </h1>
              <div style={{ marginTop: "4rem" }}>
                <h1 className="video-me">Video Meetings</h1>
                <div className="int-box">
                  <p>Connect your Zoom account with DeepInsights</p>
                  <i className="fa-solid fa-toggle-off"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integration;
