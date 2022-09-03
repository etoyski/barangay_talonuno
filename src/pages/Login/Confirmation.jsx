import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from '@mui/material';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function OTP() {
  const [open, setOpen] = React.useState(false);
  const {otp, setOtp} = useState("")
  const navigate = useNavigate();




  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if ( otp != null) {
        console.log("Enter OTP")
    }else if (otp !== otp){
        console.log("Invalid OTP")
    }else{
        console.log("OTP Verified")
        navigate('/mainpage');
    }
  };
  return (
  
    <div>
    <Container maxWidth="sm" component="main">
       
       
        <Dialog component="form"  onSubmit={handleSubmit} open={open} onClose={handleClose}>
        <DialogTitle>OTP</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To proceed to this website, please enter your OTP here. 
            Kindly check your email, or check into your spam folder.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="OTP"
            type="text"
            value={otp}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
      
    </Container>
    
    </div>
  );
}
