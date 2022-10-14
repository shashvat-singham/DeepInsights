import React from "react";
import "./commoncss.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./authentication/login/login";
import Register from "./authentication/register/register";
import Landpage from "./authentication/landpage/landpage";
import Almostthere from "./authentication/almostthere";
import ForgotPass from "./authentication/forgotpassword/forgotPass";
import Emailsent from "./authentication/emailSent";
import Passwordreset from "./authentication/forgotpassword/passwordReset";
import Resetsuccess from "./authentication/forgotpassword/reset-successfully";
import Dashboard from "./dashboard/dashboard";
import Integration from "./dashboard/integration";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landpage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<Register />} />
          <Route exact path="/verify" element={<Almostthere />} />
          <Route exact path="/forgot-password" element={<ForgotPass />} />
          <Route exact path="/reset-sent" element={<Emailsent />} />
          <Route exact path="/password-reset" element={<Passwordreset />} />
          <Route exact path="/reset-success" element={<Resetsuccess />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/my-integration" element={<Integration />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
