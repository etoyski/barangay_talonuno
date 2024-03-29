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
import { login, validateToken } from "./redux/userSlice";
import OTP from "./pages/Login/Confirmation";
import GPS from "./components/map/maps";
import { useDispatch, useSelector } from "react-redux";
import GPS2 from "./components/mapbox/mapBox";
import ScrollToTop from "./globals.js/ScrollToTop";
import ViewReport from "./pages/ActivityLog/viewActivities";
import ViewReports from "./pages/ActivityLog/viewReport";
import ViewRequest from "./pages/ActivityLog/viewRequest";
import AcitivityLog from "./pages/ActivityLog/viewActivities";
import ConfirmEmail from "./pages/Verification/confirmEmail";
import ConfirmedEmail from "./pages/Verification/confirmed";
import RequestLanding from "./pages/Request/RequestLanding";
import BarangayForm from "./pages/DocumentForms/BarangayForm";
import RequestType from "./pages/DocumentForms/RequestType";
import Checkout from "./pages/DocumentForms/Checkout";
import BLotterCheckout from "./pages/Blotter/BlotterCheckout";
import fetchTodos from "./Service/Service";

 import BarangayIDPreview from "./pages/PagePreview/BarangayIDPreview";
import CertificateofIncome from "./pages/PagePreview/CertificateOfIncome";
import BarangayResidency from "./pages/PagePreview/BarangayResidency";
import CertificateofIndigency from "./pages/PagePreview/Indigency";
import PostResidency from "./pages/PagePreview/PostResidency";
import LateRegistration from "./pages/PagePreview/LateRegistration";
import CertificateofNoIncome from "./pages/PagePreview/CertificateofNoIncome";
import ResetPassword from "./pages/Login/ResetPassword";
import ViewBlotter from "./pages/ActivityLog/viewBlotter";
import CollapsibleTable from "./pages/ActivityLog/Sample";
function App() {
    
    // const [name, setName] = useState('etoy');
    const isloggedin = useSelector((state) => state.user.isLoggedIn);
 const dispatch = useDispatch();
     //const [isloggedin, setisloggedin] = useState(false);
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("T") !== null) {
            // let token = localStorage.getItem("T");
            fetchTodos()
            .then(result => {
                setTodos(result);
            });
            dispatch(login(true))
            // validateToken(token) = value true or false
            //    setisloggedin(validateToken(token));

            //let email = localStorage.getItem("email");
            //validateToken({ token, email, navigate });
            // setisloggedin(validateToken({ token, email, navigate }));
             //setisloggedin(true);
        }else {
            dispatch(login(false))
            //setisloggedin(false)
        }
    }, [navigate]);

    return (
        <React.Fragment>
            <ScrollToTop />
            <header>
                <Navbar />
            </header>
           
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />}>
                        {" "}
                    </Route>
                    <Route path="/previewcertificateofnoincome" element={<CertificateofNoIncome />} />
                    <Route path="/sample" element={<CollapsibleTable />} />

                    <Route path="/preview=certificateoflateregistration" element={<LateRegistration />} />
                    <Route path="/preview=certificateofpostresidency" element={<PostResidency />} />
                    <Route path="/preview=certificateofindigency" element={<CertificateofIndigency />} />
                    <Route path="/preview=certificateofincome" element={<CertificateofIncome />} />
                    <Route path="/preview=barangayresidency" element={<BarangayResidency />} />
                    <Route path="/previewbarangayID" element={<BarangayIDPreview />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/reset=password/:token" element={<ResetPassword />} />
                    <Route path="/gps" element={<GPS2 />} />
                    <Route path="/map" element={<GPS />} />
                    <Route path="/viewrequest" element={<ViewRequest />} />
                    <Route path="/welcomepage" element={<Welcomepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/otp" element={<OTP />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contactus" element={<Contactus />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/viewreports" element={<ViewReports />} />
                    <Route path="/viewblotter" element={<ViewBlotter />} />
                    <Route path="/activitylog" element={<AcitivityLog />} />
                    <Route path="/tabs" element={<VerticalTabs />} />
                    <Route path="/confirm" element={<ConfirmEmail />} />
                    <Route path="/blotter" element={<BLotterCheckout />} />
                    <Route path="/reqdoc" element={<Checkout />} />
                    <Route path="/form=barangayform" element={<BarangayForm />} />
                    <Route path="/form=reqtype" element={<RequestType />} />
                    <Route path="/accountconfirmed" element={<ConfirmedEmail />} />
                   {isloggedin ? (  <Route path="/user-profile" element={<UserProfile />}  /> ) : "" }
                    {isloggedin ? (<Route
                        path="/edit-user-profile"
                        element={<EditUserProfile />}
                    /> ) : "" }
                    <Route
                        path="/speeddial"
                        element={<ControlledOpenSpeedDial />}
                    />
                    {isloggedin ? (<Route path="/settings" element={<GeneralSettings />} /> ) : ""}
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
                        <Route path="/request" element={<RequestLanding />} />
                    ) : (
                        ""
                    )}
                    <Route path="/admin/dashboard" element={<adminDashboard />} />
                   
                </Routes>
            </main>

            <footer>
                <StickyFooter />
            </footer>
            
        </React.Fragment>
    );
    
}

export default App;
