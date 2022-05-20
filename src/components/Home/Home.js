import React from 'react'

import bgImg from '../../assets/cyber-bg.png'

import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, MobileStepper, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';


import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { useNavigate } from 'react-router-dom';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  
  

const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
 

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{p:2}} >
      
        <Box
         xs={false}
         sm={3}
         md={7}
        sx={{ 
           backgroundImage: `url(${bgImg})`,
           backgroundRepeat: 'no-repeat',
          bgcolor: '#grey', 
          height: '50vh' ,
          backgroundSize: 'contain',
          backgroundPosition: 'right',
        }}
        >
             
             
 
          <Typography align="left" variant="h2"  >Barangay Talon Uno</Typography>
        <Typography align="left" variant="h5"sx={{p:0.5,}} gutterBottom component="div">
     Make Changes Now...
    </Typography>
    <Button   onClick={() => navigate('/login')}to="/login"  size="large" variant="outlined" sx={{p:2,  width: 300, }}>GET STARTED</Button>
          </Box>

          <Grid container spacing={2} sx={{p:10}}>
  <Grid item xs="auto">
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <AccountBalanceOutlinedIcon  />
        <CardContent  onClick={() => navigate('/login')}to="/login">
          <Typography gutterBottom variant="h5" component="div">
            Report
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Report an incident online now!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs="auto">
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <AccountBalanceOutlinedIcon  />
        <CardContent  onClick={() => navigate('/login')}to="/login">
          <Typography gutterBottom variant="h5" component="div">
            Request
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Request a legal document online now!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  </Grid>
      </Container>
      
    </React.Fragment>
    
  )
}

export default Hero