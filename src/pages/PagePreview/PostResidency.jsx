import { LoadingButton } from '@mui/lab';
import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import brgylogo from "../../assets/brgylogo.jpg";

export default function PostResidency({setActiveStep,formdata}){
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
    alignItems="center"
    >
        <Box 
       
        component={Paper} 
        elevation={5} 
        sx={{height:1000,width:780,mb:2,mt:2, backgroundImage: `url(${brgylogo})`,backgroundSize: 'contain',backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',opacity:0.6 }}
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
      }}>    Barangay Certificate of Post Residency
      
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
           Name of deceased person
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
            who died last ____________________ at ____________________________ based on his/her Certificate of Death with Registry No.______________________ from the  Office of the Civil Registry, of ___________________________and as per document presented to this office identified the above named deceased  as formerly residing at his/her family home at
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
            Address of deceased person
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
          	 Barangay Talon Uno, City of Las Piñas, Metro Manila, Philippines.	
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
This CERTIFICATION is being issued this ______ day of _______________in the Year of our Lord Two Thousand and Twenty-two upon the request of <u> {formdata.brgyform.lastname}, {formdata.brgyform.firstname} {formdata.brgyform.middlename}</u>

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
         attesting among others of the residency of the above-named deceased as formerly residing at the above given address for  ____________________________________________________________and for whatever other any legal purposes it may deem to use in the premises. 
            </Typography>     
        </Stack>
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