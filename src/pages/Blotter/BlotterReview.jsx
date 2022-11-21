import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { Box, Card, CardContent, Container, Divider, Paper } from '@mui/material';


// brgydata: formdata.brgyform
// requesttype: formdata.requesttype

export default function BlotterReview({setActiveStep,formdata}) {
  const [loading, setLoading] = useState(false);
  console.log(formdata.blotterdescription.description)
  return (
    <>
    <Container maxWidth="xl">
    <Grid component={Paper} elevation={16} sx={{p:2}}>
    
    <Box component="form"  sx={{ mt: 1 }}>
        <Card style={{ maxWidth: 1500,height:800, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            
              <Typography gutterBottom variant="h5" >
           Blotter Details
          </Typography> 
            
         
              <Typography gutterBottom variant="body2" >
           
          </Typography> 
             
          
          <br/>
          
       

          <br/>
          <Divider/>
          <br/>
          <Grid container spacing={1}>
          <Grid item  xs={12} sm={6}>
          <Typography textTransform="capitalize"> 
             Complainant Name : {formdata.brgyform.name}
            
               </Typography>
          </Grid>
          <Grid item  xs={12} sm={6}>
            <Typography> 
              <Typography>Date:  {formdata.brgyform.date}</Typography>
                   </Typography>
           </Grid>
          <Grid item  xs={12} sm={6}>
            <Typography> 
              
              <Typography> Address : {formdata.brgyform.address}</Typography>
                
             
            </Typography>
          </Grid>
          <Grid item  xs={12} sm={6} >
            
              <Typography>Contact no: {formdata.brgyform.contactno}</Typography>
                     
                 
          </Grid>
                    {/* <Grid item  xs={12} sm={6}>
            <Typography> 
              
              <Typography>Province :  {formdata.brgyform.province}</Typography>
             
            </Typography>
          </Grid> */}
          {/* <Grid item  xs={12} sm={6}>
          
          <Typography>   vrr no.: {formdata.brgyform.vrr}</Typography>
               
             
      </Grid>
          <Grid item   xs={12} sm={6}>
            <Typography> 
             
              <Typography> City/Municipality : {formdata.brgyform.city}</Typography>
             
            </Typography>

          </Grid>
           <Grid item  xs={12} sm={6} >
         
          <Typography>  contact no. {formdata.brgyform.contactno}</Typography>
                
          </Grid> */}
          {/* <Grid item  xs={12} sm={6} >
            <Typography> 
             
              <Typography> Barangay : {formdata.brgyform.barangay}</Typography>
              
            </Typography>
          </Grid>
         
          </Grid>
          <br/>
          <Divider/>
          <br/>
              <Grid container spacing={1}>
                <Grid item    xs={12} sm={6}>
                  <Typography>Lastname: {formdata.brgyform.lastname}</Typography>
                 
                </Grid>
                
                <Grid  item   xs={12} sm={6} >
                <Typography> Firstname: {formdata.brgyform.firstname}</Typography>
             
              
                </Grid>
                
                <Grid  item    xs={12} sm={6} >
                <Typography>Middlename: {formdata.brgyform.middlename}</Typography>
             
              
                </Grid>
                <Grid  item  xs={12} sm={6} >
                <Typography>Nickname: {formdata.brgyform.nickname}</Typography>
              
              
                </Grid>
                <Grid  item  xs={12} sm={6} >
                <Typography>Age: {formdata.brgyform.age}</Typography>
            
              
                </Grid>
                <Grid item xs={12} sm={6} >
                <Typography>Gender: {formdata.brgyform.value}</Typography>
      
                </Grid>
                <Grid  item   xs={12} sm={6} >
                <Typography>Date of birth: {formdata.brgyform.dob}</Typography>
              
               
             
              
                </Grid>
                <Grid item  xs={12} sm={6} >
                <Typography>Status: {formdata.brgyform.value2}</Typography>
     
                </Grid>
                <Grid  item  xs={12} sm={6}>
                <Typography>Place of birth: {formdata.brgyform.birthplace}</Typography>
           
               
             
              
                </Grid>
                <Grid item  xs={12} sm={6}>
                  <Typography>Height: {formdata.brgyform.height} cm</Typography>
                   
                  
                 
                </Grid>
                <Grid item  xs={12} sm={6}>
                  <Typography>Weight: {formdata.brgyform.weight} kg</Typography>
             
                 
                </Grid>
                <Grid  item   xs={12} sm={6} >
                <Typography>Present Address{formdata.brgyform.presentaddress}</Typography>
              
               
              
              
                </Grid>
                
                <Grid  item   xs={12} sm={6}>
                <Typography>Provincial Address: {formdata.brgyform.provincialaddress}</Typography>
               
             
              
                </Grid> */}
              
                </Grid>
                <br/>
                <Divider sx={{borderBottomWidth: 10}}/>
                <Grid container spacing={1}>
                <Grid  item   xs={12}  >
                <Typography> Complained Person: </Typography>

                </Grid>
                <Grid  item   xs={12} sm={6}  >
                <Typography>Name: {formdata.complainant.firstname}</Typography>
             
                
             
              
                </Grid>
                <Grid  item   xs={12} sm={6} >
                <Typography>Relationship: {formdata.complainant.middlename}</Typography>
               
               
              
              
                </Grid>
                <Grid  item   xs={12} sm={6}>
                <Typography>Address: {formdata.complainant.lastname}</Typography>
                
             
              
              
                </Grid>
                </Grid>
                <Grid container spacing={1}>
                <Grid  item  xs={12} sm={6} >
                <Typography> Contact Number: {formdata.complainant.address}</Typography>
               
            
              
              
                </Grid>
                
                <Grid  item  xs={12} sm={6} >
                <Typography> Age: {formdata.complainant.age}</Typography>

                </Grid>
                <Divider sx={{borderBottomWidth: 10}}/>
                <br/>
                <Divider sx={{borderBottomWidth: 10}}/>
          
       

          <br/>
          <Divider sx={{borderBottomWidth: 10}}/>
          <br/>
                <Grid container justifyContent="flex-start">
                <Divider sx={{borderBottomWidth: 10}}/> 
                <Grid  item  xs={12}  >
                <Divider sx={{borderBottomWidth: 10}}/>
                <Typography> Blotter Scenario Description: {formdata.blotterdescription}</Typography>

                </Grid>
                
            </Grid>
            
              </Grid>
              <Grid item xs={12} sm={6}>
                <LoadingButton 
             loading = {loading}
              onClick= {()=> setActiveStep((currentState)=> currentState -1 )}
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
              onClick={()=> console.log(formdata)}
              >
            Submit
          </LoadingButton>
                </Grid>
     
          </CardContent>
        </Card>
       </Box>
       
      </Grid>
      </Container>
    </>
  
    
  );
}