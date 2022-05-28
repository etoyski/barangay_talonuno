import { Button } from '@mui/material';
import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../brgylogo.jpg';
import './Header.css';




function Navbar() {
    const[click,setClick]= useState(false);
    const [button,setButton]= useState(true);
    const handleClick = () => setClick (!click);
    const closeMobileMenu = () => setClick(false);

    const showButton =() => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() =>{
        showButton()
    },[]);

    window.addEventListener('resize',showButton);
  return (
    <>
       <nav className='navbar'>
           <div className='navbar-container'>
               <Link to="/home" className='navbar-logo' onClick={closeMobileMenu}>
               Talon Uno 
               </Link>
               
               <div className='menu-icon' onClick={handleClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'}  />
               </div>

               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Contact Us
                    </Link>
                </li>
               </ul>
               {button && <Button to='/signup' variant='contained'sx={{marginRight:2}}>SIGNUP</Button>}
                {button && <Button variant='outlined' sx={{marginRight:1}}>SIGNUP</Button>}
           </div>
       </nav>
    </>
  )
}

export default Navbar;