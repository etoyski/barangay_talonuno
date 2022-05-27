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

export default function Request() {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false); 
  const [activeStep, setActiveStep] = React.useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs);
 
    //sendRequest();

};
const defaultProps = {
  options: typeofrequest,
  getOptionLabel: (option) => option.title,
};
  
const flatProps = {
  options: typeofrequest.map((option) => option.title),
};

const [value, setValue] = React.useState(null);


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
    
    <VerticalTabs />

  <Typography variant="h6" gutterBottom>
    Submit A Request
  </Typography>
  <Grid container spacing={3}  onSubmit={handleSubmit}>
  <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="middleName"
            name="middleName"
            label="Middle name"
            fullWidth
            autoComplete="middle-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
   
    <Grid item xs={12} sm={6}>
    <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="Request Type" variant="standard" />
        )}
      />
    </Grid>
    <Grid item xs={12} >
      <TextField
        id="Request"
        name="Request Type"
        label="Request Description"
        fullWidth
        autoComplete="Type your request descirption here"
        variant="standard"
       
    
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
</React.Fragment>
  );
}
const typeofrequest = [ 
  { title: 'Barangay ID', id: 1 },
  { title: 'Barangay Clearance', year: 2 },
  { title: 'Barangay Residency', year: 3 },
  { title: 'Green Card', year: 4 },

];