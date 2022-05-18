import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import VerticalTabs from '../Tabs/Tabs'

const mainpage = () => {
  return (
      
   <React.Fragment>
       <VerticalTabs />
       <Container fixed>
        <Box sx={{ p:2,bgcolor: '#999999', height: '18vh' }} >
        <Paper
      sx={{
        p: 5,
        textAlign:'center',
        margin: 'auto',
        maxWidth: 800,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
        <Typography variant="h5" gutterBottom component="div">
            Welcome
        </Typography>
        </Paper>
        
        
            </Box>
      </Container>
      <Container fixed sx={{p:1}}>
        <Box sx={{ bgcolor: '#4444', height: '40vh' }} >
            <Typography>
                Main Page Draft
            </Typography>
            </Box>
      </Container>
       </React.Fragment>
    
  )
}

export default mainpage