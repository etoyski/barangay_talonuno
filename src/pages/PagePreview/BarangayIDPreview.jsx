import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, Divider, Grid, Paper, Stack } from '@mui/material';
import Third from "../../assets/bg6.jpg";
import { Box, Container } from '@mui/system';
import { createTheme, experimentalStyled as styled } from '@mui/material/styles';
import { deepOrange, grey } from '@mui/material/colors';
import Phflag from "../../assets/ph_flag.png"
import brgylogo from "../../assets/brgylogo.jpg"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
export default function BarangayIDPreview({setActiveStep,formdata}) {
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
    <Container maxWidth="lg" component="main" sx={{background: '#D1D1D1'}}   >
        <Box  
        display="flex"
  justifyContent="center"
  alignItems="center"
  sx={{mt:2,mb:2,}}
  > 
        <Card sx={{ maxWidth: 540, maxHeight:700, margin: "0 auto",backgroundColor:"#fafafa"}}>
        <Box 
        >

<Stack direction="row" gap={1} flexWrap="wrap"  >
<Avatar sx={{height:95,width:300}} src={Phflag} variant="square"  />
<Avatar sx={{height:70,width:70}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Las_Pi%C3%B1as_City_seal.png/128px-Las_Pi%C3%B1as_City_seal.png" />
<Avatar sx={{height:70,width:70,color:"#fafafa"}}  variant="square" src="data:image/png;base64,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" />

</Stack>
</Box>

        <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={0.5}
  flexWrap="wrap"
>

                        
<CardContent>
           <Typography variant="body1"  sx={{ml:3}}> Republic of the Philippines</Typography>
           <Typography variant="body1" sx={{ml:5}}> <b> Barangay Talon Uno</b></Typography>
           <Typography variant="body1"> <b> Office of the Punong Barangay </b> </Typography>
        </CardContent>
<CardContent>
<Stack direction="row" gap={0.5} flexWrap="wrap" >
<Avatar sx={{ bgcolor: 'grey',height:200,width:200,ml:10 }} variant="square" >
        1x1
      </Avatar>
      <Avatar sx={{height:70,width:70,mt:6}} src={brgylogo} />
      </Stack>
      <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={0.5}
  flexWrap="wrap"
>
      <Typography variant="body1" sx={{ml:1}}> <b>ID no.:xxxx-xxxx-xxx </b> 22-TLU0</Typography>
      <Typography variant="body1"  sx={{ml:10}} textTransform="capitalize"> {formdata.brgyform.lastname}, {formdata.brgyform.firstname}{formdata.brgyform.middlename}
      </Typography>
      <Typography variant="body1"  sx={{ml:8}}> Resident</Typography>
      </Stack>
        </CardContent>
      
       
       
        </Stack>
        
        <br/>
        <Divider sx={{borderBottomWidth: 2,background: 'black', width:325, ml:10}}/>
        <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={0.5}
  flexWrap="wrap"
>
        <CardContent>
      
        <Typography variant="body1" > Signature</Typography>
          
       
      </CardContent>   
 
      </Stack>
      <Divider sx={{borderBottomWidth: 25,background: 'blue'}} orientation="vertical" flexItem/>
      <Divider sx={{borderBottomWidth: 25,background: '#d50000'}} />
      <Divider sx={{borderBottomWidth: 25,background: '#bdbdbd'}}/>
    </Card>
    
        </Box>
        <Box  
        display="flex"
  justifyContent="center"
  alignItems="center"
  sx={{mt:2,mb:2}}
  >
        <Card sx={{ width: 480, height:680, backgroundColor:"#fafafa"}}>
        <Box 
        >

<Stack direction="row" gap={1} flexWrap="wrap" >


</Stack>
</Box>
<Divider sx={{borderBottomWidth: 25,background: 'blue'}} orientation="vertical" flexItem/>
      <Divider sx={{borderBottomWidth: 25,background: '#d50000'}} orientation="vertical" flexItem/>
      <Divider sx={{borderBottomWidth: 25,background: '#bdbdbd'}}orientation="vertical" flexItem/>  
        <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={1}
  flexWrap="wrap"
>

 <br/> 
 <br/> 
 <Box component="span" sx={{ p: 3, border: '2px dashed grey', width:450,ml:5 }}>
<CardContent>
           <Typography variant="body1" > <b>Contact Person Incase of Emergency:</b> </Typography>
           <Typography variant="body1"  textTransform="capitalize"> <b> Name: </b> {formdata.brgyform.emergencyname}</Typography>
           <Typography variant="body1" textTransform="capitalize" > <b> Relationship: </b> {formdata.brgyform.emergencyrelationship}</Typography>
           <Typography variant="body1" textTransform="capitalize"> <b> Address: </b>{formdata.brgyform.emergencyaddress} </Typography>
           <Typography variant="body1" textTransform="capitalize"> <b> Contact No.: </b> {formdata.brgyform.emergencynumber}</Typography>
        </CardContent>
        </Box>
        </Stack>
<CardContent>
    
<Stack direction="column" gap={0.5} justifyContent="center "
  alignItems="center"flexWrap="wrap" >
<Avatar sx={{ bgcolor: 'grey',height:200,width:200}} src="https://www.freepnglogos.com/uploads/qr-code-png/qr-code-file-bangla-mobile-code-0.png"variant="square">
       
      </Avatar>
     
      </Stack>
      <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={0.5}
  flexWrap="wrap"
>
    
      </Stack>
        </CardContent>
      
       
       
        
        
        <br/>
        <Divider sx={{borderBottomWidth: 2,background: 'black', width:325, ml:10}}/>
        <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={0.5}
  flexWrap="wrap"
>
        <CardContent>
      
        <Typography variant="body1" > Signature</Typography>
          
       
      </CardContent>   
 
      </Stack>
     
    </Card>
    
        </Box>
        <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={0.5}
  flexWrap="wrap"
>
      <Box>
      <Button color='secondary' variant="contained" sx={{width:250, mr:2}} onClick= {()=> setActiveStep((currentState)=> currentState -1 )}> Back</Button>
      <LoadingButton  variant="contained" sx={{width:250}}  type="submit"  onClick={handleSubmit}> Submit</LoadingButton>
      </Box>
      </Stack>
      
  </Container>

  );
}