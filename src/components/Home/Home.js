import React from 'react'

import bgImg from '../../assets/cyber-bg.png'

import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, MobileStepper, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { useNavigate } from 'react-router-dom';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const images = [
  {
    
    imgPath:
      '{bgImg}',
  },
  {
   
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
  
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];


const Hero = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
             
             <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        xs={false}
        sm={3}
        md={7}
        sx={{
          
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
          </Box>     
          <Box sx={{ 
          
        }}
        >
 
          <Typography align="left" variant="h2"  >Barangay Talon Uno</Typography>
        <Typography align="left" variant="h5"sx={{p:0.5,}} gutterBottom component="div">
     Make Changes Now...
    </Typography>
    <Button   onClick={() => navigate('/login')}to="/login"  size="large" variant="outlined" sx={{p:2,  width: 480, }}>GET STARTED</Button>
          </Box>

          <Grid container spacing={3} sx={{p:20}}>
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