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
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; 
export default function Report() {


  return (
    <React.Fragment>
      <VerticalTabs />
    <Typography variant="h6" gutterBottom>
      Submit A report
    </Typography>
    <Grid container spacing={3}>
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
          id="lastName"
          name="lastName"
          label="Last name"
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="address1"
          name="address1"
          label="Address line 1"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="Report"
          name="Report Type"
          label="Report Type"
          fullWidth
          autoComplete="shipping address-line2"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="Report"
          name="Report Type"
          label="Report Description"
          fullWidth
          autoComplete="shipping address-line2"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="city"
          name="city"
          label="City"
          fullWidth
          autoComplete="shipping address-level2"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="state"
          name="state"
          label="State/Province/Region"
          fullWidth
          variant="standard"
        />
      </Grid>
      
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="country"
          name="country"
          label="Country"
          fullWidth
          autoComplete="shipping country"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
          label="Use this address for reporting details"
        />
      </Grid>
      <Button size="md" variant="outlined"sx={{p:2, marginLeft:44,marginBottom:2,marginRight:12}}>
        Submit Report
        </Button>
        
    </Grid>
  </React.Fragment>
  );
}