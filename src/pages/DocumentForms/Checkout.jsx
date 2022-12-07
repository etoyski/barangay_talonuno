import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Review from './Review';
import BarangayForm from './BarangayForm';
import RequestType from './RequestType';
import VerticalTabs from '../../components/Tabs/Tabs';
import { useState } from 'react';
import BarangayIDPreview from '../PagePreview/BarangayIDPreview';
import BarangayResidency from '../PagePreview/BarangayResidency';
import CertificateofIncome from '../PagePreview/CertificateOfIncome';
import CertificateofNoIncome from '../PagePreview/CertificateofNoIncome';
import CertificateofIndigency from '../PagePreview/Indigency';
import LateRegistration from '../PagePreview/LateRegistration';
import PostResidency from '../PagePreview/PostResidency';



const steps = ['Request details', 'Resident Information', 'Review your request', 'Preview'];

function getStepContent(step,setActiveStep,setFormdata,formdata,reqtype,setReqtype) {
  switch (step) {
    case 0:
      return <RequestType setActiveStep={setActiveStep} setFormdata={setFormdata} />;
   
    case 1:
      return <BarangayForm setActiveStep={setActiveStep} setFormdata={setFormdata} />;
    case 2:
      return <Review setActiveStep={setActiveStep} formdata={formdata} />;
      // case 3:
      //   {
      //     if (formdata.requesttype === "Barangay ID"){
      //       return <BarangayIDPreview setActiveStep={setActiveStep} formdata={formdata} />;
      //     }else if (formdata.requesttype == "Barangay Residency" ){
      //       return <BarangayResidency setActiveStep={setActiveStep} formdata={formdata}  />;
      //     }else if (formdata.requesttype == "Certificate of Income"){
      //       return <CertificateofIncome setActiveStep={setActiveStep} formdata={formdata}  />;
      //     }else if (formdata.requesttype == "Certificate of No Income" ){
      //       return <CertificateofNoIncome setActiveStep={setActiveStep} formdata={formdata}  />;
      //     }else if (formdata.requesttype == "Indigency"){
      //       return <CertificateofIndigency setActiveStep={setActiveStep} formdata={formdata}  />;
      //     }else if (formdata.requesttype == "Late Registration"){
      //       return <LateRegistration setActiveStep={setActiveStep} formdata={formdata}  />;
      //     }else if (formdata.requesttype == "Post Residency"){
      //       return <PostResidency setActiveStep={setActiveStep} formdata={formdata}  />;
      //     }
      //   }

        // if ( reqtype == "Barangay ID"){
        //   return <BarangayIDPreview setActiveStep={setActiveStep} formdata={formdata} />;
        // }else if( reqtype == "Barangay Residency"){
        //   return <BarangayResidency setActiveStep={setActiveStep} formdata={formdata}  />;
        // }
       
      case 3:
        return <Review setActiveStep={setActiveStep} formdata={formdata}/>;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [items, setItems] = useState([]);
  const [formdata, setFormdata] = useState(
    {
        brgyform: { }, 
        requesttype: '',

    }
  )
  const [reqtype, setReqtype] = useState(
    {
        
        requesttype: '',

    }
  )
  const handleNext = (e) => {
    setActiveStep(activeStep + 1);
   
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
};
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VerticalTabs/>
      <Container  maxWidth="xl" sx={{ mb: 4 }}>
      <Box sx={{ mt: 1,  }} display="flex"
  justifyContent="center"
  alignItems="center">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } , width:{xs:430, md:1000}}}>
        <Box 
        
        sx={{
        
        }}
        >
          <Typography component="h1" variant="h4" align="center">
            Request Documents
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {getStepContent(activeStep,setActiveStep,setFormdata,formdata,reqtype,setReqtype) }
          {/* {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Request Submitted
              </Typography>
              <Typography variant="subtitle1">
                 We have emailed your request
                confirmation, and will send you an update through email when your request has
                processed and ready to pick up.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, setActiveStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}  fullWidth>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  fullWidth
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )} */}
          </Box>
        </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

