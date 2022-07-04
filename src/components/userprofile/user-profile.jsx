import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Avatar, Card, CardContent, Container, CssBaseline, Fab, Grid, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export default function UserProfile() {
  const navigate = useNavigate();

  return (
  
    <ThemeProvider theme={theme}>
    
    <Grid component={Paper} elevation={16} container spacing={3} sx={{p:2, flexGrow: 1}}>
      <Box component="form"  sx={{ mt: 2 }} >
      <Card style={{ maxWidth: 2000, padding: "30px 5px", marginRight: "6px" }}>
           <CardContent>
           <CardContent>
              <Typography gutterBottom variant="h5">
                Profile
            </Typography> 
            <Box >
            <Grid container spacing={1} justifyContent="center"
                alignItems="center">
            <Grid xs="auto"  item>
            <Avatar  sx={{width: 90, height: 85 }} src="/broken-image.jpg"  />
            <Typography variant="body2"> NAME sds</Typography>
          
        </Grid>
        
            </Grid>
            
        </Box>
           </CardContent>
      

              
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
        
        </Grid>
        
    </ThemeProvider>
  );
}