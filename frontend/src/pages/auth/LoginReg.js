// import { Grid, Card, Tabs, Typography, Tab, Box } from '@mui/material';
// import { useState } from 'react';
// import "./style.css";
// // import Pic1 from '../../images/pic1.png'
// import Registration from './Registration';
// import UserLogin from './UserLogin';
// import { ShoppingBag } from '@mui/icons-material';

// const TabPanel = (props) => {
//   const { children, value, index } = props;
//   return (
//     <div role='tabpanel' hidden={value !== index}>
//       {
//         value === index && (
//           <Box>{children}</Box>
//         )
//       }
//     </div>
//   )
// }
// const LoginReg = () => {
//   const [value, setValue] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   }
//   return <>
//     {/* <Grid container sx={{ height: '90vh' }}>
//       <Grid item lg={7} sm={5} sx={{
//         // backgroundImage: `url(${Pic1})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: { xs: 'none', sm: 'block' }
//       }}>
//       </Grid>
//       <Grid item lg={5} sm={7} xs={12}>
//         <Card sx={{ width: '100%', height: '100%' }}>
//           <Box sx={{ mx: 3, height: 530 }}>
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//               <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
//                 <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
//                 <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
//               </Tabs>
//             </Box>
//             <TabPanel value={value} index={0}>
//               <UserLogin />
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//               <Registration />
//             </TabPanel>
//           </Box>
//         </Card>
//       </Grid>
//     </Grid> */}
//     <div className="container">
//         {/* logo */}
//         <nav>
//           <h1 className="logo">DeepInsights</h1>
//         </nav>
//         {/* login setup */}
//         <div className="main-div">
//           <div className="sub-div">
//             <h1 className="head">Log In to your Account</h1>
//             <a href = '' className="links">
//               Continue with Google
//             </a>
//             <p className="or">
//               ------------- or Sign in with Email -------------{" "}
//             </p>
//             {/* email and password */}
//             <label for="email">Email</label>
//             <input
//               type="text"
//               id="email"
//               placeholder="email address..."
//             ></input>
//             <label for="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="password..."
//             ></input>

//             <a href="/forgot-password" className="forgot-password">
//               Forgot your password?
//             </a>
//             {/* <p className="err-msg">
//               Your password is incorrect or this account doesn’t exist. Please
//               try again or{" "}
//               <a href="/forgot-password" style={{ color: "#B44538" }}>
//                 reset your password.
//               </a>
//             </p> */}
//             <a href='' className="links sign-up">
//               Log In
//             </a>
//             <p className="cont">
//               Not Registered Yet?{" "}
//               <a href="/sign-up" style={{ color: "#B44538" }}>
//                 Create an account
//               </a>
//             </p>
//             <p className="cont">
//               By using <b>DeepInsights</b> you agree to the{" "}
//               <span style={{ color: "#B44538" }}>Terms of Services</span> and{" "}
//               <span style={{ color: "#B44538" }}>Privacy Policy</span>
//             </p>
//           </div>
//         </div>
//       </div>
//   </>;
// };

// export default LoginReg;
