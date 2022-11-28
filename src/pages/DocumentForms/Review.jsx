import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { Box, Card, CardContent, Container, Divider, Paper } from '@mui/material';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


// brgydata: formdata.brgyform
// requesttype: formdata.requesttype

export default function Review({setActiveStep,formdata}) {
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false)
  const navigate  = useNavigate();
  const sendRequest = async () => {
    setLoading(true)
    try { 
        const res = await axios.post('https://barangay-talon-uno.vercel.app/main/request',{
            //email:inputs.email,
            
           irbi: formdata.brgyform.irbi,
           region: formdata.brgyform.region,
           province: formdata.brgyform.province,
           city: formdata.brgyform.city,
           brgy: formdata.brgyform.barangay,
           date: formdata.brgyform.date,
           precint: formdata.brgyform.precintno,
           contact: formdata.brgyform.contactno,
           lastname: formdata.brgyform.lastname,
           firstname: formdata.brgyform.firstname,
           middlename: formdata.brgyform.middlename,
           nickname: formdata.brgyform.nickname,
           age: formdata.brgyform.age,
           gender: formdata.brgyform.value,
           birthday: formdata.brgyform.birthday,
           status: formdata.brgyform.value2,
           birthplace: formdata.brgyform.birthplace,
           height: formdata.brgyform.height,
           weight: formdata.brgyform.weight,
           presentadd: formdata.brgyform.presentaddress,
           provinceadd: formdata.brgyform.provincialaddress,
           contactname: formdata.brgyform.emergencyname,
           relationship: formdata.brgyform.emergencyrelationship,
           address: formdata.brgyform.emergencyaddress,
           number: formdata.brgyform.emergencynumber,
           res1: formdata.brgyform.emergencyres,
           type: formdata.requesttype
        }, 
        {
          headers:
          {
           "Authorization": "Bearer " + `${localStorage.getItem('T')}`  
          }
        })
        swal({
          title: "Request Submitted!",
          text: "Request Successful",
          icon: "success",
          button: "OK",
        });
          
            console.log(res.data.token);
            console.log(res.data.email);
            //localStorage.setItem('T', res.data.token);
           //navigate('/report');
        navigate('/reqdoc')
    }catch(error) {
      setError(true)
      swal({
        title: "Request Not Submitted!",
        text: "Request Unsuccessful",
        icon: "error",
        button: "OK",
        
      });
      console.log("error req: ", error.response.data);
     }finally {
      setLoading(false)
     
    }
  
}
const handleSubmit = (e) => {
  e.preventDefault();
  //console.log(inputs);

  sendRequest();

};
  return (
    <>
    <Container maxWidth="xl">
    <Grid component={Paper} elevation={16} sx={{p:2}}>
    
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Card style={{ maxWidth: 1500,height:1520, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            
              <Typography gutterBottom variant="h5" >
           Request Details
          </Typography> 
            
         
              <Typography gutterBottom variant="body2" >
           
          </Typography> 
             
          
          <br/>
          
       

          <br/>
          <Divider/>
          <br/>
          <Grid container spacing={1}>
          <Grid item  xs={12} sm={6}>
          <Typography> 
             Request Type: {formdata.requesttype}
            
               </Typography>
          </Grid>
          <Grid item  xs={12} sm={6}>
          <Typography> 
              IRBI NO. : {formdata.brgyform.irbi}
            
               </Typography>
          </Grid>
          <Grid item  xs={12} sm={6}>
            <Typography> 
              <Typography>Date:  {formdata.brgyform.date}</Typography>
                   </Typography>
           </Grid>
          <Grid item  xs={12} sm={6}>
            <Typography> 
              
              <Typography> Region : {formdata.brgyform.region}</Typography>
                
             
            </Typography>
          </Grid>
          <Grid item  xs={12} sm={6} >
            
              <Typography>Precint no: {formdata.brgyform.precintno}</Typography>
                     
                 
          </Grid>
                    <Grid item  xs={12} sm={6}>
            <Typography> 
              
              <Typography>Province :  {formdata.brgyform.province}</Typography>
             
            </Typography>
          </Grid>
       
          <Grid item   xs={12} sm={6}>
            <Typography> 
             
              <Typography> City/Municipality : {formdata.brgyform.city}</Typography>
             
            </Typography>

          </Grid>
           <Grid item  xs={12} sm={6} >
         
          <Typography>  contact no. {formdata.brgyform.contactno}</Typography>
                
          </Grid>
          <Grid item  xs={12} sm={6} >
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
               
             
              
                </Grid>
              
                </Grid>
                <br/>
                <Divider sx={{borderBottomWidth: 10}}/>
                <Grid container spacing={1}>
                <Grid  item   xs={12} sm={6} >
                <Typography> Contact Person Incase of Emergency: </Typography>

                </Grid>
                <Grid  item   xs={12} sm={6}  >
                <Typography>Name: {formdata.brgyform.emergencyname}</Typography>
             
                
             
              
                </Grid>
                <Grid  item   xs={12} sm={6} >
                <Typography>Relationship: {formdata.brgyform.emergencyrelationship}</Typography>
               
               
              
              
                </Grid>
                <Grid  item   xs={12} sm={6}>
                <Typography>Address: {formdata.brgyform.emergencyaddress}</Typography>
                
             
              
              
                </Grid>
                </Grid>
                <Grid container spacing={1}>
                <Grid  item  xs={12} sm={6} >
                <Typography> Contact Number: {formdata.brgyform.emergencynumber}</Typography>
               
            
              
              
                </Grid>
                
                <Grid  item  xs={12} sm={6} >
                <Typography> res: {formdata.brgyform.emergencyres}</Typography>
               
               
             
              
                </Grid>
               
                <Grid container justifyContent="flex-end">
             
            </Grid>
            
              </Grid>
              <Grid item xs={12} sm={6} >
                <LoadingButton 
             loading = {loading}
             onClick= {()=> setActiveStep((currentState)=> currentState +1 )}
              sx={{mt: 3, mb: 2}}
              variant="contained"
              fullWidth
              >
            Next
          </LoadingButton>
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
          {/* <Grid item xs={12} sm={6}>
                <LoadingButton 
             loading = {loading}
              type="submit"
              sx={{mt: 3, mb: 2}}
              variant="contained"
              fullWidth
             // onClick={()=> console.log(formdata)}
             onClick={handleSubmit}
              >
            Submit
          </LoadingButton>
                </Grid>
      */}
          </CardContent>
        </Card>
       </Box>
       
      </Grid>
      </Container>
    </>
  
    
  );
}