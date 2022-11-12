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
import {Typography, Paper, Grid, Stack, Divider, Button} from '@mui/material';
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
import AcitivityLog from './viewActivities';
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

export default function ViewReports() {
  const [expanded, setExpanded] = React.useState("");
  const [report, setReport] = useState([])
  const [request, setRequest] = useState([])
  const [statuss, setStatuss] = useState('')
const dispatch = useDispatch();
const navigate = useNavigate()
const getData = async () => {
    try {
        const res = await axios.get("https://barangay-talon-uno.vercel.app/log",  {
          headers:
          {
           "Authorization": "Bearer " + `${localStorage.getItem('T')}`  
          }
        })

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
// const handleFilter = async (status) => {
 
//  return await axios
//  .get(`https://barangay-talon-uno.vercel.app/log?process=${status}`)
//  .then((response) => {

//   setReport(response.data.replog.filter( (i) => i.email === localStorage.getItem("email") ))
//   setStatus(response.data);

//  })
//  .catch((err) => console.log(err));
// }
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
const handleFilter = async () => {
  setStatuss('')
}
//moved box up to container
  return (
  <>
  <AcitivityLog/>
  <Box bgcolor="#f2f4fb" sx={{ flexGrow: 1, p:2,  }} alignItems="flex-start">
    <Container sx={{mt:2}} maxWidth="lg" >
    <Typography variant='h6' textTransform="capitalize">Showing All Report of <b>{sessionStorage.getItem("user")} </b></Typography>
      <Divider/>
      <Typography> Filter Status By: </Typography>
      <Stack direction="row" spacing={1}>
      <Button variant="contained" color="error" onClick={() => setStatuss("Cancelled")}>
        Cancelled
      </Button>
      <Button variant="contained" color="warning" onClick={() => setStatuss("Pending")}>
        Pending
      </Button>
      <Button variant="contained" color="success" onClick={() => setStatuss("Success")}>
        Success
      </Button>
      <Button variant="contained" color="primary" onClick={() => setStatuss("")}>
        Show All
      </Button>
    </Stack>
      <Grid
        container
        spacing={2}
        sx={{
         pl:4,
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        
        
      { report.map( (user,index) => (
        <>
          
        {/* <Typography variant="h6" color="black">
          Email: {user.email}
        </Typography> */}
        {
            user.reports.filter((item) => { return statuss === '' ? item : item.process.includes(statuss);}).map((rep, index) => (
           
<Card sx={{ maxWidth: 300,mt:5 }} key={index}>

<ExpandMore
    expand={true}
   
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </ExpandMore>
<Collapse in={true} timeout="auto" unmountOnExit>
<CardContent>
  
  <Typography variant="body2" color="text.secondary">
    Time Stamp: {rep.ReportTime}
  </Typography>
</CardContent>
<CardContent>
  
  <Typography variant="body2" color="text.secondary">
    Name: {rep.name}
  </Typography>
</CardContent>

<CardContent>
  <Typography variant="body2" color="text.secondary">
    Address: {rep.address}
  </Typography>
</CardContent>
<CardContent>
       <Typography variant="body2" color="text.secondary">
         Address: {rep.addressdetail}
       </Typography>
     </CardContent>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    Report Type: {rep.report}
  </Typography>
</CardContent>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    Status:{rep.process}
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
      
     
     
    
      
    </Container>
    </Box>
    
    <Divider/>
    
    </>
  );
}
