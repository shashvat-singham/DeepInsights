import { TextField, FormControlLabel, Checkbox, Button, Box, Alert, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/userAuthApi'
import { storeToken } from '../../services/LocalStorageService';
// import "./registerstyle.css"
const Registration = () => {
  const [server_error, setServerError] = useState({})
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password2: data.get('password2'),
      tc: data.get('tc'),
    }
    const res = await registerUser(actualData)
    if (res.error) {
      // console.log(typeof (res.error.data.errors))
      // console.log(res.error.data.errors)
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      storeToken(res.data.token)
      navigate('/dashboard')
    }
  }
  
    const url = "";
    const array = ["your first name", "your last name"];
    const signUp = [
      {
        type: "email",
        placeholder: "name@company.com",
      },
      {
        type: "password",
        placeholder: "pick a password",
      },
    ];
  return <>
    {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
    {server_error.name ? console.log(server_error.name[0]) : ""}
    {server_error.email ? console.log(server_error.email[0]) : ""}
    {server_error.password ? console.log(server_error.password[0]) : ""}
    {server_error.password2 ? console.log(server_error.password2[0]) : ""}
    {server_error.tc ? console.log(server_error.tc[0]) : ""}
    {/* <Box component='form' noValidate sx={{ mt: 1 }} id='registration-form' onSubmit={handleSubmit}>
      <TextField margin='normal' required fullWidth id='name' name='name' label='Name' />
      {server_error.name ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.name[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
      {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
      <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm Password' type='password' />
      {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
      <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
      {server_error.tc ? <span style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.tc[0]}</span> : ""}
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
      </Box>
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
    </Box> */}

<Box component='form' noValidate sx={{ mt: 0 }} id='registration-form' onSubmit={handleSubmit}>
    <div className="container">
        {/* logo */}
        <nav>
          <img
            src="https://static.wixstatic.com/media/294c26_adc54652a0c84c6b8ea0d74e68a38033~mv2.jpg/v1/fill/w_52,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Insights-white_edited.jpg"
            alt="img not found"
          />
          <h1 className="logo">DeepInsights</h1>
        </nav>
        {/* create account */}
        <div className="main-div">
          <div className="sub-div">
            <h1 className="head">Create Account</h1>
            <p className="cont">
              Signing up with your work email is encouraged
            </p>
            {/* <a href={url} className="links">
              Sign up with Google
            </a> */}
            <p className="or">
              -------------  Sign up with Email -------------{" "}
            </p>
            <div className="name-input">
            <label for="email">Name</label>
              {/* name and last name input */}
              {/* {array.map((e) => {
                return (
                  <input type="text" placeholder={e} className="myName"></input>
                );
              })} */}</div>
              {/* width: 200 , */}
              <TextField sx={{  color: 'white', border: "solid white 2px", borderRadius: 1}} required fullWidth id='name' name='name' label='' />
      {server_error.name ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.name[0]}</Typography> : ""}
            
            
            {/* email and password input tag */}
            {/* {signUp.map((e) => {
              return (
                <>
                  <label for={e.type}>{e.type}</label>
                  <input
                    type={e.type}
                    id={e.type}
                    placeholder={e.placeholder}
                  ></input>
                </>
              );
            })} */}

            {/* email and password */}
            <label for="email">Email</label>
            {/* <input
              type="text"
              id="email"
              placeholder="email address..."
            >
            </input> */}
            <TextField    sx={{ color: 'white', border: "solid white 2px", borderRadius: 1}} required fullWidth id='email' name='email' label='' />
            {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
            <label for="password">Password:</label>
            {/* <input
              type="password"
              id="password"
              placeholder="password..."
            ></input> */}
            <TextField  sx={{ color: 'white', border: "solid white 2px", borderRadius: 1}} required fullWidth id='password' name='password' label='' type='password' />
            {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
            
            <label for="password">Confirm Password:</label>
            {/* <input
              type="password"
              id="password"
              placeholder="password..."
            ></input> */}
            <TextField  sx={{ color: 'white', border: "solid white 2px", borderRadius: 1}} required fullWidth id='password2' name='password2' label='' type='password' />
            {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
            

            <FormControlLabel control={<Checkbox value={true} color="primary" name="tc" id="tc" />} label="Remember me" />
      {server_error.tc ? <span style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.tc[0]}</span> : ""}
            {/* <p className="err-msg">
              Password must have at least 8 characters and must contain at least
              one uppercase, one lowercase, one numeric, and one special
              character.
            </p> */}
            {/* <a href="/verify" className="links sign-up">
              Create account
            </a> */}
             <Box textAlign='center'>
         <Button type='submit' variant='contained' style={{ backgroundColor: "#B44538"}} sx={{ mt: 3, mb: 2, px: 15 }}  > Create account</Button>
        </Box>
      {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
            <p className="cont">
              Already a user?{" "}
              <a href="/login" style={{ color: "#B44538" }}>
                Log in to your account
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

export default Registration;
