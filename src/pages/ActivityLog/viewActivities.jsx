import { Button, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import VerticalTabs from '../../components/Tabs/Tabs'
import { login } from '../../redux/userSlice'

function ViewReport() {
    const isloggedin = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    //const [isloggedin, setisloggedin] = useState(false);
   const navigate = useNavigate();
   const [post, setPost] = useState(""
   )
  const getData = () => {
    axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(res => {
      console.log(res.data)
      setPost(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
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
  return (
   <>
       <VerticalTabs/>
       <Button onClick={getData}> click</Button>
 <Container maxwidth="xl" alignItems="flex-start">
     <Paper sx={{width:1000, height:500}} elevation={2}>
      <Typography variant="h4"> Activity Log</Typography>
  
  <Box sx={{width:250, mb:3,mt:2,ml:4}} >
      <Grid>
      <Paper elevation={5}>
      <CardContent>
<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom textTransform="capitalize">
 {sessionStorage.getItem('user')}
</Typography>
<Typography variant="h5" component="div">
  
</Typography>
{post ?<Typography sx={{ mb: 1.5 }} color="text.secondary">
{post.id} 
</Typography> : ""}
<Typography variant="body2">
  well meaning and kindly.
  <br />
  {'"a benevolent smile"'}
</Typography>
</CardContent>
<CardActions>
{/* <Button size="small">Learn More</Button> */}
</CardActions>
      </Paper>
      </Grid>

  </Box>
  
      </Paper>
  
   
    </Container>
   </>
   
  )
}

export default ViewReport