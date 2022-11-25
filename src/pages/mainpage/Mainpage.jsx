import React, { useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Chip,
    Container,
    Stack,
    Typography,
    Tabs,
    Tab,
    Divider,
    Paper,
    alpha,
    IconButton,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
//import Footer from "../components/Footer";
//import AppbarSpace from "../utils/AppbarSpace";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
//import Header from "../components/Header";
import { useSelector } from "react-redux";
import VerticalTabs from "../../components/Tabs/Tabs";
import ActionAreaCard from "../Home/cards";
// import { userData } from "../redux/slicer/userSlice";
import { makeStyles, styled } from '@mui/material/styles';
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import swal from 'sweetalert';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import { useNavigate } from "react-router-dom";
import BasicTimeline from "../../components/Notification/NotifBadge";
import NotifIcon from "../../components/Notification/NotifIcon";
import NotifRep from "../../components/Notification/NotifBadge";
import { useEffect } from "react";
import GPS from "../../components/map/maps";
const iframe='<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBrgyTalon1&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="420" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>'
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
  
const Details = ({ icon, label, variant, size }) => {
    return (
        <Chip
            label={label}
            icon={icon}
            onClick={() => console.log("asd")}
            variant={variant}
            size={size}
            color="primary"
        />
    );
};

const UserProfile = () => {
    //const user = useSelector(userData);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    //console.log(user)
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    //const time = current.toLocaleTimeString("en-US");
    const day = weekday[current.getDay()];
    const [time, setTime] = React.useState();
    const [error,setError] = useState(false); 

    const sendRequest = async () => {
        setLoading(true)
        try { 
            const res = await axios.post('https://barangay-talon-uno.vercel.app/main/report',{
                email:`${localStorage.getItem('email')}`,
               // type: inputs.type,
                name: `${sessionStorage.getItem('user')}`,
                address: `${localStorage.getItem('address')}`,
                addressdetail: `${localStorage.getItem('gps')}`,
                report: 'EMERGENCY/SOS',
                Image: 'https://www.shutterstock.com/image-vector/red-flasher-siren-text-sos-600w-1665148996.jpg ',
                
            }, {
              headers:{
                "Authorization": "Bearer " + `${localStorage.getItem('T')}`  
              }
            })
            swal({
              title: "Report Submitted!",
              text: "Report Successful",
              icon: "success",
              button: "OK",
            });
              
                console.log(res.data.token);
               // localStorage.setItem('T', res.data.token);
               //navigate('/report');
    
        }catch(error) {
          setError(true)
          swal({
            title: "Report Not Submitted!",
            text: "Report Unsuccessful",
            icon: "error",
            button: "OK",
            
          });
                console.log(error.response);
        }finally {
          setLoading(false)
        }
      
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(inputs);
     
        sendRequest();
    
    };
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => {
        clearInterval(timer);
      };
    }, []);
    useEffect(() => {

    },[]);
    return (    
        <React.Fragment>
            {/* <Header title="Dashboard" /> */}
            {/* <AppbarSpace divider /> */}
          <VerticalTabs/>
            <Container sx={{ mt: 5 }}>
                <Stack
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    gap={{ xs: 5, sm: 5, md: 2 }}
                    justifyContent="space-between"
                >
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                        <Avatar
                            // src={img}
                            alt={sessionStorage.getItem('user')}
                            src={localStorage.getItem('image')}
                             sx={{ width: 63, height: 63 }}
                             
                        />

                        <Stack
                            direction="column"
                            justifyContent="space-between"
                            gap={2}
                        >
                            
                            <Box>
                                <Stack
                                    direction="row"
                                    gap={1}
                                    alignItems="start"
                                >
                                    <Typography variant="h5" fontWeight="bold" textTransform="capitalize">
                                    {sessionStorage.getItem("user")}
                                    </Typography>
                                    <Chip
                                        icon={<VerifiedIcon />}
                                        label="Verified"
                                        color="success"
                                        size="small"
                                        variant="outlined"
                                    />
                                </Stack>

                                {/* <Typography variant="inherit" fontWeight={300}>
                                    Conversion Copywriter & Marketing consultant
                                </Typography> */}
                            </Box>
                            
                            <Stack direction="row" flexWrap="wrap" gap={1}>
                                <Details
                                    label=  {localStorage.getItem("address")}
                                    icon={
                                        <LocationOnOutlinedIcon color="info" />
                                    }
                                    size="small"
                                    variant="outlined"
                                />
                                <Details
                                    label=  {localStorage.getItem("contact")}
                                    icon={
                                        <LocalPhoneOutlinedIcon color="info" />
                                    }
                                    size="small"
                                    variant="outlined"
                                />
                                <Details
                                    label={localStorage.getItem("email")}
                                    icon={
                                        <MailOutlineOutlinedIcon color="info" />
                                    }
                                    size="small"
                                    variant="outlined"
                                />
                                <NotifIcon/>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
            <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <LoadingButton 
             loading = {loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, height:50}}
              color="error"
              startIcon={<EmergencyShareIcon style={{width:'23px', height: '23px'}}/>}
                                     
              >
           
          <Typography variant="h5" href='tel: 177'> SOS</Typography>
          </LoadingButton>         
      
        </Box>
           
            <Box bgcolor="#f2f4fb" mt={2} pb={10} height="100vh">
                <Container sx={{ pt: 5, pb: 5 }}>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        gap={5}
                        divider={
                            <Divider
                                orientation="vertical"
                                flexItem
                                variant="middle"
                            />
                        }
                    >
                        <Box width="100%">
                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                 You are currently at: 
                            </Typography>
                            <Typography variant="h6" fontWeight="" mb={2}>
                                {localStorage.getItem('gps')}  
                            </Typography>
                            <Divider />
                            {/* <ActionAreaCard/> */}
                            <GPS/>
                        </Box>

                        <Box width="100%">
                            <Typography variant="h5" fontWeight="" mb={2}>
                                Announcement as of 
                            </Typography>
                            <Typography variant="h5" fontWeight="bold" mb={2}>
                                 {day} {time}
                            </Typography>

                            <Divider />

                            <Section title="Updates">
                                <Stack direction="column" gap={2}>
                                    <Box width="100%">
                                 
                                        <Divider>
                                            <Typography
                                                variant="body2"
                                                fontWeight={300}
                                                p={1}
                                            >
                                               
                                            </Typography>
                                        </Divider>
                                        <Paper
                                            sx={{
                                                backgroundColor: (theme) =>
                                                    alpha(
                                                        theme.palette.info
                                                            .light,
                                                        0.2
                                                    ),
                                                p: 2,
                                                borderRadius: 4,
                                            }}
                                            elevation={0}
                                        >
                                            <Stack
                                                direction="row"
                                                justifyContent="space-between"
                                                gap={1}
                                            >
                                              
                                              <Paper elevation={0} sx={{width:355}}>
                                        <Item >        
                                         <Iframe iframe={iframe} />
                                          </Item>
                                             </Paper>
                                             
                                            </Stack>
                                        </Paper>
                                    </Box>

                                    <Box width="100%">
                                         <Divider>
                                            <Container>
                                                <Paper sx={{width:355}}>
                                                   
                                                </Paper>
                                            </Container>
                                        </Divider>
                                        {/* <Paper
                                            sx={{
                                                backgroundColor: (theme) =>
                                                    alpha(
                                                        theme.palette.warning
                                                            .light,
                                                        0.2
                                                    ),
                                                p: 2,
                                                borderRadius: 4,
                                            }}
                                            elevation={0}
                                        >
                                            <Stack
                                                direction="row"
                                                justifyContent="space-between"
                                                gap={1}
                                            >
                                                <Box>
                                                    <Typography
                                                        fontWeight="bold"
                                                        color="inherit"
                                                    >
                                                        Monica Badiu
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        fontWeight={300}
                                                    >
                                                        monicabadiu@gmail.com
                                                    </Typography>
                                                </Box>
                                                <IconButton>
                                                    <CloseRoundedIcon color="warning" />
                                                </IconButton>
                                            </Stack>
                                        </Paper> */}
                                    </Box>
                                </Stack>
                            </Section>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* <Footer /> */}
        </React.Fragment>
    );
};

const Activity = () => {
    return (
        <Section title="Log">
            <Stack gap={3}>
                <Stack
                    direction="row"
                    gap={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                  

                    <Box>
                        
                        <Stack
                            direction={{ xs: "row", sm: "row" }}
                            alignItems="center"
                            gap={{ xs: 1, sm: 2 }}
                        >
                            <GPS />
                           
                        </Stack>
                    </Box>
                </Stack>

                <Stack
                    direction="row"
                    gap={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Avatar sx={{ width: 50, height: 50, bgcolor: "grey.300" }}>
                        <LibraryAddCheckOutlinedIcon color="success" />
                    </Avatar>

                    <Box>
                        <Typography fontWeight="bold">
                            User is already done on task!
                        </Typography>
                        <Stack
                            direction={{ xs: "row", sm: "row" }}
                            alignItems="center"
                            gap={{ xs: 1, sm: 2 }}
                        >
                            <Typography variant="body2" fontWeight={300}>
                                1 hr ago
                            </Typography>
                            <Button size="small" color="success" disableRipple>
                                DONE!
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Section>
    );
};

const Section = ({ title, children }) => {
    return (
        <Box width="100%" mb={5} mt={5}>
            <Typography variant="h6" fontWeight={500} mb={3}>
                {title}
            </Typography>
            {children}
        </Box>
    );
};

const LinkTab = ({ ...props }) => {
    return (
        <Tab
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
            disableRipple
            disableFocusRipple
            sx={{
                color: "#172E59",
                fontSize: "inherit",
                borderRight: 1,
                borderColor: "divider",
            }}
        />
    );
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};



export default UserProfile;