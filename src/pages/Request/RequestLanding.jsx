import { Box, Button, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import VerticalTabs from '../../components/Tabs/Tabs'
import Services from '../Services/Services'
import SplitButton from './TypesButton'


const RequestLanding = () => {
  const navigate = useNavigate();
  return (
    <>
    
  
      <VerticalTabs/>
  
    <Container maxWidth="lg">
       
         <Paper component={Box} p={3} alignItems="flex-start" sx={{flexGrow: 1, mb:5,mt:3,height:200}}>
            <Typography variant='h5'>  </Typography>
            <br/> <br/>
            <Box alignItems="center" >
            <Button variant='outlined' fullWidth onClick={() => navigate('/form=barangayform')}to="/form=barangayform" > Request A Document  </Button>
            </Box>
           
        </Paper>
    </Container>
    </> 
  )
}

export default RequestLanding