// import { Grid } from "@mui/material";

// const Home = () => {
//   return <>
//     <Grid container justifyContent='center'>
//       <Grid item sm={10}>
//         <h1>Deep Insights</h1>
//         <hr />
//         <p> </p>
//       </Grid>
//     </Grid>
//   </>;
// };

// export default Home;
import React from "react";
import "./home.css";
const Home = () => {
  const url = "";
  const users = [1, 2, 3, 4];
  return (
    <>
      <div className="container1">
        <nav className="nav-bar">
          <h1 className="logo">DeepInsights</h1>
          <div className="btns">
            <p className="btn">Why DeepInsights</p>
            <p className="btn">Blog</p>
            <p className="btn">Contact us</p>
            <a href="/login" className="btn blinks">
              Log In
            </a>
            <a href="/sign-up" className="btn-link">
              Start for Free
            </a>
          </div>
        </nav>
        <div className="subCont">
          <h1 className="headline">
            Helping Team Leaders <br /> Run Actionable Meetings
          </h1>
          <p className="desc">
            DeepInsights is an intellegent note-taker powered by proprietary NLP
            technologies that{" "}
            <span style={{ color: "red" }}>automatically</span>
          </p>
          <div className="points">
            <p>(1) Distills meeting conversations into key takeaways</p>
            <p>(2) Assigns action items to relevant stakeholders</p>
            <p>
              (3) Creates shared alignment on tasks and priorities across
              projects
            </p>
          </div>
          <a href="url" style={{ textDecoration: "underline" }}>
            See it in action
          </a>
        </div>
      </div>
      <div className="team">
        <h1 style={{ marginBottom: "10px" }}>Trusted by Team Leaders</h1>
        <p style={{ marginBottom: "20px" }}>
          DeepInsights has helped 15+ Team Leaders across the US
        </p>
        <div className="users btns">
          {users.map((e) => {
            return (
              <div className="user">
                <i className="fa fa-user"></i>
                <p>User {e}</p>
              </div>
            );
          })}
        </div>
        <div className="user-comment">
          <div className="user" style={{ margin: "0 10px" }}>
            <i className="fa fa-user"></i>
            <p>User 2</p>
          </div>
          <p style={{ textAlign: "center" }}>
            "This is a product testimonial. Love it!" <br /> - John Doe, product
            manager
          </p>
        </div>
      </div>
      <div className="why-di btns">
        <h1 style={{ marginBottom: "2rem" }}>Why DeepInsights?</h1>
        <p style={{ marginBottom: "2rem" }}>
          Our intelligent note-taker helps teams run efficient meetings by
          automatically distilling meeting <br />
          conversations into key takeaways and personalized action items
        </p>
        <h1>How it works</h1>
        <div className="path">
          <div className="checkpoint-odd">
            <p>
              Connect DeepInsigths to any video conferencing application of your
              choice
            </p>
            <p className="number">1</p>
          </div>
          <div className="checkpoint-even">
            <p className="number">2</p>
            <p>Turn it on during your meeting and forget about taking notes</p>
          </div>
          <div className="checkpoint-odd">
            <p>
              Automatically receive notes with key takeaways and action items
            </p>
            <p className="number">3</p>
          </div>
          <div className="checkpoint-even">
            <p className="number">4</p>
            <p>
              Automatically assign action items to relevant stakeholders after
              the meeting ends
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>2022, DeepInsights AI Inc.</p>
        <div className="flinks">
          <a href="url">Privacy Policy</a>
          <p>|</p>
          <a href="url">Terms of services</a>
          <p>|</p>
          <a href="url">Contact Us</a>
          <p>|</p>
          <a href="url">Blog</a>
        </div>
      </footer>
    </>
  );
};
export default Home;
// export default Landpage;

