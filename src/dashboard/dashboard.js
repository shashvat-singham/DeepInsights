import React from "react";
import "./style.css";

const Dashboard = () => {
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
            <div className="content">
              <h3>Welcome to DeepInsights!</h3>
              <p>
                <a href={"url"}>Integrate</a> your meeting and calendar apps to
                automatically capture notes and tasks from your upcoming
                meetings!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
