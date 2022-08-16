import { Alert, Autocomplete, Avatar, Box, Button, Card, CardContent,CircularProgress,Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import LoadingButton from "@mui/lab/LoadingButton";
import swal from 'sweetalert';
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../../features/auth/authSlice";  

const theme = createTheme();

  function Signup(){
    const defaultProps = {
      options: gendertypes,
      getOptionLabel: (option) => option.title,
    };
  
    const flatProps = {
      options: gendertypes.map((option) => option.title),
    };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  const [error,setError] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
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
    if(isSuccess || user){
      navigate('/login')
    }
  })
   
  const [userData, setuserData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    contactnumber: "",
    email: "",
    city: "Las Piñas City",
    barangay: "Talon Uno",
    street: "",
    gender:"",
    birthday: "",
    password: "",
    confirmpassword: "",
  });
  
  const { firstname, middlename, lastname, contactnumber, email, city, barangay, street, gender, birthday, password, confirmpassword} = userData

  const handleChange = (e) => {
    setuserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmpassword){
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
              title: 'Password do not match'
            });
    }else {
      const userData = {
        firstname,
        middlename,
        lastname,
        contactnumber,
        email,
        city,
        barangay,
        street,
        birthday,
        password,
      }
      dispatch (register(userData))
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
        icon: 'success',
        title: 'User Created'
      });
    }
    //console.log(inputs);
    //sendRequest();
  }
  if (isLoading) {
    setLoading(true)
  }
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
                    value={firstname} 
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
                    value={middlename} 
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
                    value={lastname}  fullWidth required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                    placeholder="Enter Contact Number" 
                    label="Phone" 
                    name="contactnumber"
                    variant="outlined" 
                    error={error}
                    onChange={handleChange} 
                    value={contactnumber}  
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
                    value={email}  
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
                    value={city}  
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
                    value={barangay} 
                    fullWidth  
                    
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField  
                    placeholder="Enter Street Name" 
                    label="Street Name" 
                    name="street"
                    variant="outlined"  
                    error={error}
                    onChange={handleChange} 
                    value={street} 
                    fullWidth  />
                  </Grid>
                  <Grid item xs={12}>
                  <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        error={error} 
          onChange={handleChange} 
          value={gender} 
        autoComplete
        variant="outlined" 
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} required
          name="Gender"

          label="Gender" variant="standard" />
        )}
      />
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
                    value={birthday} fullWidth required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                
                required
                error={error}
                fullWidth
                onChange={handleChange} 
                value={password} 
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
                value={confirmpassword} 
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
const gendertypes = [
  { title: 'Male', id: 1 },
  { title: 'Female', id: 2 },
  { title: 'Rather not say', id: 3 },

];
export default Signup;
