import React, { useEffect, useState } from "react";
import "./App.css";
//import Header from './components/Header/Header';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Welcomepage from "./pages/mainpage/Welcomepage";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import Contactus from "./pages/Contactus/Contactus";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import StickyFooter from "./components/Footer/Footer";
import VerticalTabs from "./components/Tabs/Tabs";
import ControlledOpenSpeedDial from "./pages/Speeddial/Speeddial";
import Mainpage from "./pages/mainpage/Mainpage";
import Report from "./pages/Report/Report";
import Request from "./pages/Request/request";
import EditUserProfile from "./pages/userprofile/edit-user-profile";
import Navbar from "./components/Header/Navbar";
import { Alert } from "@mui/material";
import GeneralSettings from "./pages/Settings/settings";
import Register from "./pages/Signup/useForm";
import UserProfile from "./pages/userprofile/user-profile";
import { validateToken } from "./redux/userSlice";
import OTP from "./pages/Login/Confirmation";
import GPS from "./components/map/maps";
import { useDispatch, useSelector } from "react-redux";

function App() {
    // const [name, setName] = useState('etoy');
    //const isloggedin = useSelector((state) => state.user.isLoggedIn);
    // const dispatch = useDispatch();
     const [isloggedin, setisloggedin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("T") && localStorage.getItem("email")) {
            let token = localStorage.getItem("T");
            // dispatch()
            // validateToken(token) = value true or false
            //    setisloggedin(validateToken(token));

            let email = localStorage.getItem("email");
            //validateToken({ token, email, navigate });
            // setisloggedin(validateToken({ token, email, navigate }));
             setisloggedin(true);
        }
    }, [navigate]);

    return (
        <React.Fragment>
            <header>
                <Navbar />
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />}>
                        {" "}
                    </Route>
                    <Route path="/home" element={<Home />} />
                    <Route path="/map" element={<GPS />} />
                    <Route path="/welcomepage" element={<Welcomepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/otp" element={<OTP />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contactus" element={<Contactus />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/tabs" element={<VerticalTabs />} />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route
                        path="/edit-user-profile"
                        element={<EditUserProfile />}
                    />
                    <Route
                        path="/speeddial"
                        element={<ControlledOpenSpeedDial />}
                    />
                    <Route path="/settings" element={<GeneralSettings />} />
                    {isloggedin ? (
                        <Route path="/mainpage" element={<Mainpage />} />
                    ) : (
                        ""
                    )}
                    {isloggedin ? (
                        <Route path="/report" element={<Report />} />
                    ) : (
                        ""
                    )}
                    {isloggedin ? (
                        <Route path="/request" element={<Request />} />
                    ) : (
                        ""
                    )}
                </Routes>
            </main>

            <footer>
                <StickyFooter />
            </footer>
            
        </React.Fragment>
    );
}

export default App;
