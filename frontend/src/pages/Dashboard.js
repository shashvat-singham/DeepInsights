import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice';
import { getToken, removeToken } from '../services/LocalStorageService';
import ChangePassword from './auth/ChangePassword';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
import "./dashboard.css";
const Dashboard = () => {
  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)

  const [userData, setUserData] = useState({
    email: "",
    name: ""
  })

  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        name: data.name
      }))
    }
  }, [data, isSuccess, dispatch])

  return <>
    <div className="container-d">
        <nav className="nav-bar-d">
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
            {/* <a href={"url"} className="logout">
              Logout
            </a> */} <Button variant='contained' color='warning' size='small' onClick={handleLogout} style={{
              color: "black",
    backgroundColor: "white",
    fontSize: "20px",
    border:"none",
    boxShadow:"none",
    position: "absolute",
    bottom: "0" ,
    fontWeight: "bold",
            }}>Logout</Button>
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
  </>;
};

export default Dashboard;
