import { LoadingButton } from '@mui/lab';
import { Autocomplete, Card, CardContent, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react';


const options = ['Barangay ID', 'Barangay Clearance', 'Barangay ID'];

const RequestType = () => {
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState(false); 

    const [inputValue, setInputValue] = React.useState('');
    const [value, setValue] = React.useState(options[0]);
    const handleSubmit = (e) => {
        e.preventDefault();
       
      
  
  };
  return (
    <Container maxWidth="xl">
    <Grid component={Paper} elevation={16} sx={{p:2}}>
      
    <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Card style={{ maxWidth: 1500, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
          <Typography color='red'> Choose the type of document you want to request</Typography>
          <br/>
         <Grid container spacing={1} alignItems="center" justify="center"  >
           
          
          <Grid xs={6} >
                 
                <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{  width:200 }}
        renderInput={(params) => <TextField {...params} label="Request Type" />}
      />

            </Grid>
            
            {/* <Grid item xs={12} sm={6}>
                <LoadingButton 
             loading = {loading}
              type="submit"
              sx={{ mt: 3, mb: 2}}
              variant="contained"
              fullWidth
              color='secondary'
              >
            Previous
          </LoadingButton>
                </Grid>
            <Grid item xs={12} sm={6}>
                <LoadingButton 
             loading = {loading}
              type="submit"
              sx={{mt: 3, mb: 2}}
              variant="contained"
              fullWidth
              >
            Next
          </LoadingButton>
                </Grid>*/}
      </Grid> 
        
    </CardContent>
 </Card>
</Box>
 </Grid>
 </Container>
  )
}

export default RequestType