import { Avatar, Box, Container, Divider, IconButton, ListItemIcon, Menu, MenuItem, Tab, Tabs, Tooltip, Typography } from '@mui/material'
import React from 'react'
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import VerticalTabs from '../Tabs/Tabs';
import ControlledOpenSpeedDial from '../Speeddial/Speeddial';

const Welcomepage = () => {
 
  
  return (
    <React.Fragment>
      <VerticalTabs />
      <Container fixed>
        
      
      <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    ></Box>
      </Container>
    </React.Fragment>
      

  
 
  )
}

export default Welcomepage