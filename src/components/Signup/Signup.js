import { Alert, Avatar, Box, Button, Card, CardContent,Radio, RadioGroup, TextField, Typography } from "@mui/material";
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
    contactnumber: "",
    email: "",
    address: "",
    birthday: "",
    password: "",
    confirmpassword: "",
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
          number: Number(inputs.contactnumber),
          email: inputs.email,
          address: inputs.address,
          birthday: inputs.birthday,
          password: inputs.password,
          confirmpassword: inputs.confirmpassword
        }
      );
      swal({
        title: "success",
        text: "User Created",
        icon: "success",
        button: "OK",
      })
      console.log(res.data);
      this.history.navigate("/login");
      
    } catch (error) {
      setError(true)
      setAlert(true)
      swal({
        title: "Error",
        text: error.response,
        icon: "error",
        button: "OK",
      });
      console.log(error.response);
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
      
      <Grid component={Paper} elevation={16} sx={{p:2}}>
      
      <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Card style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Sign Up
            </Typography> 
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                Fill up the required values to be able to create an account.
            </Typography> 
              
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField 
                    placeholder="Enter first name" 
                    label="First Name" 
                    variant="outlined"  
                    name="firstname"
                    error={error}
                    onChange={handleChange} 
                    value={inputs.firstname} 
                    fullWidth 
                    required 
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField 
                    placeholder="Enter middle name" 
                    label="Middle Name" 
                    variant="outlined"  
                    name="middlename"
                    error={error}
                    onChange={handleChange} 
                    value={inputs.middlename} 
                    fullWidth
                    required 
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                    placeholder="Enter last name" 
                    name="lastname"
                    label="Last Name" 
                    variant="outlined" 
                    error={error}
                    onChange={handleChange} 
                    value={inputs.lastname}  fullWidth required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                    placeholder="Enter Contact Number" 
                    label="Phone" 
                    name="contactnumber"
                    variant="outlined" 
                    error={error}
                    onChange={handleChange} 
                    value={inputs.contactnumber}  
                    fullWidth 
                    required 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                    type="email" 
                    placeholder="Enter email" 
                    name="email"
                    label="Email" 
                    variant="outlined"  
                    error={error}
                    onChange={handleChange} 
                    value={inputs.email}  
                    fullWidth 
                    required 
                    />
                  </Grid>
                  <Grid item xs={12}sm={6}>
                    <TextField 
                    disabled  
                    placeholder="" 
                    label="City" 
                    name="city"
                    variant="outlined" 
                    defaultValue="Las Piñas City" 
                    error={error}
                    onChange={handleChange} 
                    value={inputs.city}  
                    fullWidth   />
                  </Grid>
                  <Grid item xs={12}sm={6}>
                    <TextField 
                    disabled 
                    placeholder="" 
                    name="barangay"
                    label="Barangay" 
                    variant="outlined"
                    defaultValue="Talon Uno"  
                    error={error}
                    onChange={handleChange} 
                    value={inputs.barangay} 
                    fullWidth  
                    
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField  
                    placeholder="Enter Street Name" 
                    label="Street Name" 
                    name="address"
                    variant="outlined"  
                    error={error}
                    onChange={handleChange} 
                    value={inputs.address} 
                    fullWidth  />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subheading"> Gender</Typography>
                  <RadioGroup
                   value={inputs.value}
                   name="gender"
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          
        </RadioGroup>
                  </Grid>
                  <Grid item xs={12}>
                  <Typography variant="subheading"> Birthdate</Typography>
                  <TextField 
                    type="date" 
                    label="" 
                    name="birthday"
                    variant="outlined"  
                    error={error}
                    onChange={handleChange} 
                    value={inputs.birthday} fullWidth required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                
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
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
    
                required
                error={error}
                fullWidth
                onChange={handleChange} 
                value={inputs.confirmpassword} 
                name="confirmpassword"
                label="confirmpassword"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
              />
                  </Grid>
                  <Grid item xs={12}>
                  <FormControlLabel
                    
                    control={<Checkbox required value="agree" color="primary" />}
                    label="I agree to the terms and condition."
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
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
                </Grid>
            </CardContent>
          </Card>
         </Box>
        </Grid>
    </ThemeProvider>
  );
};

export default Signup;
