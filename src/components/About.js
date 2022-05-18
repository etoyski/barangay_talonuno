import { Container, CssBaseline, Divider, Grid, Modal, Paper, Popover, Typography } from '@mui/material';
import React from 'react'
import loginImg from '../assets/bron.jpg'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';

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

    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  return (
    
    
    <Box sx={{ flexGrow: 1, p:10,  backgroundColor: 'primary.dark',
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },}}>
        <Container maxWidth="md">
        <Typography color="primary" align='left' variant="string" component="h3">
        Talon Uno is a barangay in the city of Las Piñas. Its population as determined by the 2020 Census was 42,505. 
        This represented 7.01% of the total population of Las Piñas.
        </Typography>
        
        </Container>
        <Divider/>
        <Typography align='center' variant="h3" component="h3">
                    Barangay officials
        </Typography>
        
    <Grid sx={{marginLeft: 5, p: 1 }}  container spacing={3}>
      <Grid item xs="auto">
        <Item>
    <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
        <div className='border py-8 rounded-xl shadow-xl' >
            <img className='h-72 w-96 object-none' src={loginImg} alt="" />
        <Typography    gutterBottom variant="subtitle1" component="div">Hon. Emiliano B. Ramos</Typography>
    
            <Typography variant="body2" color="text.secondary">Barangay Captain</Typography>
            </div>
        </div>
    </Item>
    
 </Grid>



      <Grid item xs="auto">
        <Item aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}> 
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img className='h-72 w-96 object-none' src={loginImg} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Antonio B. Ramos</Typography>
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
        <Item aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
             <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img className='h-72 w-96 object-none' src={loginImg} alt="" />
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
</Grid>


      <Grid item xs="auto">
        <Item  aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}> 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img className='h-72 w-96 object-none' src={loginImg} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Romel Serafico</Typography>
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
            <img className='h-72 w-96 object-none' src={loginImg} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Lester Aranda</Typography>
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
            <img className='h-72 w-96 object-none' src={loginImg} alt="" />
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
        <Grid item xs="auto" alignItems="center" justifyContent="center">
        <Item 
        
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
       > 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img className='h-72 w-96 object-none' src={loginImg} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Heorge N. Zuñiga</Typography>
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
    </Grid>
    <Grid sx={{marginLeft: 5, p: 1 }}  container spacing={3}>
        
        <Grid item xs="auto">
        <Item 
        
       > 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img className='h-72 w-96 object-none' src={loginImg} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. </Typography>
            
            <Typography variant="body2" color="text.secondary">Barangay Secretary</Typography>
            </div>
            </div>
            </Item>
        </Grid>

        <Grid item xs="auto" alignItems="center" justifyContent="center">
        <Item 
 
       
       > 
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 rounded-xl shadow-xl' >
            <img className='h-72 w-96 object-none' src={loginImg} alt="" />
            <Typography gutterBottom variant="subtitle1" component="div">Hon. Heorge N. Zuñiga</Typography>
            
            <Typography variant="body2" color="text.secondary">Barangay Treasurer</Typography>
            </div>
            </div>
            </Item>
        </Grid>
      </Grid>


 </Box>
    

    
    
  
    
  
  );
}

export default About