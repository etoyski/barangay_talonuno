// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import { Avatar, Breadcrumbs, Card, CardContent, Container, CssBaseline, Divider, Fab, Grid, TextField, Typography } from '@mui/material';
// import LoadingButton from '@mui/lab/LoadingButton';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import EditIcon from '@mui/icons-material/Edit';
// import { useNavigate } from 'react-router-dom';
// import Chip from '@mui/material/Chip';
// import HomeIcon from '@mui/icons-material/Home';

// import { emphasize, styled } from '@mui/material/styles';


// const theme = createTheme();
// const StyledBreadcrumb = styled(Chip)(({ theme }) => {
//   const backgroundColor =
//     theme.palette.mode === 'light'
//       ? theme.palette.grey[100]
//       : theme.palette.grey[800];
//       return {
//         backgroundColor,
//         height: theme.spacing(3),
//         color: theme.palette.text.primary,
//         fontWeight: theme.typography.fontWeightRegular,
//         '&:hover, &:focus': {
//           backgroundColor: emphasize(backgroundColor, 0.06),
//         },
//         '&:active': {
//           boxShadow: theme.shadows[1],
//           backgroundColor: emphasize(backgroundColor, 0.12),
//         },
//       };
//     }); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591
//     function handleClick(event) {
//       event.preventDefault();
//       console.info('You clicked a breadcrumb.');
//     }
// export default function UserProfile() {
//   const navigate = useNavigate();

//   return (
  
//     <React.Fragment>
//        <div role="presentation" onClick={handleClick}>
//       <Breadcrumbs aria-label="breadcrumb">
//         <StyledBreadcrumb
//           component="a"
//           onClick={() => navigate('/user-profile')}
//           label="User Profile"
//           icon={<HomeIcon fontSize="small" />}
//         />
       
//               </Breadcrumbs>
              
      
              
//         </div>
    
//     <ThemeProvider  theme={theme}>
      
//       {/* <Grid component={Paper} elevation={16} sx={{p:2,alignItems: 'center'}}> */}
      
//       <Box component="paper" elevation={16}  sx={{ mt: 1, p:2,alignItems: 'center',justifyContent: 'center',display: 'flex'}}>
//           <Card  display="flex"
//   justifyContent="center"
//   alignItems="center"
//   minHeight="100vh"
//   sx={{ width: 1000, padding: "10px ", marginRight: "16px", border:2,zIndex: 'tooltip' }}>
//            <CardContent>
//            <CardContent>
//               <Typography gutterBottom variant="h5">
//                 Profile
//             </Typography> 
//             <Box >
//             <Grid container spacing={1} justifyContent="left"
//                 alignItems="center">
//             <Grid xs="auto"  item>
//             <Avatar  sx={{width: 90, height: 85 }} src="/broken-image.jpg"  />
//             <Typography variant="body2"> </Typography>
          
//         </Grid>
        
//             </Grid>
            
//         </Box>
//            </CardContent>
//       <Divider sx={{height:3, border:0.3, bgcolor:'black'}} />
              
//                 <Grid container spacing={1}>
//                   <Grid xs={12} sm={4} item>
//                   <Typography variant="h6"> Firstname: {localStorage.getItem("user")}</Typography>
//                   </Grid>
//                   <Grid xs={12} sm={4} item>
//                   <Typography variant="h6"> </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Middlename: </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Middlename: </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Lastname: </Typography>
//                   </Grid> <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Lastname: </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Email: {localStorage.getItem("email")} </Typography>
//                   </Grid> <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Email: </Typography>
//                   </Grid>
//                   <Grid xs={12} item>
//                   <Typography variant="h5"> Address </Typography>
//                   </Grid> 
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> City: </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> City: </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Barangay: </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Barangay: </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Street: </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Street: </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Contact Number: </Typography>
//                   </Grid> <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Contact Number: </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Birthdate: </Typography>
//                   </Grid> <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Birthdate: </Typography>
//                   </Grid>
//                   <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Gender: </Typography>
//                   </Grid> <Grid xs={12} sm={6} item>
//                   <Typography variant="h6"> Gender: </Typography>
//                   </Grid>
//                   </Grid>
//             </CardContent>
//             <CardContent sx={{margin:5}}>
//             <Fab color="secondary" aria-label="edit"  onClick={() => navigate('/edit-user-profile')}>
//         <EditIcon />
//       </Fab>
//             </CardContent>
            
//           </Card>
//          </Box>
//         {/* </Grid> */}
        
//     </ThemeProvider>
//   </React.Fragment>
//   );
// }

import React, { useEffect, useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Container,
    Stack,
    TextField,
    Typography,
    styled,
    Divider,
    Paper,
    InputAdornment,
    Checkbox,
} from "@mui/material";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import AppbarSpace from "../utils/AppbarSpace";
import { useDispatch, useSelector } from "react-redux";
// import {
//     loadComponent,
//     uploadImage,
//     userData,
// } from "../redux/slicer/userSlice";
import PhoneIcon from '@mui/icons-material/Phone';
import LoadingButton from "@mui/lab/LoadingButton";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
const Input = styled("input")({
    display: "none",
});


const UserProfile = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    // const user = useSelector(userData);
    // const loading = useSelector(loadComponent);
    //const [loading,isLoading] = useState(false);
    const [isMentor, setIsMentor] = useState(false);
    const navigate = useNavigate;
    const [error,setError] =useState();
    const [profileImage, setProfileImage] = useState(null);
    const [fullname,setFullname]=useState('')
    const [contact,setContact]=useState('')
    const [address,setAddress]=useState('')
    const [email,SetEmail] = useState('')
    const [inputs, setInputs] = useState({
      firstname: "",
      middlename: "",
      lastname: "",
      email:"",
      number: "",
    });
    
   
    const handleChange = (e) => {
      setInputs((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
    // useEffect(() => {
    //     setProfileImage(user?.img);
    // }, [user]);

    const previewImg = (e) => {
        const reader = new FileReader();

        reader.onloadend = (e) => {
            setProfileImage(e.target.result);
            // console.log(e.target.result);
        };

        reader.readAsDataURL(e.target.files[0]);
    };

    const uploadImg = () => {
        // if (user.img !== profileImage) {
        //     // dispatch(uploadImage(profileImage));
        // }
    };
    const sendRequest = async () => {
      setLoading(true)
      try {
        const res = await axios.post(
          "https://barangay-talon-uno.vercel.app/update",
          {
            firstname: inputs.firstname,
            middlename: inputs.middlename,
            lastname: inputs.lastname,
            number: Number(inputs.contactnumber),
            //email: inputs.email,
            email:`${localStorage.getItem('email')}`,
            image: profileImage
          }
          ,
          {
            headers:
            {
                "Authorization": "Bearer " + `${localStorage.getItem('T')}`  
            }
          }
        );
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'User Edited'
        });
        console.log(res.data);
        navigate("/user-profile");
        
      } catch (error) {
        setError(true)
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Edit failed'
        });
  
        console.log("edit failed: ", error.response.data);
      }
      finally {
        setLoading(false)
      }
    };

     
    const handleSubmit = (e) => {
      e.preventDefault();
      //console.log(inputs);
   
      sendRequest();
  
  };
  
    return (
        <React.Fragment>
            {/* <Header title="Settings - Account" /> */}
            {/* <AppbarS  pace color="#f2f4fb" /> */}

            <Box bgcolor="#f2f4fb" pb={10} component="form" onSubmit={handleSubmit}>
                <Container sx={{ pt: { xs: 5, sm: 10 } }}>
                    <Typography variant="h4" fontWeight="bold">
                        Personal Info
                    </Typography>
                    <Typography
                        variant="body2"
                        fontWeight={300}
                        sx={{ opacity: 0.6, mt: 1, mb: 2 }}
                    >
                        Upload your photo and personal details here.
                    </Typography>

                    <Paper
                        sx={{
                            m: { xs: 0, sm: 2, md: 5 },
                            p: { xs: 2, sm: 3, md: 5 },
                            border: "2px solid #dadce3",
                            borderRadius: (theme) => theme.shape.borderRadius,
                            bgcolor: "inherit",
                        }}
                        elevation={0}
                    >
                        <Box>
                            <Stack direction="row" gap={2}>
                                <Box width="100%">
                                    <Typography fontWeight={300}>
                                        Fullname
                                    </Typography>
                                    <TextField
                                    textTransform="capitalize"
                                    disabled
                                    fullwidth
                                    placeholder={sessionStorage.getItem('user')}
                                    name={localStorage.getItem('firstname')}
                                    label={sessionStorage.getItem('user')}
                                    onChange={(e) => setFullname(e.target.value)}
                                    value={fullname}
                                        fullWidth
                                        size="small"
                                    
                                    />
                                </Box>
                                </Stack>
                                {/* <Box width="100%">
                                    <Typography fontWeight={300}>
                                      Middlename
                                    </Typography>
                                    <TextField
                                        onChange={handleChange}
                                        value={inputs.middlename}
                                        fullWidth
                                        size="small"
                                    />
                                </Box>
                                <Box width="100%">
                                    <Typography fontWeight={300}>
                                      Lastname
                                    </Typography>
                                    <TextField
                                        onChange={handleChange}
                                        value={inputs.lastname}
                                        fullWidth
                                        size="small"
                                    />
                                </Box>
                            </Stack> */}

                            <Box mt={2}>
                                <Typography fontWeight={300}>Email</Typography>
                                <TextField
                                disabled
                                     onChange={(e) => SetEmail(e.target.value)}
                                     value={email}
                                    placeholder={localStorage.getItem('email')}
                                    
                                    fullWidth
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailOutlinedIcon color="inherit" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Typography fontWeight={300}>Contact Number</Typography>
                                <TextField
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                    id="number"
                                    placeholder={localStorage.getItem('contact')}
                                 
                                    name="contact"

                                    fullWidth
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneIcon color="inherit" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Typography fontWeight={300}>Address</Typography>
                                <TextField
                                disabled
                                  onChange={(e) => setAddress(e.target.value)}
                                     value={address}
                                     placeholder={localStorage.getItem('address')}
                                     name={localStorage.getItem('address')}
                                 
                                    fullWidth
                                    size="small"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <HomeIcon color="inherit" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                        </Box>

                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            mt={2}
                            gap={2}
                            alignItems="center"
                        >
                            {/* <Box width="100%">
                                <Typography fontWeight={300}>
                                    Birthdate
                                </Typography>
                                <TextField
                                    type="date"
                                    size="small"
                                    defaultValue="2000-10-23"
                                />
                            </Box> */}
                        </Stack>

                        <ProfileImage
                            profileImage={profileImage}
                            previewImg={previewImg}
                        />

                        <Divider />

                        <Stack direction="row" pt={2} pb={3} gap={2}>
                            <LoadingButton
                                fullWidth
                                type="submit"
                                variant="contained"
                                onClick={uploadImg}
                                loading={loading}
                            >
                                {loading ? "loading" : "Save"}
                            </LoadingButton>

                            <Button fullWidth variant="outlined" color="error" onClick={() => navigate('/mainpage')}>
                                Cancel
                            </Button>
                        </Stack>
                    </Paper>
                </Container>
            </Box>
        </React.Fragment>

    );
};

const ProfileImage = ({ profileImage, previewImg }) => {
    return (
        <React.Fragment>
            <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "start", sm: "end" }}
                gap={2}
                pt={5}
                pb={5}
            >
                <Avatar
                    src={profileImage}
                    alt="asd"
                    sx={{ height: 150, width: 150 }}
                    // variant="rounded"
                />

                <Box>
                    <label htmlFor="contained-button-file">
                        <Input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                            onChange={previewImg}
                        />
                        <Button
                            endIcon={<InsertPhotoOutlinedIcon />}
                            component="span"
                            variant="outlined"
                            color="info"
                        >
                            Upload
                        </Button>
                    </label>
                </Box>
            </Stack>
        </React.Fragment>
    );
};


export default UserProfile;

