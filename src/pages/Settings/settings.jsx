import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container, createTheme } from '@mui/system';
import { Button, ButtonBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();
export default function GeneralSettings() {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        
        <Container sx={{mt:4,mb:13}}>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Edit user information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="outlined" color='secondary' onClick={() => navigate('/edit-user-profile')}>
           Go to user Profile
          </Button>
        </AccordionDetails>
      </Accordion>
      
      
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Deactivate Account</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button variant="outlined" color="error"  >
            Deactivate account
          </Button>
        </AccordionDetails>
      </Accordion>              
      </Container>
    </div>
  );
}