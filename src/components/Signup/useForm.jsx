import { Alert, Autocomplete, Avatar, Box, Button, Card, CardContent,InputAdornment,Radio, RadioGroup, TextField, Typography } from "@mui/material";
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
import Swal from "sweetalert2";
import { loginUser } from "../../features/auth/authSlice";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ref } from "yup";

  const theme = createTheme();
  const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const PHNUM_REGEX = /^(9|\+639)\d{9}$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  
  const Register = () => {
   
   
    const defaultProps = {
      options: gendertypes,
      getOptionLabel: (option) => option.title,
    };
  
    const flatProps = {
      options: gendertypes.map((option) => option.title),
    };
  const navigate = useNavigate();
  const [error,setError] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  
  const SignupSchema = Yup.object().shape({
    firstname: Yup.string().required('This Field is Required'),
    lastname: Yup.string().required('This Field is Required'),
    middlename: Yup.string().required('This Field is Required'),
    contactnumber: Yup.string().matches(PHNUM_REGEX, "Incorrect phone number format").required("This Field is Required"),
    email: Yup.string().email('Invalid email').required('This Field is Required'),
    street: Yup.string().required("This Field is Required"),
    gender: Yup.string().required("This Field is Required"),
    birthday: Yup.string().required("This Field is Required"),
    password: Yup.string().min(8, "Minimum of 8 character is required").matches(PASSWORD_REGEX,"Please type a strong password").required("This Field is Required"),
    confirmpassword: Yup.string().required("Confirm Password").oneOf([ref("password")], "Passwords do not match"),
  });
  const onSubmit = (values, props) => {
    alert(JSON.stringify(values), null, 2)
    props.resetForm();
    setLoading(false)
}
  return (
  
<ThemeProvider theme={theme}>
  <Formik 
  initialValues={{
    firstname: '',
    middlename: '',
    lastname: '',
    contactnumber: '',
    email: '',
    street: '',
    gender: '',
    birthday: '',
    password: '',
   confirmpassword: '',
  }}
  validationSchema={SignupSchema}
  onSubmit={onSubmit}   
     
     >
      {(props) => (

      <Grid component={Paper} elevation={16} sx={{p:2}}>
      
      <Box component="form"  sx={{ mt: 1 }}>
          <Card style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Sign Up
            </Typography> 
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                Fill up the required values to be able to create an account.
            </Typography> 
            <Form>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <Field 
                    as={TextField}
                    error={props.errors.firstname && props.touched.firstname}
                    placeholder="Enter first name" 
                    label="First Name" 
                    variant="outlined"  
                    name="firstname"
                    helperText={<ErrorMessage name="firstname" />}
                    fullWidth 
                    required 
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Field 
                     as={TextField}
                     error={props.errors.middlename && props.touched.middlename}
                    placeholder="Enter middle name" 
                    label="Middle Name" 
                    variant="outlined"  
                    name="middlename"
                    helperText={<ErrorMessage name="middlename" />}
                    
                    fullWidth
                    required 
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <Field
                     as={TextField}
                     error={props.errors.lastname && props.touched.lastname}
                    placeholder="Enter last name" 
                    name="lastname"
                    helperText={<ErrorMessage name="lastname" />}
                    label="Last Name" 
                    variant="outlined" 
                    fullWidth 
                    required 
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                     as={TextField} 
                     error={props.errors.contactnumber && props.touched.contactnumber}
                    placeholder="Enter Contact Number" 
                    label="Phone" 
                    name="contactnumber"
                    variant="outlined" 
                    helperText={<ErrorMessage name="contactnumber" />}
                    fullWidth 
                    required 
                    InputProps={{
                      startAdornment: <InputAdornment position="start">+639</InputAdornment>,
                    }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field 
                     as={TextField}
                     error={props.errors.email && props.touched.email}
                    type="email" 
                    placeholder="Enter email" 
                    name="email"
                    label="Email" 
                    variant="outlined"  
                    helperText={<ErrorMessage name="email" />}
                    fullWidth 
                    required 
                    
                    />
                  </Grid>
                  <Grid item xs={12}sm={6}>
                    <Field 
                     as={TextField}
                     //error={props.errors.ci && props.touched.firstname}
                    disabled  
                    placeholder="" 
                    label="City" 
                    name="city"
                    variant="outlined" 
                    defaultValue="Las Piñas City" 
                    
                    fullWidth   />
                  </Grid>
                  <Grid item xs={12}sm={6}>
                    <Field 
                     as={TextField}
                    disabled 
                    placeholder="" 
                    name="barangay"
                    label="Barangay" 
                    variant="outlined"
                    defaultValue="Talon Uno"  
                   
                    fullWidth  
                    
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                     as={TextField}  
                     error={props.errors.street && props.touched.street}
                     helperText={<ErrorMessage name="street" />}
                    placeholder="Enter Street Name" 
                    label="Street Name" 
                    name="street"
                    variant="outlined"  
                    
                    fullWidth  />
                  </Grid>
                  <Grid item xs={12}>
                   <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        
        error={props.errors.gender && props.touched.gender}
        autoComplete
        variant="outlined" 
        includeInputInList
        renderInput={(params) => (
          <Field {...params} required
          name="Gender"
          as = {TextField}
          error={props.errors.gender && props.touched.gender}
          label="Gender" variant="standard" />
        )}
      /> 
                  </Grid>
                  <Grid item xs={12}>
                  <Typography variant="subheading"> Birthdate</Typography>
                  <Field 
                   as={TextField}
                   error={props.errors.birthday && props.touched.birthday}
                   helperText={<ErrorMessage name="birthday" />}
                    type="date" 
                    label="" 
                    name="birthday"
                    variant="outlined"  
                    fullWidth required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <Field
                 as={TextField}
                required
                error={props.errors.password && props.touched.password}
                fullWidth
                helperText={<ErrorMessage name="password" />}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <Field
                as={TextField}
                required
                error={props.errors.confirmpassword && props.touched.confirmpassword}
                fullWidth
                helperText={<ErrorMessage name="confirmpassword" />}
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
                </Form>
            </CardContent>
          </Card>
         </Box>
        </Grid>
      )}
        </Formik>
    </ThemeProvider>
    
  );
};

const gendertypes = [
  { title: 'Male', id: 1 },
  { title: 'Female', id: 2 },
  { title: 'Rather not say', id: 3 },

];
export default Register;
