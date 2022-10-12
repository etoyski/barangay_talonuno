import { Box, CardContent, Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConfirmEmail = () => {
  
  return (
    <React.Fragment>
      <Box bgcolor="#f2f4fb" mt={0} pb={5} height="50vh">
      <Container  maxWidth="md" sx={{ mt: 5, bgcolor:"#f2f4fb"}} align-items="center">
        <Grid display="flex" justifyContent="center" alignItems="center">
        <Paper sx={{width:500,mr:5, }} mt={2}>
        <CardContent>
      <Typography sx={{ fontSize: 20 }} color="black" gutterBottom>
       <b>Account Confirmation </b> 
      </Typography>
     
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        A confirmation email has been sent to your email, for you to be able to proceed to the website
      </Typography>
      
    </CardContent>
            </Paper>
        </Grid>
            
        </Container>
      </Box>

       
    </React.Fragment>
  )
}

export default ConfirmEmail