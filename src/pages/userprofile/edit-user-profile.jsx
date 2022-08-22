import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Avatar, Breadcrumbs, Button, Card, CardContent, Container, CssBaseline, Fab, Grid, IconButton, Popper, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import swal from 'sweetalert';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import { emphasize, styled } from '@mui/material/styles';

const theme = createTheme();
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
      return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
          backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
          boxShadow: theme.shadows[1],
          backgroundColor: emphasize(backgroundColor, 0.12),
        },
      };
    }); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591
    function handleClick(event) {
      event.preventDefault();
      console.info('You clicked a breadcrumb.');
    }
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
     <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          onClick={() => navigate('/user-profile')}
          label="User Profile"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb
        component="a"
        onClick={() => navigate('/edit-user-profile')}
        label=" Edit User Profile"
        icon={<HomeIcon fontSize="small" />}
      />
              </Breadcrumbs>
              
      
              
        </div>
   {/* <Grid component={Paper} elevation={16} sx={{p:2}}> */}
      
   <Box component="paper" elevation={16}  sx={{ mt: 1, p:2,alignItems: 'center',justifyContent: 'center',display: 'flex'}}>
          <Card  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
  sx={{ width: 1000, padding: "10px ", marginRight: "16px", border:2,zIndex: 'tooltip' }}>
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
        {/* </Grid> */}
    </ThemeProvider>
  );
}