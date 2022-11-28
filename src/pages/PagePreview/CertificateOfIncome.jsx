import { LoadingButton } from '@mui/lab';
import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export default function CertificateofIncome({setActiveStep,formdata}){
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
    
    
    return(
    <Container maxWidth="md"  display="flex"
    justifyContent="center"
    alignItems="center">
        <Box 
       
        component={Paper} 
        elevation={5} 
        sx={{height:1000,width:780,mb:2,mt:2}}
        > 
        <br/>
        <br/>
        <br/>
        <br/>
        
          <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0.5}
        flexWrap="wrap"
        > 
    <Typography 
    variant="h1"
    sx={{
        fontSize:30,
        fontFamily: 'Matura MT Script Capitals',
      }}> Certificate of Income
      </Typography>
        </Stack>

        <Stack 
         direction="column"
         justifyContent="flex-start"
         alignItems="flex-start"
         spacing={0.5}
         flexWrap="wrap"
        >
 <Typography
      sx={{
        fontSize:19,
        fontFamily:'Bookman Old Style',
        ml:10,
        mt:10
      }}
      >
        To whom it may Concern:
      </Typography>
        </Stack>
<br/>
        <Stack
         direction="row"
         justifyContent="flex-start"
         alignItems="flex-start"
         spacing={0.5}
         flexWrap="wrap"
        >
        <Typography
      sx={{
        fontSize:19,
        fontFamily:'Bookman Old Style',
        ml:15,
       
      }}
      >
        This  
      </Typography>
      <Typography sx={{
        fontWeight: 'bold',
         fontSize:19,
        fontFamily:'Bookman Old Style'}}> CERTIFIES</Typography> 
      <Typography
      sx={{
        fontSize:19,
        fontFamily:'Bookman Old Style',
        ml:15,
       
      }}
      >
        that
      </Typography>
      <br/>
        </Stack>
<br/>
<br/>
        <Stack
         direction="column"
         justifyContent="center"
         alignItems="center"
         spacing={0.5}
         flexWrap="wrap"
        >
            <Typography
              sx={{
                fontSize:19,
                fontFamily:'Bookman Old Style',    
              }}
              textTransform="capitalize"
            > 
           {formdata.brgyform.lastname}, {formdata.brgyform.firstname} {formdata.brgyform.middlename}
            </Typography>
        <Divider sx={{borderBottomWidth: 1,background: 'black', width:500}}/>        
        </Stack>

        <Stack
         direction="row"
         justifyContent="flex-start"
         alignItems="flex-start"
         spacing={0.5}
         flexWrap="wrap"
        >
            <Typography
            
            sx={{
                fontSize:19,
                fontFamily:'Bookman Old Style',  
                ml:5,  
              }}>
            Filipino/na, {formdata.brgyform.status} of legal age, and residing with postal address at
            </Typography>
        </Stack>
      

        <Stack
         direction="column"
         justifyContent="center"
         alignItems="center"
         spacing={0.5}
         flexWrap="wrap"
        >
            <Typography
              sx={{
                fontSize:19,
                fontFamily:'Bookman Old Style',
                textAlign: 'left'    
              }}
            > 
            {formdata.brgyform.presentaddress}
            </Typography>
        <Divider sx={{borderBottomWidth: 1,background: 'black', width:500}}/>    
       
        </Stack>
        <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0.5}
        flexWrap="wrap"
        >
        <Typography
              sx={{
                fontSize:19,
                fontFamily:'Bookman Old Style',
                textAlign: 'left'  ,
                ml:5,  
              }}
            > 
            this barangay and within the City of Las Piñas.
            </Typography>    
        </Stack>
    <br/>
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0.5}
        flexWrap="wrap"
        >
        <Typography
              sx={{
                fontSize:19,
                fontFamily:'Bookman Old Style',
                textAlign: 'left'  ,
                ml:5,  
              }}
            > 
           Record submitted to this Office declares among others that he/she is an/he/she has a  ______________
            </Typography>    
           
        </Stack>
       
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0.5}
        flexWrap="wrap"
       
        >
            <Typography
              sx={{
                fontSize:19,
                fontFamily:'Bookman Old Style',
                textAlign: 'left'  ,
                ml:5,  
              }}
            > 
           where he/she earns his/her living with ______________________ Pesos Only (Php __________________ earning per month.
            </Typography>    
           
        </Stack>
        <br/>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
          flexWrap="wrap"
        >
            <Typography
              sx={{
                fontSize:19,
                fontFamily:'Bookman Old Style',
                textAlign: 'left'  ,
                ml:5,  
              }}
            > 
          This <b>CERTIFIFICATION </b> is issued this _____ day of _____________ in the Year of our Lord Two Thousand and Twenty-two at the Council of Brgy. Talon Uno, Las Piñas City upon the request of subject person as per requirements for ___________________________________________________ and for whatever legal purposes it may deem to use in the premises.
            </Typography>     
        </Stack>
    <br/>
    <br/>
    <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
          flexWrap="wrap"
        >
             <Typography
              sx={{
                fontSize:25,
                fontFamily:'Edwardian Script ITC',
                textAlign: 'left'  ,
                ml:5,  
                fontWeight:'bold'
              }}
            > 
            Hon. Emiliano B. Ramos
            </Typography>  
            
        </Stack>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0.5}
          flexWrap="wrap"
        >
              
            <Typography
              sx={{
                fontSize:15,
                fontFamily:'Bookman Old Style',
                textAlign: 'left'  ,
                ml:10,  
                
              }}
            > 
           Barangay Chairman
            </Typography>  
        </Stack>
        </Box>
        <Stack
  direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={1}
  flexWrap="wrap"
>
      <Box>
      <Button  variant="contained" sx={{width:250, mr:2}} onClick= {()=> setActiveStep((currentState)=> currentState -1 )}> Back</Button>
      <LoadingButton 
             loading = {loading}
              type="submit"
              sx={{width:250, mr:2}}
              variant="contained"
              fullWidth
             // onClick={()=> console.log(formdata)}
             onClick={handleSubmit}
              >
            Submit
          </LoadingButton>
      </Box>
      </Stack>
    </Container>
        )
}