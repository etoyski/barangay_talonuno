import { Container, CssBaseline, Divider, Grid, Modal, Paper, Popover, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import captain from '../../assets/captain.jpg'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

import kgwd1 from '../../assets/eric.jpg';
import kgwd2 from '../../assets/george.jpg';
import kgwd3 from '../../assets/lester.jpg';
import kgwd4 from '../../assets/ricardo.jpg';
import kgwd5 from '../../assets/romel.jpg';
import kgwd6 from '../../assets/romy.jpg';
import kgwd7 from '../../assets/tony.jpg';
import sk from '../../assets/sk.jpg';
import treasurer from '../../assets/flor.jpg';
import secre from '../../assets/domingo.jpg';
import VerticalTabs from '../../components/Tabs/Tabs';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#0a0b0d' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const About = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isloggedin, setisloggedin] = useState(false);
    const navigate = useNavigate();

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);

    useEffect(()=> {
      if (localStorage.getItem ('T')){
          setisloggedin (true);
      }
  }, [navigate] ) 
  return (
    <React.Fragment>
    {isloggedin ? <VerticalTabs /> : ''}
    
    <Box sx={{ flexGrow: 1, p:3}}>
        <Container maxWidth="md">
        <Fade right>
        <Typography color="primary" align='left' variant="string" component="h3">
        Talon Uno is a barangay in the city of Las Piñas. Its population as determined by the 2020 Census was 42,505. 
        This represented 7.01% of the total population of Las Piñas.
        </Typography>
        </Fade>
        </Container>
        <Divider/>
        <Typography align='center' variant="h3" component="h3">
                    Barangay officials
        </Typography>
        
    <Grid sx={{marginRight: 1, p: 1 }}  container spacing={3}>
      <Grid item xs="auto">
      <Slide up>
        <Item>
    <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
        <div className='border py-8 rounded-xl shadow-xl' >         
            <img width={300} height={300}  src={captain} alt="" />
        <Typography    gutterBottom variant="subtitle1" component="div">Hon. Emiliano B. Ramos</Typography>
            <Typography variant="body2" color="text.secondary">Barangay Captain</Typography>
            </div>
        </div>
     </Item>
    </Slide>
 </Grid>
   
      <Grid item xs="auto">
      <Slide down>
        <Item aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}> 
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img width={300} height={300} src={kgwd1} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Eric R. Gonzales</Typography>
            <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
          <Typography sx={{ p: 1 }}>Barangay Kagawad</Typography>
      </Popover>
            <Typography variant="body2" color="text.secondary">Barangay Kagawad</Typography>
            </div>
        </div>
    </Item>
    </Slide>
</Grid>

      <Grid item xs="auto">
      <Slide up>
        <Item aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
             <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img width={300} height={300} src={kgwd2} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. George N. Zuñiga</Typography>
            <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
          <Typography sx={{ p: 1 }}>Barangay Kagawad</Typography>
      </Popover>
            <Typography variant="body2" color="text.secondary">Barangay Kagawad</Typography>
            </div>
        </div>
    </Item>
    </Slide>
</Grid>


      <Grid item xs="auto">
      <Slide down>
        <Item  aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}> 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img width={300} height={300} src={kgwd3} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Lester G. Aranda</Typography>
            <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
          <Typography sx={{ p: 1 }}>Barangay Kagawad</Typography>
      </Popover>
            <Typography variant="body2" color="text.secondary">Barangay Kagawad</Typography>
            </div>
            </div>
        </Item>
        </Slide>
      </Grid>
      <Grid item xs="auto">
        <Item 
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
       > 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img width={300} height={300} src={kgwd4} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Ricardo P. Lucena</Typography>
            <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
          <Typography sx={{ p: 1 }}>Barangay Kagawad</Typography>
      </Popover>
            <Typography variant="body2" color="text.secondary">Barangay Kagawad</Typography>
            </div>
            </div>
            </Item>
        </Grid>
        <Grid item xs="auto">
        <Item 
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
       > 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img width={300} height={300} src={kgwd5} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Romel C. Serafico</Typography>
            <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
          <Typography sx={{ p: 1 }}>Barangay Kagawad</Typography>
      </Popover>
            <Typography variant="body2" color="text.secondary">Barangay Kagawad</Typography>
            </div>
            </div>
            </Item>
        </Grid>
        <Grid item xs="auto" alignItems="center" justifyContent="center">
        <Item 
        
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
       > 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img width={300} height={300} src={kgwd6} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Remegio B. Clavecillas</Typography>
            <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
          <Typography sx={{ p: 1 }}>Barangay Kagawad</Typography>
      </Popover>
            <Typography variant="body2" color="text.secondary">Barangay Kagawad</Typography>
            </div>
            </div>
            </Item>
        </Grid>
        <Grid item xs="auto">
        <Item 
        
       > 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img width={300} height={300}  src={kgwd7} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Antonio B. Ramos</Typography>
            
            <Typography variant="body2" color="text.secondary">Barangay Kagawad</Typography>
            </div>
            </div>
            </Item>
        </Grid>
    </Grid>
    <Grid sx={{marginRight: 0.5, p: 1 }}  container spacing={3}>
        
        
        <Grid item xs="auto" alignItems="center" justifyContent="center">
        <Item 
       > 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img width={300} height={300} src={treasurer} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Ms. Florida A. Feliciano</Typography>
            
            <Typography variant="body2" color="text.secondary">Barangay Treasurer</Typography>
            </div>
            </div>
            </Item>
        </Grid>
        <Grid item xs="auto" alignItems="center" justifyContent="center">
        <Item 
 
       
       > 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img width={300} height={300} src={sk} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Arren D. Torio</Typography>
            
            <Typography variant="body2" color="text.secondary">SK Chairman</Typography>
            </div>
            </div>
            </Item>
        </Grid>
        <Grid item xs="auto" alignItems="center" justifyContent="center">
        <Item 
 
       
       > 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img width={300} height={300} src={secre} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Domingo S. Plomates Jr.</Typography>
            
            <Typography variant="body2" color="text.secondary">Barangay Secretary</Typography>
            </div>
            </div>
            </Item>
        </Grid>
      </Grid>


 </Box>
 </React.Fragment>   

    
    
  
    
  
  );
}

export default About