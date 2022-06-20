import * as React from 'react';
import Typography from '@mui/material/Typography';
import VerticalTabs from '../Tabs/Tabs';
import { TextField,Box, Autocomplete, Card, ThemeProvider, CardContent, createTheme, Paper, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; 
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AttachFileIcon from '@mui/icons-material/AttachFile';
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


export default function Report() {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false); 
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const defaultProps = {
    options: reporttypes,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: reporttypes.map((option) => option.title),
  };

  const [value, setValue] = React.useState(null);
  const [inputs,setInputs] = useState({
   //email:"",
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
            //email:inputs.email,
           // type: inputs.type,
            name: inputs.name,
            address: inputs.address,
            addressdetail: inputs.addressdetail,
            report: inputs.report,
            Image: inputs.Image,
            
        }, {
          headers:{
            "Authorization": `Bearer ${localStorage.getItem('T')}`
          }
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
        title: "Report Not Submitted!",
        text: "Report Unsuccessful",
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

  return (
    
    <React.Fragment>
    
      <VerticalTabs />
  
    
    <ThemeProvider  theme={theme}>
      
      <Grid component={Paper} elevation={16} sx={{p:2}}>
      
      <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Card style={{ maxWidth: 800, padding: "20px 5px", margin: "0 auto" }}>
            <CardContent>
              <Box sx={{
        width: 750,
        height: 100,
       
       
        }}>
              <Typography gutterBottom align='center' variant="h4"  >
                Submit a Report
            </Typography> 
              <Typography variant="caption"  component="p" align='left' gutterBottom>
                Fill up the required values.
            </Typography> 
            </Box>
              
                <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
        <TextField
          id="email"
          name="email"
          label="email address"
          fullWidth
          value={inputs.email} 
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
          value={inputs.name} 
          onChange={handleChange} 
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
          onChange={handleChange} 
          value={inputs.address} 
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
          onChange={handleChange} 
          value={inputs.addressdetail} 
          label="addressdetail"
          fullWidth
          autoComplete="Your address detail"
          variant="filled"
          
          error={error}
        />
      </Grid>
       <Grid item xs={12} sm={6}>
       
         <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        error={error} 
          onChange={handleChange} 
          value={inputs.report} 
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} required
          name="report"

          label="Report Type" variant="standard" />
        )}
      />
      </Grid>
      <Grid item xs={12} sm={6}>
      
        <TextField
          id="Image"
          name="Image"
          onChange={handleChange} 
          value={inputs.Image} 
          label="Image"
          fullWidth
          type ="file"
          autoComplete="Image"
          variant="standard"
          required
          component="span"
          accept="image/*"
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
                  
                
            </CardContent>
          </Card>
         </Box>
        </Grid>
        
    </ThemeProvider>
  </React.Fragment>
  );
}
const reporttypes = [
  { title: 'Accident', id: 1 },
  { title: 'Alarms and scandals', id: 2 },
  { title: 'Fire Incident', id: 3 },
  { title: 'Holdap', id: 4 },
  { title: 'Light Threats', id: 5 },
  { title: "Suspicious Illegal Activity", id: 6 },
  { title: 'Theft ', id: 7 },
  {title: 'Trespass', id: 8,
},
];