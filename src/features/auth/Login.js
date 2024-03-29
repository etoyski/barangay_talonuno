import React, { useEffect, useState } from 'react'
import {Alert, Avatar , Box, Button, Card, CardContent, IconButton, InputAdornment, Snackbar, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Logo from '../../assets/brgylogo.jpg'
import LoadingButton from '@mui/lab/LoadingButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import swal from 'sweetalert2';
import { useCookies } from 'react-cookie';
import useAuth from '../Auth/Auth';
import Swal from 'sweetalert2';
import { useFormik } from "formik";
import * as yup from "yup";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";


const theme = createTheme();
const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(3, "Password should be of minimum 3 characters length")
        .required("Password is required"),
});
const Login = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [submit, setSubmit] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };
 
  const formik = useFormik({
    initialValues: {
        email: "",
        password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (e, { setFieldError }) => {
        setLoading(true);
        try {
            const fetch = await axios.post('https://barangay-talon-uno.vercel.app/login', e, {
                withCredentials: true,
            });

            console.log(fetch.data);
            dispatch(
                loginUser({ success: fetch.data, navigate, location })
            );
        } catch (e) {
            setFieldError(e.response.data.param, e.response.data.errorMsg);
            console.log(e.response);
        } finally {
            setSubmit(false);
        }
    },
});


 
  const [loading, setLoading] = useState(false);
  
  const [cookies, setCookie] = useCookies(['user']);


const handle = () => {
  setCookie('email', email, { path: '/' });
  setCookie('password', password, { path: '/' });
};
  // const handleChange = (e) => {
   
  //   setInputs(prev => ({
  //       ...prev,
  //       [e.target.name]: e.target.value
  //   }))};
    
//     const sendRequest = async () => {
//       const user = { 
//         email,
//         password};
//       setLoading(true)
//       try { 
//           const res = await axios.post('https://barangay-talon-uno.vercel.app/login',{
            
//               email: email,
//               password: password,
//           // confirmpassword: inputs.confirmpassword
//           },user)
           
//           const Toast = Swal.mixin({
//             toast: true,
//             position: 'top-end',
//             showConfirmButton: false,
//             timer: 3000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.addEventListener('mouseenter', Swal.stopTimer)
//               toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//           })
          
//           Toast.fire({
//             icon: 'success',
//             title: 'Login Success'
//           });
           

//           setUser(res.data)
//           // store the user in localStorage
//           localStorage.setItem('email',res.data.email);
//               localStorage.setItem('T', res.data.token);
              
//               console.log('user', user)
          
//              navigate('/mainpage');
  
//       }catch(error) {
//         setError(true)
//         const Toast = Swal.mixin({
//           toast: true,
//           position: 'top-end',
//           showConfirmButton: false,
//           timer: 3000,
//           timerProgressBar: true,
//           didOpen: (toast) => {
//             toast.addEventListener('mouseenter', Swal.stopTimer)
//             toast.addEventListener('mouseleave', Swal.resumeTimer)
//           }
//         })
        
//         Toast.fire({
//           icon: 'error',
//           title: 'Login Failed'
//         });
//               console.log(error.response.data);
//       }finally {
//         setLoading(false)
//         setOpen(true)
//       }
    
//   }
//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser) {
//       const foundUser = JSON.parse(loggedInUser);
//       setUser(foundUser);
//     }
//   }, []);
  const handleSubmit = (e) => {
          e.preventDefault();
          
          
      sendRequest();
  };
  
  return (
    <ThemeProvider theme={theme}>
      
    <Grid component={Paper} elevation={16} sx={{p:2}}>
    
    <Box component="form"  autoComplete="true" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
        <Card style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Log In
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              
          </Typography> 
            
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField 
                  margin="normal"
                  required            
                  fullWidth 
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={
                      formik.touched.email && Boolean(formik.errors.email)
                  }
                  helperText={formik.touched.email && formik.errors.email}
                  InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailOutlinedIcon
                                color={
                                    formik.touched.email &&
                                    Boolean(formik.errors.email)
                                        ? "error"
                                        : "primary"
                                }
                            />
                        </InputAdornment>
                    ),
                    sx: {
                        color:
                            formik.touched.email &&
                            Boolean(formik.errors.email)
                                ? "red"
                                : textColorPri,
                    },
                }}
                variant="outlined"
                focused
                  />
                </Grid>
                
                <Grid item xs={12} >
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                    formik.touched.password &&
                    Boolean(formik.errors.password)
                }
                helperText={
                    formik.touched.password && formik.errors.password
                }
                inputProps={{ minLength: 6 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClick} onMouseDown={handleMouseDown}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              
                </Grid>
                
            
                <Grid item xs={12}>
                <FormControlLabel
                  
                  control={<Checkbox   onClick={handle} value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
                <Grid item xs={12}>
                <LoadingButton 
             loading = {loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
             SignIn
          </LoadingButton>
                </Grid>
                <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="row-reverse">
              <Grid item>
                <Link href="/login" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
              </Grid>
          </CardContent>
        </Card>
       </Box>
      </Grid>
      {cookies.email && (
      <div>
         email: <p>{cookies.email}</p>
      </div>
      )}
      {cookies.Password && (
      <div>
         password: <p>{cookies.password}</p>
      </div>
      )}
      {logged ? <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar> : ""}

      {error ?   <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
         Login Failed! Please input valid credentials
        </Alert>
      </Snackbar> : ""}
  </ThemeProvider>
  
  )
}

export default Login
