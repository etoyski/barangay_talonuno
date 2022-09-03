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
      
      
        </Container>
      <Container maxWidth="md" component="main">
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
          https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
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
          https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
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
          https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
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
          https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
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
          https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
          <br/> Traffic Report <br/>   
          </Typography>
          <IconButton color="secondary" href='https://twitter.com/MMDA'>  <Typography variant="body2" color="white">
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
          https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="subheading" component="div">
           Mission, Vision and goal
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
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