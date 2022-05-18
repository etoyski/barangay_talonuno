import React, { useState } from 'react'
import {Alert, Avatar , Box, Button, TextField, Typography } from '@mui/material';
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
  const [error,setError] = useState(false); 

  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
  
    email: "", 
    password:"",
    
});
  const handleChange = (e) => {
    setInputs(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))};
    const sendRequest = async () => {
      try { 
          const res = await axios.post('https://barangay-talon-uno.vercel.app/login',{
             
              email: inputs.email,
              password: inputs.password,
          // confirmpassword: inputs.confirmpassword
          })
              console.log(res.data.token);
              localStorage.setItem('T', res.data.token);
             navigate('/mainpage');
  
      }catch(error) {
        setError(true)
              console.log(error.response.data);
      }
    
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      //console.log(inputs);
      sendRequest();

  };
  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '90vh' }}>
      
      <Grid
        item
        xs={false}
        sm={3}
        md={7}
        sx={{
          backgroundImage: `url(${Logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
            <TextField
              margin="normal"
              required
              error={error}
              fullWidth
              onChange={handleChange} 
              value={inputs.password} 
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
        <Alert variant="filled" severity="success">
  This is a success alert — check it out!
</Alert>
      </Grid>
    </Grid>
  </ThemeProvider>
  )
}

export default Login