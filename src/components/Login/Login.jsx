import React, { useEffect, useState } from 'react'
import {Alert, Avatar , Box, Button, Card, CardContent, IconButton, InputAdornment, Snackbar, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'; 
const theme = createTheme();

function Login() {
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
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  const [error,setError] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [cookies, setCookie] = useCookies(['user']);

  const [userData, setuserData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = userData
const handle = () => {
  setCookie('email', email, { path: '/' });
  setCookie('password', password, { path: '/' });
};
useEffect(() => {
  if(isError){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'Error',
      text: (message),
    });
  }
  if (isSuccess || user) {
    navigate('/mainpage')
  }

  dispatch(reset())
}, [user, isError, isSuccess, message, navigate, dispatch])

const onChange = (e) => {
  setuserData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
}
  
  const handleSubmit = (e) => {
          e.preventDefault();
          
          const userData = {
            email,
            password,
          }
      
          dispatch(login(userData))
        }
      
        if (isLoading) {
          
        }
      
  
  
  return (
    <ThemeProvider theme={theme}>
      
    <Grid component={Paper} elevation={16} sx={{p:2}}>
    
    <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                  error={error}
                  fullWidth
                  onChange={onChange}
                  value={email}  
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  />
                </Grid>
                
                <Grid item xs={12} >
                <TextField
                margin="normal"
                required
                error={error}
                fullWidth
                onChange={onChange}
                value={password} 
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
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
  
  )}
     
export default Login