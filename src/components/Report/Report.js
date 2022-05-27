import * as React from 'react';
import Typography from '@mui/material/Typography';
import VerticalTabs from '../Tabs/Tabs';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; 
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Report() {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false); 
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
  
    location: "", 
    Report_Type:"",
    Report_Description:"",
    
});
const handleChange = (e) => {

  setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
  }))};
  const sendRequest = async () => {
    setLoading(true)
    try { 
        const res = await axios.post('https://barangay-talon-uno.vercel.app/login',{
           
            email: inputs.email,
            password: inputs.password,
        // confirmpassword: inputs.confirmpassword
        })
        swal({
          title: "Welcome!",
          text: "Login Successful",
          icon: "success",
          button: "OK",
        });
          
            console.log(res.data.token);
            localStorage.setItem('T', res.data.token);
           navigate('/mainpage');

    }catch(error) {
      setError(true)
      swal({
        title: "error",
        text: "Login Failed",
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
const center = [51.505, -0.09]
const markers = [[51.505, -0.10], [51.505, -0.09], [51.505, -0.08]];
  return (
    
    <React.Fragment>
    
      <VerticalTabs />
  
    <Typography variant="h6" gutterBottom>
      Submit A report
    </Typography>
    <Grid container spacing={3}  onSubmit={handleSubmit}>
     
      <Grid item xs={12}>
        <TextField
          required
          id="location"
          name="location"
          label="location"
          fullWidth
          autoComplete="Your Address"
          variant="filled"
          
          error={error}
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
          required
          error={error}
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
           SignIn
          </LoadingButton>
        
    </Grid>
  </React.Fragment>
  );
}