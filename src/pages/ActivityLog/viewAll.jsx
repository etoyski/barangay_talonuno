import { Button, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import VerticalTabs from '../../components/Tabs/Tabs'
import { login } from '../../redux/userSlice'

const ViewReport = () => {
    const isloggedin = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();
    //const [isloggedin, setisloggedin] = useState(false);
   const navigate = useNavigate();

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
 <Container maxwidth="xl" alignItems="flex-start">
      <Paper sx={{width:1000, height:500}} elevation={2}>
      <Typography variant="h4"> Activity Log</Typography>
  
  <Box sx={{width:250, mb:3,mt:2,ml:4}} >
      <Grid>
      <Paper elevation={5}>
      <CardContent>
<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  Word of the Day
</Typography>
<Typography variant="h5" component="div">
 d
</Typography>
<Typography sx={{ mb: 1.5 }} color="text.secondary">
  adjective
</Typography>
<Typography variant="body2">
  well meaning and kindly.
  <br />
  {'"a benevolent smile"'}
</Typography>
</CardContent>
<CardActions>
<Button size="small">Learn More</Button>
</CardActions>
      </Paper>
      </Grid>

  </Box>
  <Box sx={{width:250, mb:5,mt:2,ml:4}} >
      <Grid>
      <Paper elevation={5}>
      <CardContent>
<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  Word of the Day
</Typography>
<Typography variant="h5" component="div">
 d
</Typography>
<Typography sx={{ mb: 1.5 }} color="text.secondary">
  adjective
</Typography>
<Typography variant="body2">
  well meaning and kindly.
  <br />
  {'"a benevolent smile"'}
</Typography>
</CardContent>
<CardActions>
<Button size="small">Learn More</Button>
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