import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
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

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isloggedin, setisloggedin] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
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