import React from 'react'
import { useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../../api/api";
import bgImg from '../../assets/cyber-bg.png'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, IconButton, MobileStepper, Paper, Stack, Typography } from '@mui/material'
import { makeStyles, styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { Link, useNavigate } from 'react-router-dom';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Slider from '../../components/carousel/carousel';
import ActionAreaCard from './cards';
import serviceCard from './services-cards/service-cards';
import './iFrame.css';
import { useEffect } from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Second from "../../assets/brgyhall.jpg";
import Slide from 'react-reveal/Slide';

const iframe='<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBrgyTalon1&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}
const iframe2 = '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FabscbnNEWS&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
function Iframe2(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe2?props.iframe2:""}} />);
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

  
  

const Hero = () => {
  const navigate = useNavigate();
  const [isloggedin, setisloggedin] = useState(false);
  useEffect(()=> {
    if (localStorage.getItem ('T')){
        setisloggedin (true);
    }
}, [navigate] );
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
      <LightSpeed Left>
      <Slider/>
      </LightSpeed>
      <Slide left>
      <ActionAreaCard/>
      </Slide>
    
      
      <hr/> 
      <Container maxWidth="md" component="main" sx={{p:2}} >
      
      
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item  xs={7} sx={{ maxWidth: 345 }}>
        <Slide right>
            <Paper >
            <Item ><div className='myIframe2'>
        <Iframe2 iframe2={iframe2} />
        </div></Item>
            </Paper>
            </Slide>
        </Grid>
        <Grid item  xs={5} sx={{ maxWidth: 345 }}>
          <Slide right>
            <Paper elevation={0} sx={{width:355}}>
         <Item >        
      <Iframe iframe={iframe} />
        </Item>
            </Paper>
            </Slide>
        </Grid>
      </Grid>
    
        
      
        
        
  </Container>
    
      
            <Container fixed sx={{p:2}} >
       
        {/* <Box
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
             
             
          <Zoom>
          <Typography align="left" variant="h2"  >Barangay Talon Uno</Typography>
          </Zoom>
          <Roll left>
        <Typography align="left" variant="h5"sx={{p:0.5,}} gutterBottom component="div">
     Make Changes Now...
    </Typography>
    </Roll>
    <Roll left>

    
    <Button   onClick={() => navigate('/login')}to="/login"  size="large" variant="outlined" sx={{p:2,  width: 300, }}>GET STARTED</Button>
    </Roll>
      </Box> */}
      
      
        </Container >
        <Container maxWidth="xl" sx={{mb:1,background:'#D1D1D1'}} >   
        
      <Container maxWidth="md" component="main" >
    <Grid container spacing={5} alignItems="flex-end">
        <Grid
          item
          xs={12}
          s ={8}
          md={4}
        >
          <Slide left>
          <Card sx={{ maxWidth: 345 }}  style={{backgroundColor: "#277BC0"}}>
      {isloggedin ? <CardActionArea onClick={() => navigate('/report')}to="/login">
        <CardMedia
          component="img"
          height="200"
          image="
          https://cdn-icons-png.flaticon.com/512/4252/4252360.png"
          alt="bg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="wheat">
             <br/><b>Report</b> <br/> 
          </Typography>
          <Typography variant="h5" color="white">
          an incident 
          </Typography>
        </CardContent>
      </CardActionArea> : <CardActionArea onClick={() => navigate('/login')}to="/login">
        <CardMedia
          component="img"
          height="200"
          image="
          https://cdn-icons-png.flaticon.com/512/4252/4252360.png"
          alt="bg"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="wheat">
             <br/><b>Report</b> <br/> 
          </Typography>
          <Typography variant="h5" color="white">
          an incident 
          </Typography>
        </CardContent>
      </CardActionArea>}
    </Card>
    </Slide>
        </Grid>
        <Grid
          item
          xs={12}
          s ={8}
          md={4}
        >
          <Slide right>
          <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "teal"}}>
      {isloggedin ? <CardActionArea onClick={() => navigate('/request')}to="/login">
        <CardMedia
          component="img"
          height="200"
          image="
          https://cdn-icons-png.flaticon.com/512/3076/3076061.png"
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
           <br/> Request a <br/> 
          </Typography>
          <Typography variant="h5" color="wheat ">
          <b>Document</b>
          </Typography>
        </CardContent>
      </CardActionArea> : <CardActionArea onClick={() => navigate('/login')}to="/login">
        <CardMedia
          component="img"
          height="200"
          image="
          https://cdn-icons-png.flaticon.com/512/3076/3076061.png"
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
           <br/> Request a <br/> 
          </Typography>
          <Typography variant="h5" color="wheat ">
          <b>Document</b>
          </Typography>
        </CardContent>
      </CardActionArea>}
    </Card>
    </Slide>
        </Grid>
        <Grid
          item
          xs={12}
          s ={8}
          md={4}
        >
          <Slide right>
          <Card sx={{ maxWidth: 345 }}style={{backgroundColor: "#D61C4E "}}>
          
        
      <CardActionArea>
        <CardMedia
          component="img"
            height="190"
          image="
          https://cdn-icons-png.flaticon.com/512/4926/4926377.png"
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
          <br/> Traffic Report <br/>   
          </Typography>
          <IconButton color="secondary" href='https://twitter.com/MMDA' onClick={() => navigate('/https://twitter.com/MMDA')}to="/https://twitter.com/MMDA">  <Typography variant="body2" color="white">
           Go to site
           </Typography>
          <ArrowCircleRightIcon /> </IconButton>
         
        </CardContent>
      </CardActionArea>
    </Card>
    </Slide>  
        </Grid> 
    </Grid>
  </Container>
  </Container>
  <br/>
  <Container maxWidth="md" component="main">
      <Typography variant="h4" component="div" align="center" color="black">
        Barangay Talon Uno
      </Typography>
      <br/>
      <Grid container spacing={5} alignItems="flex-end">
        <Grid
          item
          xs={12}
          s ={8}
          md={4}
        >
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="
          https://lh3.googleusercontent.com/proxy/nyxH52PhCA79eT93cZgX8VWgNinf27xKc3gCDTdS5KSWwaZEJezleGOCmaaEthIm6ICbmnl02keRpRmr5IvaV6HlCsxOpKDy4W0D5UIaS_njN90CwY7UY3o8Kt0bgkVYtWYa3bMWq93cnAHvkPjvC6g7NbJpBm1rpPcQ26RlF2Jx=w1080-k-no"
          alt="bg"
        />
        <CardContent>
        <Button variant="text" color="primary">
            Mission, Vision & Goal 
          </Button>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid
          item
          xs={12}
          s ={8}
          md={4}
        >
          <Card sx={{ maxWidth: 345  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="
          data:image/jpeg;base64,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"
          alt="bg"
        />
        <CardContent onClick={() => navigate('/about')}to="/about">
        <Button variant="text" color="primary" onClick={() => navigate('/about')}to="/about">
            Barangay Officials 
          </Button>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid
          item
          xs={12}
          s ={8}
          md={4}
        >
          <Card sx={{ maxWidth: 345  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://img.freepik.com/premium-vector/location-icon-simple-symbol-red-pin-sign_399998-369.jpg?w=2000 "
          alt="bg"
        />
        <CardContent  >
          <Button variant="text" color="primary">
            Location 
          </Button>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
   
  </Container>
  <br/>
    </React.Fragment>
    
  )
}

export default Hero