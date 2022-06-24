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
import swal from 'sweetalert';
import { useCookies } from 'react-cookie';
import useAuth from '../Auth/Auth';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://fb.com/kitetoy/">
        kitetoy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setLogged(false);
  };


  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };
  const [user, setUser] = useState();
  const [error,setError] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);  
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['user']);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputs,setInputs] = useState({
  
    email: "", 
    password:"",
    
});

const handle = () => {
  setCookie('email', email, { path: '/' });
  setCookie('password', password, { path: '/' });
};
  const handleChange = (e) => {
   
    setInputs(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))};
    const sendRequest = async () => {
      const user = { 
        email,
        password};
      setLoading(true)
      try { 
          const res = await axios.post('https://barangay-talon-uno.vercel.app/login',{
             
              email: inputs.email,
              password: inputs.password,
          // confirmpassword: inputs.confirmpassword
          },user)
            setLogged(true)
          // swal({
          //   title: "Welcome!",
          //   text: "Login Successful ",
          //   icon: "success",
          //   button: "OK",
          // });
              // set the state of the user
               setUser(res.data)
               // store the user in localStorage
              localStorage.setItem('user', res.data)
              console.log(res.data.token);
              localStorage.setItem('T', res.data.token);
            
          
             navigate('/mainpage');
  
      }catch(error) {
        setError(true)
        swal({
          title: "error",
          text: "Login Failed, Please input valid credentials",
          icon: "error",
          button: "OK",
          
        });
              console.log(error.response.data);
      }finally {
        setLoading(false)
        setLogged(true)
      }
    
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  const handleSubmit = (e) => {
          e.preventDefault();
      //console.log(inputs);
      sendRequest();
  };
  
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
                  onChange={handleChange} 
                  value={inputs.email}  
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
                onChange={handleChange} 
                value={inputs.password} 
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
      {logged ? <Snackbar open={logged} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar> : ""}

      {error ?   <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar> : ""}
  </ThemeProvider>
  
  )
}

export default Login