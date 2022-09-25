import { Box, Button, Container, Fade, Paper, Popper, Typography } from '@mui/material'
import React from 'react'
import VerticalTabs from '../../components/Tabs/Tabs'
import bball from '../../assets/bball.jpg'
import { useState } from 'react'
import { useSelector } from 'react-redux';

export default function  Mainpage  ()  {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const useri = useSelector( ({ user }) => user)
 
  console.log(useri);
  const [user, setUser] = useState();
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
            Welcome {localStorage.getItem("user")} 
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
            <img width={200} height={200} src={bball} alt="" />
            </Box>
            
      </Container>
     
       </React.Fragment>
    
  )
}

