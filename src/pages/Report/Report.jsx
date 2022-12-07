import * as React from 'react';
import Typography from '@mui/material/Typography';
import VerticalTabs from '../../components/Tabs/Tabs';
import { TextField,Box, Autocomplete, Card, ThemeProvider, CardContent, createTheme, Paper, IconButton, Stack, Input, Avatar, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'; 
import LoadingButton from '@mui/lab/LoadingButton';
import { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { login, validateToken } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import GPS from '../../components/map/maps';
import { useEffect } from 'react';
import GPS2 from '../../components/mapbox/mapBox';
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";

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
const options = ['Crime Related', 'Fire', 'Health Emergency', 'Calamity Related'];

export default function Report() {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false); 
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const [isloggedin, setisloggedin] = useState(false);
  const navigate = useNavigate();
  const [maddress,setMaddress] = useState('');
  const [profileImage, setProfileImage] = useState(null);
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
  

  const defaultProps = {
    options: reporttypes,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: reporttypes.map((option) => option.title),
  };

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const [inputs,setInputs] = useState({
   //email:"",
    name:"",
    address:"",
    addressdetail:"",
    //report:"",
    Image:"",
    
});
 const previewImg = (e) => {
        const reader = new FileReader();

        reader.onloadend = (e) => {
            setProfileImage(e.target.result);
            // console.log(e.target.result);
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    const uploadImg = () => {
        // if (user.img !== profileImage) {
        //     // dispatch(uploadImage(profileImage));
        // }
    };
const handleChange = (e) => {

  setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
  }))};
  const sendRequest = async () => {
    setLoading(true)
    try { 
        const res = await axios.post('https://barangay-talon-uno.vercel.app/main/report',{
            email:`${localStorage.getItem('email')}`,
           // type: inputs.type,
            name: `${sessionStorage.getItem('user')}`,
            address: `${localStorage.getItem('address')}`,
            addressdetail: `${localStorage.getItem('gps')}` || maddress,
            report: value,
            Image: profileImage,
            
        }, {
          headers:{
            "Authorization": "Bearer " + `${localStorage.getItem('T')}`  
          }
        })
        swal({
          title: "Report Submitted!",
          text: "Report Successful",
          icon: "success",
          button: "OK",
        });
          
            console.log(res.data.token);
            
           // localStorage.setItem('T', res.data.token);
           navigate('/mainpage');
           
          localStorage.setItem('reportImage',res.data.image)
          console.log('repimg',res.data.image)
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
              <Typography gutterBottom align='left' variant="h4"  >
                Submit a Report
            </Typography> 
              <Typography variant="caption"  component="p" align='left' gutterBottom>
                Fill up the required values.
            </Typography> 
            </Box>
              
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12}>
                  <GPS />
                  </Grid>
                <Grid item xs={12} sm={6}>
        <TextField
          id="email"
          name="email"
          // label={localStorage.getItem('email')}
          disabled
          fullWidth
          label="email"
          value={localStorage.getItem('email')} 
          onChange={handleChange} 
          autoComplete="email"
          variant="standard"
          error={error}
        />
      </Grid> 
       <Grid item xs={12} sm={6}>
        <TextField
        disabled
          id="name"
          name="name"
          // label={sessionStorage.getItem('user')}
          fullWidth
          label="name"
          autoComplete="name"
          value={sessionStorage.getItem('user')} 
          onChange={handleChange} 
          variant="standard"
          error={error}
        />
      </Grid>
    
      <Grid item xs={12}>
        <TextField
          disabled
          id="address"
          name="address"
          // label={localStorage.getItem('address')}
          onChange={handleChange} 
          label="address"
          value={localStorage.getItem('address')}
          fullWidth
          autoComplete="Your Address"
          variant="filled"
          
          error={error}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          
          id="addressdetail"
          name="addressdetail"
          placeholder={localStorage.getItem('gps')}
          onChange={(e) => setMaddress(e.target.value)}
          value={maddress || `${localStorage.getItem('gps')}`}
          label="addressdetail"
          fullWidth
          autoComplete="Your address detail"
          variant="filled"
          
          error={error}
        />
      </Grid>
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
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Report Type" />}
      />
{/*        
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
          value={inputs.report}
          label="Report Type" variant="standard" />
        )}
      /> */}
      </Grid>
      <Grid item xs={12} sm={6}>

        <ProfileImage
                            profileImage={profileImage}
                            previewImg={previewImg}
                           
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
              onClick={uploadImg}
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
const ProfileImage = ({ profileImage, previewImg }) => {
  return (
      <React.Fragment>
          <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "start", sm: "end" }}
              gap={2}
              pt={5}
              pb={5}
          >
              
              <Avatar
              variant="square"
                  src={profileImage}
                  //alt="asd"
                  sx={{ height: 150, width: 150 }}
                  // variant="rounded"
                    alt={sessionStorage.getItem('user')}
                  
              />

              <Box>
                  <label htmlFor="contained-button-file">
                      <Input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={previewImg}
                      />
                      <Button
                          endIcon={<InsertPhotoOutlinedIcon />}
                          component="span"
                          variant="outlined"
                          color="info"
                      >
                          Upload
                      </Button>
                  </label>
              </Box>
          </Stack>
      </React.Fragment>
  );
};
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