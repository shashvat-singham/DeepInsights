import { TextField, Button, Box, Alert, Typography, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import "./style.css";
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setUserToken } from '../../features/authSlice';
import { getToken, storeToken } from '../../services/LocalStorageService';
import { useLoginUserMutation } from '../../services/userAuthApi';


import GoogleLogin from 'react-google-login';
import googleLogin from './services/googleLogin';
// import './App.css';

// function App() {
//   const responseGoogle = async (response) => {
//     let googleResponse = await googleLogin(response.accessToken);
//     console.log(googleResponse);
//     console.log(response);
//   };

const UserLogin = () => {
  const responseGoogle = async (response) => {
    let googleResponse = await googleLogin(response.accessToken);
    console.log(googleResponse);
    console.log(response);
  };

  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation()
  const dispatch = useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password'),
    }
    const res = await loginUser(actualData)
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      // console.log(typeof (res.data))
      // console.log(res.data)
      storeToken(res.data.token)
      let { access_token } = getToken()
      dispatch(setUserToken({ access_token: access_token }))
      navigate('/dashboard')
    }
  }
  let { access_token } = getToken()
  useEffect(() => {
    dispatch(setUserToken({ access_token: access_token }))
  }, [access_token, dispatch])


  return <>
  
    {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
    {server_error.email ? console.log(server_error.email[0]) : ""}
    {server_error.password ? console.log(server_error.password[0]) : ""}
    {/* <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
      <Box textAlign='center'>
        {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>}
      </Box>
      <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
    </Box> */}

<Box component='form' noValidate  id='login-form' onSubmit={handleSubmit}>
        <div className="container">
        {/* logo */}
        <nav>
          <img
            src="https://static.wixstatic.com/media/294c26_adc54652a0c84c6b8ea0d74e68a38033~mv2.jpg/v1/fill/w_52,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Insights-white_edited.jpg"
            alt="img not found"
          />
          <h1 className="logo">DeepInsights</h1>
        </nav>
        {/* login setup */}
        <div className="main-div">
          <div className="sub-div">
            <h1 className="head">Log In to your Account</h1>
            <a href = '' className="links">
            <GoogleLogin
        clientId="1055040309079-rao7smga7mctl5f4s8v67a3h8nsfscuv.apps.googleusercontent.com"
        buttonText=" Continue with Google "
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
            </a>
            <p className="or">
              ------------- or Sign in with Email -------------{" "}
            </p>
            {/* email and password */}
            <label for="email">Email</label>
            {/* <input
              type="text"
              id="email"
              placeholder="email address..."
            >
            </input> */}
            <TextField sx={{   color: 'white', border: "solid white 2px", borderRadius: 1}} required fullWidth id='email' name='email' label='' />
            {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
            <label for="password">Password:</label>
            {/* <input
              type="password"
              id="password"
              placeholder="password..."
            ></input> */}
            <TextField  sx={{ color: 'white', border: "solid white 2px", borderRadius: 1}}  required fullWidth id='password' name='password' label='' type='password' />
            {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
            
            <a href="/sendpasswordresetemail" className="forgot-password">
              Forgot your password?
              {/* <NavLink to='/sendpasswordresetemail' >Forgot your password?</NavLink> */}
              {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''} 
            </a><br></br>
            
            {/* <p className="err-msg">
              Your password is incorrect or this account doesn’t exist. Please
              try again or{" "}
              <a href="/forgot-password" style={{ color: "#B44538" }}>
                reset your password.
              </a>
            </p> */}
            {/* <a href='' className="links sign-up">
              Log In
            </a> */}
            <Box textAlign='center'>
        {isLoading ? <CircularProgress /> : <Button type='submit' variant='contained' style={{ backgroundColor: "#B44538"}} sx={{ mt: 3, mb: 2, px: 15 }}>Log In</Button>}
      </Box>
            <p className="cont">
              Not Registered Yet?{" "}
              <a href="/sign-up" style={{ color: "#B44538" }}>
                Create an account
              </a>
            </p>
            <p className="cont">
              By using <b>DeepInsights</b> you agree to the{" "}
              <span style={{ color: "#B44538" }}>Terms of Services</span> and{" "}
              <span style={{ color: "#B44538" }}>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
      </Box> 
  </>;
};

export default UserLogin;
