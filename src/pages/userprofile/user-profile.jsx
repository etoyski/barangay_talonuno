import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Avatar, Breadcrumbs, Card, CardContent, Container, CssBaseline, Divider, Fab, Grid, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
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
export default function UserProfile() {
  const navigate = useNavigate();

  return (
  
    <React.Fragment>
       <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          onClick={() => navigate('/user-profile')}
          label="User Profile"
          icon={<HomeIcon fontSize="small" />}
        />
       
              </Breadcrumbs>
              
      
              
        </div>
    
    <ThemeProvider  theme={theme}>
      
      {/* <Grid component={Paper} elevation={16} sx={{p:2,alignItems: 'center'}}> */}
      
      <Box component="paper" elevation={16}  sx={{ mt: 1, p:2,alignItems: 'center',justifyContent: 'center',display: 'flex'}}>
          <Card  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
  sx={{ width: 1000, padding: "10px ", marginRight: "16px", border:2,zIndex: 'tooltip' }}>
           <CardContent>
           <CardContent>
              <Typography gutterBottom variant="h5">
                Profile
            </Typography> 
            <Box >
            <Grid container spacing={1} justifyContent="left"
                alignItems="center">
            <Grid xs="auto"  item>
            <Avatar  sx={{width: 90, height: 85 }} src="/broken-image.jpg"  />
            <Typography variant="body2"> </Typography>
          
        </Grid>
        
            </Grid>
            
        </Box>
           </CardContent>
      <Divider sx={{height:3, border:0.3, bgcolor:'black'}} />
              
                <Grid container spacing={1}>
                  <Grid xs={12} sm={4} item>
                  <Typography variant="h6"> Firstname: </Typography>
                  </Grid>
                  <Grid xs={12} sm={4} item>
                  <Typography variant="h6"> </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Middlename: </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Middlename: </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Lastname: </Typography>
                  </Grid> <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Lastname: </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Email: </Typography>
                  </Grid> <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Email: </Typography>
                  </Grid>
                  <Grid xs={12} item>
                  <Typography variant="h5"> Address </Typography>
                  </Grid> 
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> City: </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> City: </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Barangay: </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Barangay: </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Street: </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Street: </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Contact Number: </Typography>
                  </Grid> <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Contact Number: </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Birthdate: </Typography>
                  </Grid> <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Birthdate: </Typography>
                  </Grid>
                  <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Gender: </Typography>
                  </Grid> <Grid xs={12} sm={6} item>
                  <Typography variant="h6"> Gender: </Typography>
                  </Grid>
                  </Grid>
            </CardContent>
            <CardContent sx={{margin:5}}>
            <Fab color="secondary" aria-label="edit"  onClick={() => navigate('/edit-user-profile')}>
        <EditIcon />
      </Fab>
            </CardContent>
            
          </Card>
         </Box>
        {/* </Grid> */}
        
    </ThemeProvider>
  </React.Fragment>
  );
}