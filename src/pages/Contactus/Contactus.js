import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Divider, Grid, Popover, rgbToHex, styled, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import React, { useEffect, useState } from 'react'
import bgImg from '../../assets/brgyhall.jpg'
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import VerticalTabs from '../../components/Tabs/Tabs';
import './iframe.css';
const iframe='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.7950375320224!2d121.00048381521994!3d14.438972384887242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1e3afd12a73%3A0x5caf489f6d530339!2sTalon%20Uno%20Barangay%20Hall!5e0!3m2!1sen!2sph!4v1652612787805!5m2!1sen!2sph" width="1000" height="800" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Contactus = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isloggedin, setisloggedin] = useState(false);
  const navigate = useNavigate();

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  
  useEffect(()=> {
    if (localStorage.getItem ('T')){
        setisloggedin (true);
    }
}, [navigate] ) 
  return (
    <React.Fragment>
          {isloggedin ? <VerticalTabs /> : ''}

      <CssBaseline />
      <Container maxWidth="lg" component="main" sx={{p:2}}>
        <Box 
         xs={false}
         sm={3}
         md={7}
         sx={{ 
      bgcolor: '#cfe8fc', height: '60vh', 
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     backgroundPosition: 'center',}} >
       
       <Typography align='center' sx={{color:'whitesmoke', p:10}} variant='h1'> Contact Us</Typography>
      
       <Typography align='center' sx={{color:'whitesmoke'}} variant='h6'> Alabang-Zapote Rd., Las Pinas City NCR Philippines

</Typography>

       </Box>
      
       
      <Divider />
      
       <Box sx={{ flexGrow: 1 ,p:2}}>
         
      <Grid container spacing={3}>
        <Grid item xs="auto">
        <Card sx={{ maxWidth: 345, height:150, width:450 }} >
      <CardMedia
        height="160"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Email <AlternateEmailIcon />
        </Typography>
        <Typography variant="body2" color="text.secondary" aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
        talonuno.lp@gmail.com
        </Typography>
        <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>talonuno.lp@gmail.com</Typography>
      </Popover>
      </CardContent>
      <CardActions>
        
        <Button size="small">Send an Email</Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs="auto">
        <Card sx={{ maxWidth: 345,height:150, width:450  }}>
      <CardMedia
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Barangay Talon Uno Main: Telephone No.  <CallIcon />
        </Typography>
        <Typography variant="body2" color="text.secondary">
        (02) 8802-0911
        </Typography>
      </CardContent>
     

    </Card>
   
        </Grid>
        <Grid item xs="auto">
        <Card sx={{ maxWidth: 345,height:150, width:450  }}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Barangay Talon Uno Satelite Office  <CallIcon />
        </Typography>
        <Typography variant="body2" color="text.secondary">
       88023811
        </Typography>
      </CardContent>
    
        </Card>
        </Grid>
        <Grid item xs="auto">
        <Card sx={{ maxWidth: 345,height:150, width:450  }}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Telephone No.  <CallIcon />
        </Typography>
        <Typography variant="body2" color="text.secondary">
       0289945178
        </Typography>
      </CardContent>
     
        </Card>
        </Grid>
        <Grid item xs="auto">
        <Card sx={{ maxWidth: 345,height:150, width:450  }}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Phone No.  <CallIcon />
        </Typography>
        <Typography variant="body2" color="text.secondary">
       09994714492
        </Typography>
      </CardContent>
    
        </Card>
        </Grid>
       
        <Grid item xs>
        <Card sx={{ maxWidth: 345,height:150, width:450 }}>
      <CardMedia
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Facebook <FacebookIcon />
        </Typography>
        <Button size="small" color="primary" href='https://www.facebook.com/BrgyTalon1'>
        https://www.facebook.com/BrgyTalon1
        </Button> 
      </CardContent>
      <CardActions>
      
        <Button size="small" href='https://www.facebook.com/BrgyTalon1'><FacebookIcon /> Visit Facebook Page</Button>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
    </Box>
    <div className='myIframe'>

       <Iframe sx={{}}iframe={iframe} />
       </div>
  
      </Container>

    </React.Fragment>
  )
}

export default Contactus