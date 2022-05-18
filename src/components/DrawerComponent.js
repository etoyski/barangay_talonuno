import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const pages =["home","about","services","contactus","login","signup"];
const drawerWidth = 250;
const DrawerComponent = () => {
    const [openDrawer,setopenDrawer] = useState(false)
    const navigate = useNavigate();
    const handleDrawer = () => {
        setopenDrawer(false)
        navigate("/home")
        navigate("/about")
        navigate("/services")
        navigate("/contactus")
        navigate("/login")
        navigate("/signup")
    }
  return (
      <React.Fragment>
          <Drawer open={openDrawer}
          onClose={handleDrawer }
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          >
            <List >
                {
                   pages.map((page,index) => (
                    <ListItemButton onClick={() => {
                        setopenDrawer(false)
                        navigate(`/${page}`)

                    } } key={index}>
                    <ListItemIcon>
                        <ListItemText sx={{textTransform: 'capitalize'}}>
                            {page}
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                   )) 
                }
               
            </List>

          </Drawer>
            <IconButton sx={{color:'grey',marginLeft:'auto' }} onClick={()=>setopenDrawer(!openDrawer) }>
                <MenuIcon />
            </IconButton>
      </React.Fragment>  
  );
};

export default DrawerComponent