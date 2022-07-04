import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Avatar, Button, Card, CardContent, Container, CssBaseline, Fab, Grid, IconButton, Popper, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import swal from 'sweetalert';

const theme = createTheme();

export default function EditUserProfile() {
  const navigate = useNavigate();
  const [cancel, isCancelled] = useState(false);

  const handleClick = () => {
    swal({
      title: "Are you sure?",
      text: "Do you want to cancel editing your profile?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Edit user Cancelled", {
          
        });
        navigate('/user-profile')
      } else {
        navigate('/edit-user-profile')
      }
    });
   
    
  }

  return (
  
    <ThemeProvider theme={theme}>
   
    <Grid component={Paper} elevation={18} container spacing={3} sx={{p:2}}>
    
      <Box component="form"  sx={{ mt: 2 }} >
        
      <Card style={{ maxWidth: 1000, padding: "30px 5px", marginRight: "6px" }}>
      <IconButton aria-label="delete" sx={{height:50, weight:10}} onClick={() => navigate('/user-profile')}>
        <ArrowBackIcon />
      </IconButton>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Profile
            </Typography> 
            <Box >
            <Grid container spacing={1} justifyContent="center"
                alignItems="center">
            <Grid xs="auto"  item>
            <Avatar  sx={{width: 90, height: 85, mb: 5}} src="/broken-image.jpg"  />
           
        </Grid>
        
            </Grid>
            
        </Box>
      

              
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField 
                    placeholder="Enter first name" 
                    label="First Name" 
                    variant="outlined"  
                    name="firstname"
                   
                    fullWidth 
                    required 
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField 
                    placeholder="Enter middle name" 
                    label="Middle Name" 
                    variant="outlined"  
                    name="middlename"
                   
                    fullWidth
                    required 
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                    placeholder="Enter last name" 
                    name="lastname"
                    label="Last Name" 
                    variant="outlined" 
                   
                     fullWidth required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField 
                    placeholder="Enter Contact Number" 
                    label="Phone" 
                    name="contactnumber"
                    variant="outlined" 
                   
                    fullWidth 
                    required 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField 
                    type="email" 
                    placeholder="Enter email" 
                    name="email"
                    label="Email" 
                    variant="outlined"  
                    
                    fullWidth 
                    required 
                    />
                  </Grid>
                  <Grid item xs={12}sm={6}>
                    <TextField 
                    disabled  
                    placeholder="" 
                    label="City" 
                    name="city"
                    variant="outlined" 
                    defaultValue="Las Piñas City" 
                   
                    fullWidth   />
                  </Grid>
                  <Grid item xs={12}sm={6}>
                    <TextField 
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
                    <TextField  
                    placeholder="Enter Street Name" 
                    label="Street Name" 
                    name="address"
                    variant="outlined"  
                   
                    fullWidth  />
                  </Grid>
                  
                  <Grid item xs={12}>
                  <Typography variant="subheading"> Birthdate</Typography>
                  <TextField 
                    type="date" 
                    label="" 
                    name="birthday"
                    variant="outlined"  
                    fullWidth required />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                
                required
               
                fullWidth
               
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
    
                required
                fullWidth
                name="confirmpassword"
                label="confirmpassword"
                type="password"
                id="confirmpassword"
                autoComplete="current-password"
              />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                  <Button   
                  fullWidth           
               type="submit"
               variant="outlined"
               sx={{ mt: 3, mb: 2 }}
              //  onClick={() => navigate('/user-profile')}
              onClick={handleClick}
               >
                
              Cancel
           </Button>
         </Grid>
           <Grid item xs={6} sm={6}>
                 
                  <LoadingButton 
               
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
               Save
            </LoadingButton>
                  </Grid>
                 
                </Grid>
            </CardContent>
          </Card>
        </Box>
        </Grid>
    </ThemeProvider>
  );
}