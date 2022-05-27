import * as React from 'react';
import Typography from '@mui/material/Typography';
import VerticalTabs from '../Tabs/Tabs';
import { TextField,Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; 
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';


export default function Report() {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false); 
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
   // email:"",
    name:"",
    address:"",
    addressdetail:"",
    report:"",
    Image:"",
    
});

const handleChange = (e) => {

  setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
  }))};
  const sendRequest = async () => {
    setLoading(true)
    try { 
        const res = await axios.post('https://barangay-talon-uno.vercel.app/main/report',{
          // email:inputs.email,
           // type: inputs.type,
            name: inputs.name,
            address: inputs.address,
            addressdetail: inputs.addressdetail,
            report: inputs.report,
            Image: inputs.Image,
            
        })
        swal({
          title: "Report Submitted!",
          text: "Report Successful",
          icon: "success",
          button: "OK",
        });
          
            console.log(res.data.token);
            localStorage.setItem('T', res.data.token);
           //navigate('/report');

    }catch(error) {
      setError(true)
      swal({
        title: "error",
        text: "Report Failed",
        icon: "error",
        button: "OK",
        
      });
            console.log(error.response.data);
    }finally {
      setLoading(false)
     
    }
  
}

const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputs);
 
    sendRequest();

};

  return (
    
    <React.Fragment>
    
      <VerticalTabs />
  
    <Typography variant="h6" gutterBottom>
      Submit A report
    </Typography>
    <Box  component="form" onSubmit={handleSubmit}>
    <Grid container spacing={3}  >
    <Grid item xs={12} sm={6}>
        <TextField
          id="email"
          name="email"
          label="email address"
          fullWidth
          onChange={handleChange} 
          autoComplete="email"
          variant="standard"
          required
          error={error}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="name"
          name="name"
          label="name"
          fullWidth
          autoComplete="name"
          variant="standard"
          required
          error={error}
        />
      </Grid>
    
      <Grid item xs={12}>
        <TextField
          required
          id="address"
          name="address"
          label="address"
          fullWidth
          autoComplete="Your Address"
          variant="filled"
          
          error={error}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          id="addressdetail"
          name="addressdetail"
          label="addressdetail"
          fullWidth
          autoComplete="Your address detail"
          variant="filled"
          
          error={error}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="report"
          name="report"
          label="Report Type"
          fullWidth
          autoComplete="Report Type"
          variant="standard"
          required
          error={error}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="Image"
          name="Image"
          label="Image"
          fullWidth
          autoComplete="Image"
          variant="standard"
          required
          error={error}
        />
      </Grid>
    
      
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
          label="Use this address for reporting details"
        />
      </Grid>
      <LoadingButton 
             loading = {loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
              >
           Submit
          </LoadingButton>
        
    </Grid>
    </Box>
    
  </React.Fragment>
  );
}