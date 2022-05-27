import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import CampaignIcon from '@mui/icons-material/Campaign';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import HomeIcon from '@mui/icons-material/Home';
function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" >
        <LinkTab icon={<HomeIcon />} iconPosition="start" label=""onClick={() => navigate('/mainpage')}to="/mainpage" />
        <LinkTab icon={<CampaignIcon />} iconPosition="start" label="Report" onClick={() => navigate('/report')}to="/report" />
        <LinkTab icon={<RequestPageIcon />} iconPosition="start" label="Request"  onClick={() => navigate('/request')}to="/request" />
      </Tabs>
    </Box>
  );
}