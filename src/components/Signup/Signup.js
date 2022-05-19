import { Alert, Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Logo from '../../assets/brgylogo.jpg'
import LoadingButton from "@mui/lab/LoadingButton";
import swal from 'sweetalert';

  const theme = createTheme();

  const Signup = () => {
  const navigate = useNavigate();
  const [error,setError] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/")
      .then((res) => console.log(res.data))
      .catch((e) => console.error(e));
  }, []);
  const [inputs, setInputs] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    address: "",
    contactnumber: "",
    password: "",
    birthday: "",
  });
  

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  //console.log(e.target.name,"value",e.target.value);
  const sendRequest = async () => {
    setLoading(true)
    try {
      const res = await axios.post(
        "https://barangay-talon-uno.vercel.app/register",
        {
          firstname: inputs.firstname,
          middlename: inputs.middlename,
          lastname: inputs.lastname,
          email: inputs.email,
          address: inputs.address,
          number: Number(inputs.contactnumber),
          birthday: inputs.birthday,
          password: inputs.password,
          confirmpassword: inputs.confirmpassword
        }
      );
      swal({
        title: "success",
        text: res.data,
        icon: "success",
        button: "OK",
      });
      //console.log(res.data);
      navigate("/login");
      
    } catch (error) {
      setError(true)
      setAlert(true)
      swal({
        title: "Error",
        text: error.response,
        icon: "error",
        button: "OK",
      });
      //console.log(error.response);
    }
    finally {
      setLoading(false)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs);
    sendRequest();
  };
  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main"  spacing={3} sx={{ height: '120vh', width: '100%' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={3}
        md={7}
        sx={{
          textAlign:'center',
          backgroundImage: `url(${Logo})`,
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}

      >
        
      </Grid>
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              
              required
              error={error}
              fullWidth
              onChange={handleChange} 
              value={inputs.firstname}  
              id="firstname"
              label="firstname"
              name="firstname"
             // type={"firstname"}
              autoComplete="firstname"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              error={error}
              fullWidth
              onChange={handleChange} 
              value={inputs.middlename}  
              id="middlename"
              label="middlename"
              name="middlename"
              type={"email"}
              autoComplete="middlename"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChange} 
              value={inputs.lastname}  
              id="lastname"
              label="lastname"
              name="lastname"
              //type={"email"}
              autoComplete="lastname"
              autoFocus
              error={error}
            />
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
              type={"email"}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              error={error}
              fullWidth
              onChange={handleChange} 
              value={inputs.address}  
              id="address"
              label="address"
              name="address"
             // type={"email"}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              error={error}
              fullWidth
              onChange={handleChange} 
              value={inputs.contactnumber}  
              id="contactnumber"
              label="contactnumber"
              name="contactnumber"
              
              autoComplete="contactnumber"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChange} 
              value={inputs.birthday}  
              id="birthday"
              error={error}
              name="birthday"
              type="date"
              autoComplete="birthday"
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
             <TextField
              margin="normal"
              required
              error={error}
              fullWidth
              onChange={handleChange} 
              value={inputs.confirmpassword} 
              name="confirmpassword"
              label="confirmpassword"
              type="password"
              id="confirmpassword"
              autoComplete="confirmpassword"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Agree to Terms & Policy"
            />
           <LoadingButton 
             loading = {loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
           SignIn
          </LoadingButton>
            
            
            <Alert variant="filled" severity="success" alert={alert}>
  This is a success alert — check it out!
</Alert>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
};

export default Signup;
