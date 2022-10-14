import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginReg from "./pages/auth/LoginReg";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";
import UserLogin from "./pages/auth/UserLogin";
import Registration from "./pages/auth/Registration";
import Resetsuccess from "./pages/auth/reset-successfully";
import Emailsent from "./pages/auth/emailSent";
import Almostthere from "./pages/auth/almostthere";
import Integration from "./pages/integration";
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            {/* <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
            <Route path="api/user/reset/:id/:token" element={<ResetPassword />} /> */}
          </Route>
          
          <Route path="/login" element={!access_token ? <UserLogin /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
          {/* <Route path="/dashb" element={access_token ? <Dashboard /> : <Navigate to="/Registration" />} /> */}
          <Route  path="/sign-up" element={<Registration />} />
          <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
          <Route path="api/user/reset/:id/:token" element={<ResetPassword />} />
          <Route path="reset-success" element={<Resetsuccess/>} />
          <Route path="reset-sent" element={<Emailsent/>} />
          <Route path="/verify" element={<Almostthere />} />
          <Route path = "/my-integration" element={<Integration/>} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

            // {/* <Route index element={<Home />} /> */}
            // {/* <Route path="contact" element={<Contact />} /> */}