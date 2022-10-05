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
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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
const options = ['Barangay ID', 'Barangay Clearance', 'Barangay ID'];

export default function Request() {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false); 
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const [isloggedin, setisloggedin] = useState(false);
  const navigate = useNavigate();
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  // React.useEffect(() => {
  //   axios
  //     .get("https://barangay-talon-uno.vercel.app/main/request")
  //     .then((res) => console.log(res.data))
  //     .catch((e) => console.error(e));
  // }, []);
  useEffect(() => {
    if (localStorage.getItem("T") !== undefined) {
        // let token = localStorage.getItem("T");
        dispatch(login(true))
        // validateToken(token) = value true or false
        //    setisloggedin(validateToken(token));

        //let email = localStorage.getItem("email");
        //validateToken({ token, email, navigate });
        // setisloggedin(validateToken({ token, email, navigate }));
         setisloggedin(true);
    }else {
        dispatch(login(false))
    }
}, [navigate]);

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
             type: value,
             name: `${sessionStorage.getItem("user")}`,
             address: `${localStorage.getItem("address")}`,
             email: `${localStorage.getItem("email")}`,
             phone: `${localStorage.getItem("contact")}`,
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
             console.log(res.data.email);
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
       console.log("error req: ", error.response.data);
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
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label="Request Type" />}
      />

  {/* <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        value={inputs.type}
        renderInput={(params) => (
          <TextField {...params} value={inputs.type} 
          onChange={handleChange} 
          error={error} label="Request Type" variant="standard" />
        )}
      /> */}
      {/* <TextField
            required
            id="type"
            name="type"
            
            label="Report Type"
            fullWidth
            autoComplete="type"
            variant="standard"
            value={inputs.type}
            onChange={handleChange} 
            error={error}
          /> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="name"
            name="name"
            
            label="name"
            fullWidth
            autoComplete="Name"
            variant="standard"
            value={sessionStorage.getItem('user')}
            onChange={handleChange} 
            error={error}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            disabled
            id="address"
            name="address"
            label="address"
            fullWidth
            autoComplete="Address"
            variant="standard"
            value={localStorage.getItem("address")} 
            onChange={handleChange} 
            error={error}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="email"
            name="email"
            label="email"
            fullWidth
            autoComplete="Email Address"
            variant="standard"
            value={localStorage.getItem("email")} 
            
            onChange={handleChange} 
            error={error}
          />
        </Grid>
   
    <Grid item xs={12} sm={6}>
    <TextField
        id="phone"
        name="phone"
        label="contact number"
        fullWidth
        autoComplete="Contact Number"
        variant="standard"
        value={localStorage.getItem("contact")} 
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