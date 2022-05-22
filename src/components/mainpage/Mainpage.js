import { Box, Button, Container, Fade, Paper, Popper, Typography } from '@mui/material'
import React from 'react'
import VerticalTabs from '../Tabs/Tabs'
import bball from '../../assets/bball.jpg'
import { useState } from 'react'

export default function  Mainpage  ()  {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (

   <React.Fragment>
       <VerticalTabs />
       <Container fixed>
        <Box sx={{ p:2, height: '18vh' }} >
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
            Welcome to Barangay Talon Uno Digital Reporting System!
        </Typography>
        </Paper>
        
        
            </Box>
      </Container>
      <Container fixed sx={{p:1}}>
        <Box sx={{ p:3, marginTop:10,marginRight:2,marginLeft:2, height: '50vh' }} 
        
        >
            <Typography variant="h6">
               Announcement:
            </Typography>
            <div>
      <Button sx={{marginLeft:15,marginBottom:1}}aria-describedby={id} variant="outlined" type="button" onClick={handleClick}>
        View Announcement
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{  p: 1, bgcolor: 'background.paper' }}>
            <img width={500} height={350} src={bball} alt="" />
            </Box>
          </Fade>
        )}
      </Popper>
      <Button sx={{marginLeft:15,marginBottom:1}} aria-describedby={id} variant="outlined" type="button" onClick={handleClick} >
      View Announcement
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{  p: 1, bgcolor: 'background.paper' }}>
            <img width={500} height={350} src={bball} alt="" />
            </Box>
          </Fade>
        )}
      </Popper>
      <Button sx={{marginLeft:15,marginBottom:1}} aria-describedby={id} variant="outlined" type="button" onClick={handleClick} >
      View Announcement
      </Button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{  p: 1, bgcolor: 'background.paper' }}>
            <img width={500} height={350} src={bball} alt="" />
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
    
      
            </Box>
            
      </Container>
     
       </React.Fragment>
    
  )
}

