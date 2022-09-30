import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import VerticalTabs from '../../components/Tabs/Tabs';
import { Autocomplete, Card, CardContent, Checkbox, createTheme, FormControlLabel, Grid, TextField, ThemeProvider } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a746b',
      contrastText: '#fff',
    },
    secondary: {
      main: '#004d40',
    },
  },
});

export default function Request() {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false); 
  const [activeStep, setActiveStep] = React.useState(0);
  React.useEffect(() => {
    axios
      .get("https://barangay-talon-uno.vercel.app/main/request")
      .then((res) => console.log(res.data))
      .catch((e) => console.error(e));
  }, []);
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
             
         }, 
         {
           headers:
           {
            "Authorization": "Bearer " + `${localStorage.getItem('T')}`  
           }
         })
         swal({
           title: "Request Submitted!",
           text: "Request Successful",
           icon: "success",
           button: "OK",
         });
           
             console.log(res.data.token);
             //localStorage.setItem('T', res.data.token);
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
  
    
    <ThemeProvider  theme={theme}>
      
      <Grid component={Paper} elevation={16} sx={{p:2}}>
      
      <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <Box sx={{
        width: 700,
        height: 100,
       
       
        }}>
              <Typography gutterBottom align='left' variant="h4"  >
                Request a Document
            </Typography> 
              <Typography variant="caption"  component="p" align='left' gutterBottom>
                Fill up the required values.
            </Typography> 
            </Box>
              
                <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
  <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} value={inputs.name} 
          onChange={handleChange} 
          error={error} label="Request Type" variant="standard" />
        )}
      />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="name"
            name="name"
            label={localStorage.getItem("user")} 
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
            disabled
            id="address"
            name="address"
            label={localStorage.getItem("address")} 
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
            disabled
            id="email"
            name="email"
            label={localStorage.getItem("email")} 
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
        label={localStorage.getItem("contact")} 
        fullWidth
        autoComplete="Contact Number"
        variant="standard"
        value={inputs.phone} 
        onChange={handleChange} 
        disabled
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
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
              >
           Submit
          </LoadingButton> 
                  </Grid>
                  
                
            </CardContent>
          </Card>
         </Box>
        </Grid>
        
    </ThemeProvider>
  </React.Fragment>
  );
}
const typeofrequest = [ 
  { title: 'Barangay ID', id: 1 },
  { title: 'Barangay Clearance', year: 2 },
  { title: 'Barangay Residency', year: 3 },
  { title: 'Green Card', year: 4 },

];