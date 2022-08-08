
import React, { useEffect, useState } from 'react';
import './App.css';
//import Header from './components/Header/Header';
import { Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Welcomepage from './components/mainpage/Welcomepage';
import Login from './components/Login/Login';
import About from './components/About/About';
import Contactus from './components/Contactus/Contactus';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import StickyFooter from './components/Footer/Footer';
import VerticalTabs from './components/Tabs/Tabs';
import ControlledOpenSpeedDial from './components/Speeddial/Speeddial';
import Mainpage from './components/mainpage/Mainpage';
import Report from './components/Report/Report';
import Request from './components/Request/request';
import EditUserProfile from './components/userprofile/edit-user-profile';
import Navbar from './components/Header/Navbar';
import { Alert } from '@mui/material';
import GeneralSettings from './components/Settings/settings';



import UserProfile from './components/userprofile/user-profile';

function App() {

  const [isloggedin, setisloggedin] = useState(false);
  const navigate = useNavigate();


  useEffect(()=> {
    if (localStorage.getItem ('T','user')){
        setisloggedin (true);
    }
}, [navigate] ) 
  return (
    <React.Fragment>
    <header>
      <Navbar />
    </header>
    
    <main>
     
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} >  </Route>
      <Route path="/home" element={<Home/>}/>
      <Route path="/welcomepage" element={<Welcomepage/>}/>
      <Route path="/about" element={<About />}/> np
      <Route path="/services" element={<Services />}/> 
      <Route path="/contactus" element={<Contactus/>}/> 
      <Route path="/login" element={<Login/>}/> 
      <Route path="/signup" element={<Signup/>}/>  
      <Route path="/tabs" element={<VerticalTabs/>}/>
      <Route path="/user-profile" element={<UserProfile/>}/>
      <Route path="/edit-user-profile" element={<EditUserProfile/>}/>
      <Route path="/speeddial" element={<ControlledOpenSpeedDial/>}/>
      <Route path="/settings" element={<GeneralSettings/>}/>
      {isloggedin ?<Route path="/mainpage" element={<Mainpage />}/> : ''}
      {isloggedin ?  <Route path="/report" element={<Report />}/> : ''}
      {isloggedin ? <Route path="/request" element={<Request />}/>: ''}
     

      
      </Routes>
    </main>
    
    <footer>
      <StickyFooter />
    </footer>
    </React.Fragment>
    
  );
}

export default App;
