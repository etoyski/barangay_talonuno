import * as React from 'react';

import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { useNavigate } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import { useEffect } from 'react';
import { useState } from 'react';


export default function SplitButton() {

const navigate = useNavigate();
const [isloggedin, setisloggedin] = useState(false);
useEffect(()=> {
  if (localStorage.getItem ('T')){
      setisloggedin (true);
  }
}, [navigate] );
  return (
    <React.Fragment>
      <Container maxWidth="lg">

        
<Box sx={{ flexGrow: 1, p:5,  }} alignItems="flex-start">
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems="flex-start ">
    <Grid item xs="auto">
      <Roll left>
<Card sx={{ p:3,maxWidth: 345, height: 200, width:300 }} style={{backgroundColor: "#F5EDDC "}}>
{ isloggedin ? <CardActionArea >
  <CardMedia 
  />
  <CardContent  onClick={() => navigate('/request')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
    <BadgeOutlinedIcon /> Barangay ID 
    </Typography>
    <Typography variant="body2" color="text.secondary"> 
    </Typography>
  </CardContent>
</CardActionArea> 

:

<CardActionArea >
  <CardMedia 
  />
  <CardContent  onClick={() => navigate('/login')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
    <BadgeOutlinedIcon /> Barangay ID 
    </Typography>
    <br/>
    <br/>
  </CardContent>
</CardActionArea>}

{isloggedin ?<CardActions>
  <br/>
    <Button size="small" color="primary" onClick={() => navigate('/request')}to="/login">
      Request
    </Button>
  </CardActions> : <CardActions>
    <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
      Request
    </Button>
  </CardActions>}
</Card>
</Roll>
</Grid>

<Grid item xs="auto">
<Roll left>
<Card sx={{ p:3,maxWidth: 345, height: 200, width:300  }}style={{backgroundColor: "#F5EDDC "}}>
{ isloggedin ? <CardActionArea>
  <CardMedia
    
  />
<CardContent>
    <Typography gutterBottom variant="h5" component="div" onClick={() => navigate('/request')}to="/login" color="#1b5e20">
    <ArticleOutlinedIcon /> Barangay Clearance
    </Typography>
    <Typography variant="body2" color="text.secondary">
      
    </Typography>
  </CardContent>
</CardActionArea> 
:
<CardActionArea>
  <CardMedia 
  />  
<CardContent>
    <Typography gutterBottom variant="h5" component="div" onClick={() => navigate('/login')}to="/login" color="#1b5e20">
    <ArticleOutlinedIcon /> Barangay Clearance
    </Typography>
    
    <Typography variant="body2" color="text.secondary"> 
    </Typography>
  </CardContent>
</CardActionArea>}

<CardActions>
    {isloggedin ?<Button size="small" color="primary" onClick={() => navigate('/request')}to="/login">
      Request
    </Button> :<Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
      Request
    </Button> }
  </CardActions>
</Card>
</Roll>
</Grid>

<Grid item xs="auto">
<Roll right>
<Card sx={{ p:3,maxWidth: 345, height: 200, width:300 }}style={{backgroundColor: "#F5EDDC "}}>
{isloggedin ? <CardActionArea>
  <CardMedia
    
  />
  <CardContent onClick={() => navigate('/request')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
    <BadgeOutlinedIcon />  Barangay Residency
    </Typography>
    <Typography variant="body2" color="text.secondary">
      
    </Typography>
  </CardContent>
</CardActionArea> 
: 
<CardActionArea>
  <CardMedia
    
  />
  <CardContent onClick={() => navigate('/login')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
    <BadgeOutlinedIcon />  Barangay Residency
    </Typography>
    <Typography variant="body2" color="text.secondary">
      
    </Typography>
  </CardContent>
</CardActionArea>}

<CardActions>
    {isloggedin ? <Button size="small" color="primary" onClick={() => navigate('/request')}to="/login">
      Request
    </Button> : <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
      Request
    </Button>}
  </CardActions>
</Card>
</Roll>
</Grid>

<Grid item xs="auto">
<Roll left>
<Card sx={{ p:3,maxWidth: 345, height: 200, width:300 }}style={{backgroundColor: "#F5EDDC "}}>
{isloggedin ? <CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/request')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
    <BadgeOutlinedIcon />  Post Residency
    </Typography>       
  </CardContent>
</CardActionArea> : <CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/login')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
    <BadgeOutlinedIcon />  Post Residency
    </Typography>
    <br/>
    <br/>
    <Typography variant="body2" color="text.secondary">
    </Typography>
  </CardContent>
</CardActionArea>}
<CardActions>
    {isloggedin ? <Button size="small" color="primary" onClick={() => navigate('/request')}to="/login">
      Request
    </Button> : <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
      Request
    </Button>}
  </CardActions>
</Card>
</Roll>
</Grid>

<Grid item xs="auto">
<Roll rigt>
<Card sx={{ p:3,maxWidth: 345, height: 200, width:300 }}style={{backgroundColor: "#F5EDDC "}}>
{isloggedin ? <CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/request')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
     <WorkOutlineOutlinedIcon /> Local Employment
    </Typography>
    <Typography variant="body2" color="text.secondary">
      
    </Typography>
  </CardContent>
</CardActionArea> : <CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/login')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
     <WorkOutlineOutlinedIcon /> Local Employment
    </Typography>
    <Typography variant="body2" color="text.secondary">
      
    </Typography>
  </CardContent>
</CardActionArea>}
<CardActions>
    {isloggedin ? <Button size="small" color="primary" onClick={() => navigate('/request')}to="/login">
      Request
    </Button>: <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
      Request
    </Button>}
  </CardActions>
</Card>
</Roll>
</Grid>

<Grid item xs="auto">
<Roll left>
<Card sx={{ p:3,maxWidth: 345, height: 200, width:300 }}style={{backgroundColor: "#F5EDDC "}}>
{isloggedin ? <CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/request')}to="/request">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
      <HealingOutlinedIcon /> Green Card
    </Typography>
    <br/>
    <Typography variant="body2" color="text.secondary" >
      
    </Typography>
  </CardContent>
</CardActionArea> : <CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/login')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
      <HealingOutlinedIcon /> Green Card
    </Typography>
    <br/>
    <br/>
    <Typography variant="body2" color="text.secondary">
      
    </Typography>
  </CardContent>
</CardActionArea> }
<CardActions>
    {isloggedin ?<Button size="small" color="primary" onClick={() => navigate('/request')}to="/request">
      Request
    </Button> : <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
      Request
    </Button>} 
  </CardActions>
</Card>
</Roll>
</Grid>

<Grid item xs="auto">
<Roll right>
<Card sx={{ p:3,maxWidth: 345, height: 200, width:300 }}style={{backgroundColor: "#F5EDDC "}}>
{isloggedin ?<CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/request')}to="/request">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
      <SupportOutlinedIcon />Libreng Libing Program
    </Typography>
    <Typography variant="body2" color="text.secondary">
      
    </Typography>
  </CardContent>
</CardActionArea> : <CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/login')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
      <SupportOutlinedIcon />Libreng Libing Program
    </Typography>
    <Typography variant="body2" color="text.secondary">
      
    </Typography>
  </CardContent>
</CardActionArea>}
<CardActions>
   {isloggedin ?<Button size="small" color="primary" onClick={() => navigate('/request')}to="/login">
      Request
    </Button> : <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
      Request
    </Button>} 
  </CardActions>
</Card>
</Roll>
</Grid>
<Grid item xs="auto">
<Roll left>
<Card sx={{ p:3,maxWidth: 345, height: 200, width:300 }}style={{backgroundColor: "#F5EDDC "}}>
{isloggedin ? <CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/request')}to="/login">
    <Typography gutterBottom variant="h5" component="div">
     <AccountBalanceOutlinedIcon /> Bank Application
    </Typography>
    <Typography variant="body2" color="text.secondary">
      
    </Typography>
  </CardContent>
</CardActionArea> : <CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/login')}to="/login">
    <Typography gutterBottom variant="h5" component="div"color="#1b5e20">
     <AccountBalanceOutlinedIcon /> Bank Application
    </Typography>
    <br/>
    <br/>
    <Typography variant="body2" color="text.secondary">
      
    </Typography>
  </CardContent>
</CardActionArea>}
<CardActions>
    {isloggedin ? <Button size="small" color="primary" onClick={() => navigate('/request')}to="/login">
      Request
    </Button> : <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
      Request
    </Button>}
  </CardActions>
</Card>
</Roll>
</Grid>

<Grid item xs="auto">
<Roll right>
<Card sx={{ p:3,maxWidth: 345, height: 200, width:300 }}style={{backgroundColor: "#F5EDDC "}} >
{isloggedin ? <CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/request')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#90B77D">
    <ArticleOutlinedIcon /> Indigency
    </Typography>
    <Typography variant="body2" color="#90B77D">
      
    </Typography>
  </CardContent>
</CardActionArea> : <CardActionArea>
  <CardMedia/>
  <CardContent onClick={() => navigate('/login')}to="/login">
    <Typography gutterBottom variant="h5" component="div" color="#1b5e20">
    <ArticleOutlinedIcon /> Indigency
    </Typography>
    <br/>
    <br/>
    <Typography variant="body2" color="lightgreen">
      
    </Typography>
  </CardContent>
</CardActionArea>}
<CardActions>
    {isloggedin ?  <Button size="small" color="primary" onClick={() => navigate('/request')}to="/login"> 
      Request
    </Button>: <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login"> 
      Request
    </Button>}
  </CardActions>
</Card>
</Roll>
</Grid>
</Grid>
 
</Box>
</Container>
    </React.Fragment>
  );
}
