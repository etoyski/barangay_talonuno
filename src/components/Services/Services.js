import React from 'react';

import { ArrowSmRightIcon, BriefcaseIcon, CashIcon, CreditCardIcon, IdentificationIcon} from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../../assets/officials.jpg'
import { DocumentDuplicateIcon } from '@heroicons/react/outline';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import SupportOutlinedIcon from '@mui/icons-material/SupportOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import { useNavigate } from 'react-router-dom';
const Services = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, p:5,  }}>
        <Grid container spacing={5}>
        <Grid item xs="auto">
  <Card sx={{ p:3,maxWidth: 345 }}>
    <CardActionArea >
      <CardMedia
        
      />
      <CardContent  onClick={() => navigate('/login')}to="/login">
        <Typography gutterBottom variant="h5" component="div">
        <BadgeOutlinedIcon /> Barangay ID 
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
          Request
        </Button>
      </CardActions>
  </Card>
  </Grid>

  <Grid item xs="auto">
  <Card sx={{ p:3,maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" onClick={() => navigate('/login')}to="/login">
        <ArticleOutlinedIcon /> Barangay Clearance
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
          Request
        </Button>
      </CardActions>
  </Card>
  </Grid>
  <Grid item xs="auto">
  <Card sx={{ p:3,maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        
      />
      <CardContent onClick={() => navigate('/login')}to="/login">
        <Typography gutterBottom variant="h5" component="div">
        <BadgeOutlinedIcon />  Barangay Residency
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
          Request
        </Button>
      </CardActions>
  </Card>
  </Grid>
  <Grid item xs="auto">
  <Card sx={{ p:3,maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        
      />
      <CardContent onClick={() => navigate('/login')}to="/login">
        <Typography gutterBottom variant="h5" component="div">
        <BadgeOutlinedIcon />  Post Residency
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
          Request
        </Button>
      </CardActions>
  </Card>
  </Grid>
  <Grid item xs="auto">
  <Card sx={{ p:3,maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        
      />
      <CardContent onClick={() => navigate('/login')}to="/login">
        <Typography gutterBottom variant="h5" component="div">
         <WorkOutlineOutlinedIcon /> Local Employment
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
          Request
        </Button>
      </CardActions>
  </Card>
  </Grid>
  <Grid item xs="auto">
  <Card sx={{ p:3,maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        
      />
      <CardContent onClick={() => navigate('/login')}to="/login">
        <Typography gutterBottom variant="h5" component="div">
          <HealingOutlinedIcon /> Green Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
          Request
        </Button>
      </CardActions>
  </Card>
  </Grid>
  <Grid item xs="auto">
  <Card sx={{ p:3,maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        
      />
      <CardContent onClick={() => navigate('/login')}to="/login">
        <Typography gutterBottom variant="h5" component="div">
          <SupportOutlinedIcon />Libreng Libing Program
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
          Request
        </Button>
      </CardActions>
  </Card>
  </Grid>
  <Grid item xs="auto">
  <Card sx={{ p:3,maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        
      />
      <CardContent onClick={() => navigate('/login')}to="/login">
        <Typography gutterBottom variant="h5" component="div">
         <AccountBalanceOutlinedIcon /> Bank Application
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login">
          Request
        </Button>
      </CardActions>
  </Card>
  </Grid>
  <Grid item xs="auto">
  <Card sx={{ p:3,maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        
      />
      <CardContent onClick={() => navigate('/login')}to="/login">
        <Typography gutterBottom variant="h5" component="div">
        <ArticleOutlinedIcon /> Indigency
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary" onClick={() => navigate('/login')}to="/login"> 
          Request
        </Button>
      </CardActions>
  </Card>
  </Grid>
</Grid>
     
  </Box>
  );
}


export default Services;
