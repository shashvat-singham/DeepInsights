import { Grid, TextField, Button, Box, Alert, Typography } from "@mui/material";
import { useState } from 'react';
import { useSendPasswordResetEmailMutation } from "../../services/userAuthApi";
const SendPasswordResetEmail = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [sendPasswordResetEmail, { isLoading }] = useSendPasswordResetEmailMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
    }
    const res = await sendPasswordResetEmail(actualData)
    if (res.error) {
      console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-email-form').reset()
    }
  }
  return <>
    {/* <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
        <h1>Reset Password</h1>
        <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-email-form' onSubmit={handleSubmit}>
          <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
          {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
          <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Send</Button>
          </Box>
          {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
          {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
        </Box>
      </Grid>
    </Grid> */}
<Box component='form' noValidate sx={{ mt: 0 }} id='password-reset-email-form' onSubmit={handleSubmit}>
<div className="container">
<nav>
          <img
            src="https://static.wixstatic.com/media/294c26_adc54652a0c84c6b8ea0d74e68a38033~mv2.jpg/v1/fill/w_52,h_45,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Insights-white_edited.jpg"
            alt="img not found"
          />
          <h1 className="logo">DeepInsights</h1>
        </nav>
      <div className="main-div" style={{ marginTop: "10rem" }}>
        <div className="sub-div">
          <h1 className="head">Forgot your password?</h1>
          <label for="forgot">
            Enter your email and we’ll send you a link to reset your password
          </label>
          {/* <input
            type="password"
            id="forgot"
            placeholder="name@company.com"
          ></input> */}
          <TextField margin='normal'sx={{ color: 'white', border: "solid white 2px", borderRadius: 1}} required fullWidth id='email' name='email' label='' />
          {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
          {/* <a
            href="/reset-sent"
            className="links sign-up"
            style={{ border: "none" }}
          >
            Send password reset link
          </a> */}
          <Box textAlign='center'>
         <Button type='submit' variant='contained' style={{ backgroundColor: "#B44538"}} sx={{ mt: 3, mb: 2, px: 10 }} href="/reset-sent" >Send password reset link</Button>
         </Box>
          {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
          {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
        </div>
      </div>
    </div>
    </Box>
  </>;
};

export default SendPasswordResetEmail;
