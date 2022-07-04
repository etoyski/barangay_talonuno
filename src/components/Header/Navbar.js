import { AppBar, Avatar, Divider, IconButton, ListItemIcon, MenuItem, Toolbar, Tooltip } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonL } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './NavbarElements';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box } from '@mui/system';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { Settings } from '@mui/icons-material';

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  

  const mobileMenuId = 'primary-search-account-menu-mobile';


  const [click, setClick] = useState(false);
  
  const [button, setButton] = useState(true);
  const [isloggedin, setisloggedin] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate();

 

 
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
    
  }, []);

  window.addEventListener('resize', showButton);
  useEffect(()=> {
    if (localStorage.getItem ('T','user')){
        setisloggedin (true);
    }
}, [navigate] ) 
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            {isloggedin ?<NavLogo to='/mainpage' onClick={closeMobileMenu}>
              
              Talon Uno
            </NavLogo> : <NavLogo to='/' onClick={closeMobileMenu}>
              
              Talon Uno
            </NavLogo>}
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>      

            <NavMenu onClick={handleClick} click={click}>
           
          
            
         {/* <NavItem sx={{  display: { xs: 'flex', md: 'none' } }} >
         {isloggedin ? ''  :<IconButton
            to='/about'
              size="large"
              aria-label="show more"
              onClick={() => navigate('/about')}
              aria-haspopup="true"
              sx={{color:'#fff'}}
            >
              <AccountCircle />
            </IconButton>}
          </NavItem> */}
     
    
            {isloggedin ? ''  :  <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>}
              <NavItem>
                <NavLinks to='/about' onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/contactus' onClick={closeMobileMenu}>
                  Contactus
                </NavLinks>
              </NavItem>
              
    
              {isloggedin ? ''  :  <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/signup'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/signup'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>}
              {isloggedin ? <LogoutButton props = {setisloggedin}/> :  <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/login'>
                    <ButtonL primary>Login</ButtonL>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/login'>
                    <ButtonL onClick={closeMobileMenu} fontBig primary>
                    Login                    </ButtonL>
                  </NavBtnLink>
                )}
                </NavItemBtn>} 
                {isloggedin ? <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
            <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick1}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
          </Box>  :  ''}


          {isloggedin ? <Box sx={{  display: { xs: 'flex', md: 'none' } }}>
          <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick1}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
          </Box>  :  ''}
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
       
        <Divider />
        <MenuItem>
          <ListItemIcon onClick={() => navigate('/about')}>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
      </Menu>
            </NavMenu>
            
          </NavbarContainer>      
       
        </Nav>
        
      </IconContext.Provider>
      
    </>
  );
  
}

const LogoutButton = ({props})=> {
  const navigate = useNavigate();
  const loggedOut = () => {
    
    
    //localStorage.removeItem('T');
    localStorage.clear();

    props(false);
    navigate('/login')
  }
  return (
    <React.Fragment>
      <Button onClick={loggedOut}> Logout </Button>
    </React.Fragment>
  )
}
export default Navbar;