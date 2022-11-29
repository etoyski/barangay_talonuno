import { Visibility, VisibilityOff } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Card, CardContent, createTheme, Grid, IconButton, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Swal from 'sweetalert2'

const theme = createTheme();
const ResetPassword = () => {
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmpassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadingpage, setLoadingpage] = useState(true);
    const [resettoken,setResettoken]= useState('')
    const token = useLocation().pathname.split('/')[2]
    const navigate = useNavigate()
    useEffect(() => { 
     axios.post("https://barangay-talon-uno.vercel.app/verifyUrlReset", { token }).then((res) => { 
        if (!res.data.success){

          return navigate("/login")
        }else{
          setLoadingpage(false)
          setResettoken(res.data.resetToken )
         
        }
         
     })
    },[])

    const handleClick = () => {
      setShowPassword(!showPassword);
    };
    const sendRequest = async () => {
      // const user = { 
      //   email,
      //   password};
      setLoading(true)
     if (password === confirmpassword){
      try  { 
        const res = await axios.post('https://barangay-talon-uno.vercel.app/resetPassword',{
          
            //email: email,
            newPassword : password, 
            resetToken: resettoken
        })
            localStorage.setItem('email',res.data.email);
             localStorage.setItem('T', res.data.token);
             console.log('email', res.data.email)
           
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
              title: 'Please check your email'
            });

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
        title: 'Reset Password Failed'
      });
            console.log(error);
    }finally {        
      setLoading(false)
    }
   
     }
      
    
  }
  const handleMouseDown = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   
  
sendRequest();

};

  return loadingpage ? null :  (
    
    <ThemeProvider theme={theme}>
      
    <Grid component={Paper} elevation={16} sx={{p:2}}>
    
    <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Card style={{ maxWidth: 500, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Reset Password
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              
          </Typography> 
            
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField 
        
                  margin="normal"
                  required
                  //error={error}
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}  
                  id="Password"
                  label="Password "
                  name="Password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="Password"
                  autoFocus
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
                
                <Grid item xs={12} >
                <TextField
                margin="normal"
                required
                
                //error={error}
                fullWidth
                onChange={({ target }) => setConfirmpassword(target.value)}
                value={confirmpassword} 
                name="confirmpassword"
                label="confirmpassword"
                type={showPassword ? 'text' : 'password'}
                id="confirmpassword"
                autoComplete="confirmpassword"
                inputProps={{ minLength: 6 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClick} onMouseDown={handleMouseDown}>
                        {showPassword ? <VisibilityOff /> : <Visibility  />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              
                </Grid>
                
{/*             
                <Grid item xs={12}>
                <FormControlLabel
                  
                  control={<Checkbox   onClick={handle} value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid> */}
                <Grid item xs={12}>
                <LoadingButton 
             loading = {loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
             Change Password
          </LoadingButton>
                </Grid>
                {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="row-reverse">
              <Grid item>
                <Button variant="text" onClick={handleClickOpen} >
                  Forgot password?
                </Button>
              </Grid>
            </Grid> */}
              </Grid>
          </CardContent>
        </Card>
       </Box>
      </Grid>
      </ThemeProvider>
  )
}

export default ResetPassword