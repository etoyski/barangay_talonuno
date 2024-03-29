import React, { useEffect, useState } from 'react'
import {Alert, Avatar , Box, Button, Card, CardContent, IconButton, InputAdornment, Snackbar, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Logo from '../../assets/brgylogo.jpg'
import LoadingButton from '@mui/lab/LoadingButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import swal from 'sweetalert2';
import { useCookies } from 'react-cookie';
//import useAuth from '../Auth/Auth';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, update, login } from '../../redux/userSlice';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Container } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
const theme = createTheme();

const Login = (props) => {


  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [otp, setOtp] = useState("")
  const navigate = useNavigate();


//eto gamitin mo wag yung wag yung handle submit otp

  const sendOTP = async () => {
    setOpen(true)
   //dito mo ilagay yung header  axios  need mo sa auth token 
   
    try { 

      const res = await axios.post('https://barangay-talon-uno.vercel.app/otp',
    
      {
        email: localStorage.getItem("email", res.data.email),
        opt:otp
        
        },
        {
          headers:{
            "Authorization": "Bearer " + ` ${localStorage.getItem('T')}`   
          }
        },
        )
      
      console.log(res.data);

    }catch(error){
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
        title: 'Invalid Email'
      });
  };
  }
  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleSubmitOTP = async () => {
    
    try { 
      const res = await axios.post('https://barangay-talon-uno.vercel.app/auth',{
        email: localStorage.getItem("email", res.data.email),

         otp: otp,
        
      })
      if (otp !== otp ){
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
          title: 'OTP Invalid'
        });
              console.log(error);
      
      }else{
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
          title: 'OTP Matched! Login Success'
        });
        console.log(res.gen)
       setOtp()
        // setOpen(true)
        
         localStorage.setItem('email',res.data.email);
  
         localStorage.setItem('user',res.data.fullname);
         localStorage.setItem('address',res.data.address);
         localStorage.setItem('contact',res.data.contact);
             localStorage.setItem('T', res.data.token);
        //    ;
             console.log('user', userInfo)
  
            dispatch(update({ name: res.data.fullname, email: res.data.email }))
            dispatch(login(true))
            navigate("/mainpage")
  
      }
      

  }catch(error) {
    //setError(true)
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
      title: 'OTP Invalid'
    });
          console.log(error);
  }
}

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
  };
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //const [error,setError] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);  
 
  const [cookies, setCookie] = useCookies(['user']);
  const {userInfo, pending, error} = useSelector((state) => state.user);
  const dispatch = useDispatch();
//   const [inputs,setInputs] = useState({
  
//     email: "", 
//     password:"",
    
// });

const handle = () => {
  setCookie('email', email, { path: '/' });
  setCookie('password', password, { path: '/' });
};
// const sendOTP = async () => {
//   setLoading(true)
//   try { 
//     const res = await axios.post('https://barangay-talon-uno.vercel.app/auth',{
//       email: localStorage.getItem("email", res.data.email)
      
//     })
//   }catch(error){
//     const Toast = Swal.mixin({
//       toast: true,
//       position: 'top-end',
//       showConfirmButton: false,
//       timer: 3000,
//       timerProgressBar: true,
//       didOpen: (toast) => {
//         toast.addEventListener('mouseenter', Swal.stopTimer)
//         toast.addEventListener('mouseleave', Swal.resumeTimer)
//       }
//     })
    
//     Toast.fire({
//       icon: 'error',
//       title: 'Invalid Email'
//     });
//   }finally {
//     setLoading(false)
//   }
// }
  // const handleChange = (e) => {
   
  //   setInputs(prev => ({
  //       ...prev,
  //       [e.target.name]: e.target.value
  //   }))};
    
    const sendRequest = async () => {
      // const user = { 
      //   email,
      //   password};
      setLoading(true)
     
      try { 
          const res = await axios.post('https://barangay-talon-uno.vercel.app/login',{
            
              email: email,
              password: password, 
          })
          
         
          //setOpen(true)
          //setUser(res.data)
          // store the user in localStorage
// <<<<<<< HEAD
           localStorage.setItem('email',res.data.email);
// // =======
          
          //  localStorage.setItem('user',res.data.fullname);
          //  localStorage.setItem('address',res.data.address);
          //  localStorage.setItem('contact',res.data.contact);
// // >>>>>>> dff0005ffb12d3ecfc51295cb170c478a2d34b27
               localStorage.setItem('T', res.data.token);
//              // localStorage.setItem('user', res.data.userInfo);
               console.log('user', userInfo)
               console.log('email', res.data.email)
               setOpen(true)
               
// //             dispatch(loginUser(email)) ito pala dahilan nung nag e error na login double login nangyayari sa axios mo tas dito sa redux loginUser()
//              dispatch(update({ name: res.data.fullname, email: res.data.email }))
           //   dispatch(login(true))
             
             // alisin mo to tas lalabas na ung otp modal kasi nag nanavigate agad sya kaya di na gumagana ung setOpen(true) mo sa taas and sa finally
             // other way is ilipat mo na lang ung navigate('/mainpage') sa otp modal pagka success ng otp auth
             
        
  
      }catch(error) {
        //setError(true)
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
          title: 'Login Failed'
        });
              console.log(error);
      }finally {        
        setLoading(false)
      }
     
    
  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    }

    // redux state
    // swal

    

  }, []);
  const handleSubmit = (e) => {
          e.preventDefault();
          
         
      sendRequest();
      
  };
  
  return (
    <ThemeProvider theme={theme}>
      
    <Grid component={Paper} elevation={16} sx={{p:2}}>
    
    <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Card style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Log In
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              
          </Typography> 
            
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField 
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  margin="normal"
                  required
                  error={error}
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}  
                  id="email"
                  label="Email "
                  name="email"
                  type="email"
                  autoComplete="email"
                  autoFocus
                  />
                </Grid>
                
                <Grid item xs={12} >
                <TextField
                margin="normal"
                required
                
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                inputProps={{ minLength: 6 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClick} onMouseDown={handleMouseDown}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              
                </Grid>
                
            
                <Grid item xs={12}>
                <FormControlLabel
                  
                  control={<Checkbox   onClick={handle} value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
                <Grid item xs={12}>
                <LoadingButton 
             loading = {loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
             SignIn
          </LoadingButton>
                </Grid>
                <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="row-reverse">
              <Grid item>
                <Link href="/login" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
              </Grid>
          </CardContent>
        </Card>
       </Box>
      </Grid>
      {cookies.email && (
      <div>
         email: <p>{cookies.email}</p>
      </div>
      )}
      {cookies.Password && (
      <div>
         password: <p>{cookies.password}</p>
      </div>
      )}
      {logged ? <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar> : ""}

      {error ?   <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
         Login Failed! Please input valid credentials
        </Alert>
      </Snackbar> : ""}

    {/*  dialog box */}
      <div>
      <Container maxWidth="sm" component="main">
        <Box>
            <Paper>
            <Dialog component="form" onSubmit={sendOTP} open={open} onClose={handleClose}>
        <DialogTitle>OTP</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To proceed to this website, please enter your OTP here. 
            Kindly check your email : {localStorage.getItem("email")}, or check into your spam folder.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={localStorage.getItem("otp")} 
            type="text"
            value={otp}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <LoadingButton onSubmit={sendOTP}  loading = {loading}
              type="submit"> Send OTP</LoadingButton> 
          {/* <Button onClick={handleSubmitOTP} type="submit" onSubmit={handleSubmitOTP}>Submit</Button> */}
        </DialogActions>
      </Dialog>
            </Paper>
        </Box>
       
        
      
    </Container>
    <Container maxWidth="sm" component="main">
        <Box>
            <Paper>
            <Dialog component="form" onSubmit={handleSubmitOTP} open={open} onClose={handleClose}>
        <DialogTitle>OTP</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To proceed to this website, please enter your OTP here. 
            Kindly check your email : {localStorage.getItem("email")}, or check into your spam folder.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={localStorage.getItem("otp")} 
            type="text"
            value={otp}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          {/* <LoadingButton onSubmit={sendOTP}  loading = {loading}
              type="submit"> Send OTP</LoadingButton> */}
          <Button onClick={handleSubmitOTP} type="submit" onSubmit={handleSubmitOTP}>Submit</Button>
        </DialogActions>
      </Dialog>
            </Paper>
        </Box>
       
        
      
    </Container>
    
    </div>
  </ThemeProvider>
  
  )
}

export default Login




