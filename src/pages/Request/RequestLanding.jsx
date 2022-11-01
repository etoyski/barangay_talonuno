import { Box, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import VerticalTabs from '../../components/Tabs/Tabs'
import Services from '../Services/Services'
import SplitButton from './TypesButton'


const RequestLanding = () => {
  return (
    <>
    
  
      <VerticalTabs/>
  
    <Container maxWidth="lg">
       
         <Paper component={Box} p={3} alignItems="flex-start" sx={{flexGrow: 1, mb:5,mt:3}}>
            <Typography variant='h5'> Available Documents: </Typography>
            <Box alignItems="center" >
            <SplitButton/>
            </Box>
           
        </Paper>
    </Container>
    </> 
  )
}

export default RequestLanding