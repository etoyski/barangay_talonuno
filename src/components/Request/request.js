import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import VerticalTabs from '../Tabs/Tabs';
import { Autocomplete, Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';

export default function Request() {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false); 
  const [activeStep, setActiveStep] = React.useState(0);
  const [inputs,setInputs] = useState({
    //email:"",
    type:"",
    name:"",
    address:"",
    email:"",
    phone:"",
    purpose:""
     
 });
 
 const handleChange = (e) => {
 
   setInputs(prev => ({
       ...prev,
       [e.target.name]: e.target.value
   }))};
   const sendRequest = async () => {
     setLoading(true)
     try { 
         const res = await axios.post('https://barangay-talon-uno.vercel.app/main/request',{
             //email:inputs.email,
             type: inputs.type,
             name: inputs.name,
             address: inputs.address,
             email: inputs.email,
             phone: inputs.phone,
             purpose: inputs.purpose,
             
         }, {
           headers:{
             "Authorization": `Bearer ${localStorage.getItem('T')}`
           }
         })
         swal({
           title: "Request Submitted!",
           text: "Request Successful",
           icon: "success",
           button: "OK",
         });
           
             console.log(res.data.token);
             localStorage.setItem('T', res.data.token);
            //navigate('/report');
 
     }catch(error) {
       setError(true)
       swal({
         title: "Request Not Submitted!",
         text: "Request Unsuccessful",
         icon: "error",
         button: "OK",
         
       });
             console.log(error.response);
     }finally {
       setLoading(false)
      
     }
   
 }
 
 const handleSubmit = (e) => {
     e.preventDefault();
     //console.log(inputs);
  
     sendRequest();
 
 };
const defaultProps = {
  options: typeofrequest,
  getOptionLabel: (option) => option.title,
};
  
const flatProps = {
  options: typeofrequest.map((option) => option.title),
};

const [value, setValue] = React.useState(null);


  return (
    <React.Fragment>
    
    <VerticalTabs />

  <Typography variant="h6" gutterBottom>
    Submit A Request
  </Typography>
  <Box  component="form" onSubmit={handleSubmit}>
  <Grid container spacing={3}>
  <Grid item xs={12} sm={6}>
  <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} value={inputs.type} 
          onChange={handleChange} 
          error={error} label="Request Type" variant="standard" />
        )}
      />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            autoComplete="Name"
            variant="standard"
            value={inputs.name} 
            onChange={handleChange} 
            error={error}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="Address"
            variant="standard"
            value={inputs.address} 
            onChange={handleChange} 
            error={error}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="Email Address"
            variant="standard"
            value={inputs.email} 
            onChange={handleChange} 
            error={error}
          />
        </Grid>
   
    <Grid item xs={12} sm={6}>
    <TextField
        id="phone"
        name="phone"
        label="Contact Number"
        fullWidth
        autoComplete="Contact Number"
        variant="standard"
        value={inputs.phone} 
        onChange={handleChange} 
        required
        error={error}
      />
    </Grid>
    <Grid item xs={12} >
      <TextField
        id="purpose"
        name="purpose"
        label="Request Purpose"
        fullWidth
        autoComplete="Request Purpose"
        variant="standard"
        value={inputs.purpose} 
        onChange={handleChange} 
        required
        error={error}
      />
    </Grid>
    
   
    <LoadingButton 
           loading = {loading}
            type="submit"
            fullWidth
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            
            >
         SignIn
        </LoadingButton>
      
  </Grid>
  </Box>
</React.Fragment>
  );
}
const typeofrequest = [ 
  { title: 'Barangay ID', id: 1 },
  { title: 'Barangay Clearance', year: 2 },
  { title: 'Barangay Residency', year: 3 },
  { title: 'Green Card', year: 4 },

];