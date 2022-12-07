import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {Typography, Paper, Grid, Stack, Divider, ButtonGroup, Button} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {login} from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom';
import VerticalTabs from '../../components/Tabs/Tabs';
import BasicTimeline from '../../components/Notification/NotifBadge';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AcitivityLog() {
  const [expanded, setExpanded] = React.useState("");
  const [report, setReport] = useState([])
  const [request, setRequest] = useState([])
const dispatch = useDispatch();
const navigate = useNavigate()
const getData = async () => {
    try {
        const res = await axios.get("https://barangay-talon-uno.vercel.app/log")

        console.log("data: ", res.data.reqlog.filter( (i) => i.email === localStorage.getItem("email") ) );
        console.log("data: ", res.data.replog.filter( (i) => i.email === localStorage.getItem("email") ) );
        setRequest( res.data.reqlog.filter( (i) => i.email === localStorage.getItem("email") )  );
        setReport(res.data.replog.filter( (i) => i.email === localStorage.getItem("email") ))
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {

  getData();

    if( localStorage.getItem("T") !== null ) {
      dispatch(login(true))
        console.log("fetched")
    } else {
        console.log("loggedout");
    }


}, []);

   useEffect(() => {
       if (localStorage.getItem("T") !== null) {
           // let token = localStorage.getItem("T");
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
//moved box up to container
  return (
  <>
  <VerticalTabs/>
  <Container>
    {/* <BasicTimeline/> */}
  </Container>
    <Box sx={{p:3, mr:10}} alignItems="flex-start" >
      <Container alignItems="center">
       <Paper elevation={6} sx={{p:2}}>
        <Typography variant='h5' sx={{ml:5}}> Activity Log</Typography>
        <Typography variant='body2' sx={{ml:5}}> View your recent activities</Typography>
        <Stack
        direction={{sm:"column",md:"row"}}
        justifyContent="center"
        alignItems="center"
        spacing={0.5}
        flexWrap="wrap"
        mt={2}
        >
       
      <Button variant="contained" onClick={() => navigate('/viewreports')}to="/viewreports">View Reports</Button>
      <Button variant="contained" onClick={() => navigate('/viewrequest')}to="/viewrequests">View Requests</Button>
      {/* <Button variant="contained" onClick={() => navigate('/viewblotter')}to="/viewblotter">View Blotters</Button> */}
    
</Stack>
       </Paper>
       
      </Container>
    </Box>
  {/* <Box bgcolor="#f2f4fb" sx={{ flexGrow: 1, p:5,  }} alignItems="flex-start">
    <Container sx={{mt:2}} >
    
   
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems="flex-start ">
        <Grid item xs="auto">
        
      { request.map( (user,index) => (
        <>
        <Typography variant="h6" color="black">
          Email: {user.email}
        </Typography>
        {
            user.request.map((req, index) => (
<Card sx={{ maxWidth: 345,mt:5 }} key={index}>

<ExpandMore
    expand={true}
   
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </ExpandMore>
<Collapse in={true} timeout="auto" unmountOnExit>

<CardContent>
  
  <Typography variant="body2" color="text.secondary">
    Name: {req.name}
  </Typography>
</CardContent>

<CardContent>
  <Typography variant="body2" color="text.secondary">
    Address: {req.address}
  </Typography>
</CardContent>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    Status:{req.phone}
  </Typography>
</CardContent>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    Report Type: {req.type}
  </Typography>
</CardContent>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    Purpose:{req.purpose}
  </Typography>
</CardContent>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    Status:{req.process}
  </Typography>
</CardContent>
</Collapse>


</Card>

            ))
        }
        </>
))
        
}       

             
     
     
      </Grid>
      </Grid>
      
    </Container>
    </Box>
    
    <Divider/> */}
    
    </>
  );
}
