import { Grid, TextField, Button, Box, Alert, Typography } from "@mui/material";
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useResetPasswordMutation } from "../../services/userAuthApi";

const ResetPassword = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [resetPassword] = useResetPasswordMutation()
  const { id, token } = useParams()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    }
    const res = await resetPassword({ actualData, id, token })
    if (res.error) {
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-form').reset()
      setTimeout(() => {
        navigate("/login")
      }, 3000)
    }

  }
  return <>
    {/* <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
        <h1>Reset Password</h1>
        <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-form' onSubmit={handleSubmit}>
          <TextField margin='normal' required fullWidth id='password' name='password' label='New Password' type='password' />
          {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
          <TextField margin='normal' required fullWidth id='password2' name='password2' label='Confirm New Password' type='password' />
          {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'yellow', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
          <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Save</Button>
          </Box>
          {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
          {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
        </Box>
      </Grid>
    </Grid> */}
    < Box component='form' noValidate sx={{ mt: 0 }} id='password-reset-form' onSubmit={handleSubmit}>
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
          <div className="sub-div" style={{ width: "auto" }}>
            <h1 className="head">Password reset</h1>
            <p className="cont">
              Please enter your new password twice so we can verify you typed it
              correctly.
            </p>

            {/* email and password input tag */}

            <label for="new-pass">New password</label>
            {/* <input
              type="password"
              id="new-pass"
              placeholder="New password"
              style={{ width: "auto" }}
            ></input> */}
            <TextField margin='normal'sx={{ color: 'white', border: "solid white 2px", borderRadius: 1}} required fullWidth id='password' name='password' label='' type='password' />
          {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}

            <ul style={{ marginTop: "10px" }}>
              <li>Must contain at least 8 characters (12+ recommended)</li>
              <li>
                Must contain at least one uppercase letter and one lowercase
                letter
              </li>
              <li>Must contain at least one number</li>
              <li>Must contain at least one special character</li>
              <li>
                Must not contain your first name, last name, or commonly used
                passwords
              </li>
            </ul>
            <label for="new-pass-conf">New password confirmation</label>
            {/* <input
              type="password"
              id="new-pass-conf"
              placeholder="New password confirmation"
              style={{ width: "auto" }}
            ></input> */}
            <TextField margin='normal'sx={{ color: 'white', border: "solid white 2px", borderRadius: 1}} required fullWidth id='password2' name='password2' label='' type='password' />
          {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'yellow', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}


            <a href="/reset-success" className="links sign-up">
              Change password
            </a>
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

export default ResetPassword;
