import React, {useEffect, useState}from 'react'
import { AppBar, Toolbar,Box,Tab, Tabs, Typography, Link, useScrollTrigger, Slide, Button,useMediaQuery,useTheme, Avatar, Tooltip, IconButton, Menu, MenuItem, Divider, ListItemIcon } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { color } from '@mui/system';
import DrawerComponent from '../DrawerComponent';
import Logo from '../../brgylogo.jpg';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import { Logout } from 'react-hero-icon/soli ad';


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
 //

const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const [value,setValue] = useState();
    const navigate = useNavigate();
    const [isloggedin, setisloggedin] = useState(false);
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    useEffect(()=> {
        if (localStorage.getItem ('T')){
            setisloggedin (true);
        }
    }, [navigate] ) 
  return (
    <div>
      
        <AppBar sx={{background:'#ffff'}}position="sticky"> 
        
            <Toolbar>     
            <img src={Logo} height={100} />
                <Typography sx={{fontSize:'2rem',paddingLeft:'1%', color:'black'}}>Talon Uno</Typography>
                {
                    isMatch ? (
                        <>
                        <Typography>
                           
                        </Typography>
                        <DrawerComponent />
                        </>
                    ) : (
                        <>
                          <Box sx ={{marginLeft:"auto"}}>

                   
                        <Tabs 
                    
                    indicatorColor="secondary"
                    onChange={(e,val)=> setValue(val)} 
                    value={value} 
                    textColor="inherit"
                    >
                       
                       
                       {isloggedin ? ''  : <Tab  sx={{color:'darkgrey'}} onClick={() => navigate('/home')} to="/home" component={Link} label="Home" />} 
                       {isloggedin ? ''  : <Tab sx={{color:'black'}}  onClick={() => navigate('/about')}to="/about" component={Link} label="About" /> }
                       {isloggedin ? ''  : <Tab sx={{color:'black'}}  onClick={() => navigate('/services')}to="/services" component={Link} label="Services" />}
                       {isloggedin ? ''  :<Tab sx={{color:'black'}}  onClick={() => navigate('/contactus')}to="/contactus" component={Link} label="Contact Us"/>}
                       
                       
                        {isloggedin ? <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip  title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>  :   '' }



                        {isloggedin ? <LogoutButton props = {setisloggedin}/> :  <Button  
                        sx={{marginLeft:"auto" ,color:"white"}} 
                        onClick={() => navigate('/login')}to="/login" 
                        component={Link} 
                        variant='contained'> Login </Button> }
                        
                        
                         {isloggedin ? ''  :  <Button  
                        sx={{marginLeft:"10px" ,color:"blue"}} 
                        onClick={() => navigate('/signup')}to="/signup" 
                        component={Link} 
                        variant='outlined'>  Signup </Button> }
                        
                        
                    </Tabs>
                    </Box>
                        </>
                    )
                }
              
            </Toolbar>
            
        </AppBar>
    </div>
  )
}

const LogoutButton = ({props})=> {
  const navigate = useNavigate();
  const loggedOut = () => {
    localStorage.removeItem('T');
    props(false);
    navigate('/login')
  }
  return (
    <React.Fragment>
      <Button onClick={loggedOut}> Logout </Button>
    </React.Fragment>
  )
}
export default Header