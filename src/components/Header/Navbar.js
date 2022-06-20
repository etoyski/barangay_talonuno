import { AppBar, IconButton, MenuItem, Toolbar } from '@mui/material';
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

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
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
    if (localStorage.getItem ('T')){
        setisloggedin (true);
    }
}, [navigate] ) 
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              
              Talon Uno
            </NavLogo>
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
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              sx={{color:'#fff'}}
              onClick={() => navigate('/about')}
            >
              <AccountCircle />
            </IconButton>
          </Box>  :  ''}
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
export default Navbar;