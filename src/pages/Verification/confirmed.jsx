import { Button, CardContent, Grid, Paper, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ConfirmedEmail = () => {
    const navigate = useNavigate();
  return (
    <React.Fragment>
      <Box bgcolor="#f2f4fb" mt={0} pb={5} height="50vh">
      <Container  maxWidth="md" sx={{ mt: 5, bgcolor:"#f2f4fb"}} align-items="center">
        <Grid display="flex" justifyContent="center" alignItems="center">
        <Paper sx={{width:500,mr:5, }} mt={2}>
        <CardContent>
      <Typography sx={{ fontSize: 20 }} color="success" gutterBottom>
       <b>Account Verified! </b> 
      </Typography>
     
      <Button variant="outlined" color="success" onClick={() => navigate('/login')}to="/login"> Proceed to Login</Button>
      
    </CardContent>
            </Paper>
        </Grid>
            
        </Container>
      </Box>

       
    </React.Fragment>
  )
}

export default ConfirmedEmail