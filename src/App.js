import React from "react";
import "./commoncss.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./authentication/login/login";
import Register from "./authentication/register/register";
import Landpage from "./authentication/landpage";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landpage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
