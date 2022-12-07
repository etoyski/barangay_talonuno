// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import {Typography, Paper, Grid, Stack, Divider, Button} from '@mui/material';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import PendingActionsIcon from '@mui/icons-material/PendingActions';
// import CancelIcon from '@mui/icons-material/Cancel';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {login} from '../../redux/userSlice'
// import { useNavigate } from 'react-router-dom';
// import VerticalTabs from '../../components/Tabs/Tabs';
// import AcitivityLog from './viewActivities';
// import moment from 'moment';
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function Sample() {
//   const [expanded, setExpanded] = React.useState("");
//  // const [report, setReport] = useState([])
//   const [blotter, setBlotter] = useState([])
//   const [statuss, setStatuss] = useState('')
//   const [sort,setSort] = useState([])
  

//   const [blotsort,setBlotsort] = useState(false)
// const dispatch = useDispatch();
// const navigate = useNavigate()
// const getData = async () => {
//     try {
//         const res = await axios.get("https://barangay-talon-uno.vercel.app/log",  {
//           headers:
//           {
//            "Authorization": "Bearer " + `${localStorage.getItem('T')}`  
//           }
//         })

//         console.log("data: ", res.data.reqlog.filter( (i) => i.email === localStorage.getItem("email") ) );
//         console.log("data: ", res.data.replog.filter( (i) => i.email === localStorage.getItem("email") ) );
//         // setRequest( res.data.reqlog.filter( (i) => i.email === localStorage.getItem("email") )  );
//         // setReport(res.data.replog.filter( (i) => i.email === localStorage.getItem("email") ))
//         setBlotter(res.data.blotlog.filter( (i) => i.email === localStorage.getItem("email")) )
//         setSort(res.data.sortreport.filter( (i) => i.email === localStorage.getItem("email")))
//         console.log("blotter",res.data.blotlog)
//     } catch (error) {
//         console.log(error);
//     }
// }

// useEffect(() => {

//   getData();

//     if( localStorage.getItem("T") !== null ) {
//       dispatch(login(true))
//         console.log("fetched")
//     } else {
//         console.log("loggedout");
//     }


// }, []);

//    useEffect(() => {
//        if (localStorage.getItem("T") !== null) {
//            // let token = localStorage.getItem("T");
//            dispatch(login(true))
//            // validateToken(token) = value true or false
//            //    setisloggedin(validateToken(token));

//            //let email = localStorage.getItem("email");
//            //validateToken({ token, email, navigate });
//            // setisloggedin(validateToken({ token, email, navigate }));
//             //setisloggedin(true);
//        }else {
//            dispatch(login(false))
//            //setisloggedin(false)
//        }
//    }, [navigate]);
// //moved box up to container
//   return (
//   <>
//   <AcitivityLog/>
//   <Box bgcolor="#f2f4fb" sx={{ flexGrow: 1, p:5,  }} alignItems="flex-start">
//     <Container sx={{mt:2}} maxWidth="lg">
//       <Typography variant='h6' textTransform="capitalize">Showing All Request of <b>{sessionStorage.getItem("user")} </b></Typography>
//       <Divider/>
//       <Typography> Filter Status By: </Typography>
//       <Stack direction="row" spacing={1}>
//       <Button variant="contained" color="error" onClick={() => setStatuss("Cancelled")}>
//         Cancelled
//       </Button>
//       <Button variant="contained" color="warning" onClick={() => setStatuss("Pending")}>
//         Pending
//       </Button>
//       <Button variant="contained" color="success" onClick={() => setStatuss("Success")}>
//         Success
//       </Button>
//       <Button variant="contained" color="primary" onClick={() => setStatuss("")}>
//         Show All
//       </Button>

//       <Button variant="contained" color="primary" onClick={() =>setBlotsort(!blotsort)}>
//       {blotsort  ? "Newest-Oldest" : "Oldest-Newest"}
//       </Button>
//     </Stack>
//     <Box sx={{ flexGrow: 1, p:5,  }} alignItems="flex-start">
//       <Grid
//         container spacing={{ xs: 5, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems="flex-start "
//       >
//         <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody></TableBody>
//       { blotter.map( (user,index) => (
//         <>
//         <Typography variant="h6" color="black">
//           {/* Email: {user.email} */}
//         </Typography>
        
//         {
//             user.blotter.filter((item) => { return statuss === '' ? item : item.process.includes(statuss);}).sort(
//               (a, b) =>
//               blotsort ?   new moment(b.RequestTime).format("YYYYMMDD") - new moment(a.RequestTime).format("YYYYMMDD") :  
//               new moment(a.RequestTime).format("YYYYMMDD") - new moment(b.RequestTime).format("YYYYMMDD")

              
//             )
//             .map((blot, index) => (
// <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >

// <ExpandMore
//     expand={true}
   
//     aria-label="show more"
//   >
//     <ExpandMoreIcon />
//   </ExpandMore>
// <Collapse in={true} timeout="auto" unmountOnExit>
// <CardContent>
  
//   <Typography variant="body2" color="text.secondary">
//     TimeStamp: {moment(blot.RequestTime).format('LLLL')}
//   </Typography>
// </CardContent>

// <CardContent>
//   <Typography variant="body2" color="text.secondary">
//   Name of complainant: {blot.complainant}
//   </Typography>
// </CardContent>

//  <CardContent>
//   <Typography variant="body2" color="text.secondary">
//   Address: {blot.address}
//   </Typography>
// </CardContent>
// <CardContent>
//   <Typography variant="body2" color="text.secondary">
//   Contact No: {blot.contact}
//   </Typography>
// </CardContent> 
// <Divider/> 

// <Typography> Details of Person to be blottered</Typography>
//  <CardContent>
//   <Typography variant="body2" color="text.secondary">
//   Firstname: {blot.complainedFirstname}
//   </Typography>
// </CardContent>
// <CardContent>
//   <Typography variant="body2" color="text.secondary">
//   Middlename: {blot.complainedMiddlename}
//   </Typography>
// </CardContent>
// <CardContent>
//   <Typography variant="body2" color="text.secondary">
//   Lastname: {blot.complainedLastname}
//   </Typography>
// </CardContent>
// <CardContent>
//   <Typography variant="body2" color="text.secondary">
//   Address: {blot.complainedAddress}
//   </Typography>
// </CardContent>
// <CardContent>
//   <Typography variant="body2" color="text.secondary">
//   Age: {blot.complainedAge}
//   </Typography>
// </CardContent>
// <br/>
// <Divider/>
// <CardContent>
//   <Typography variant="body2" color="text.secondary">
//   Description: {blot.description}
//   </Typography>
// </CardContent>
// <Divider/>
// <CardContent>
//   <Typography variant="body2" color="text.secondary">
//   Status: {blot.process}
//   </Typography>
// </CardContent>
// </Collapse>


// </Card>

//             ))
//         }
//         </>
// ))
        
// }       

             
     
     
//       </Grid>
//       </Box>
//     </Container>
//     </Box>
    
//     <Divider/>
    
//     </>
//   );
// }
