import React from 'react'

const otp = () => {
  return (
    <Container maxWidth="sm" component="main">
    <Box>
        <Paper>
        <Dialog component="form"  onSubmit={handleSubmitOTP} open={open} onClose={handleClose}>
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
        </Paper>
    </Box>
   
    
  
</Container>
  )
}

export default otp