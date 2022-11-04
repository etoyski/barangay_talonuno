import { Autocomplete, Box, Button, Card, CardContent, Divider, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';


const options = ['Male', 'Female'];
const optionsStatus = ['Single', 'Engaged','Married','Divorced','Widowed'];
const BarangayID = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false); 
  const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState(options[0]);
    console.log("sd")

    const handleSubmit = (e) => {
      e.preventDefault();
     
    

};
  return (
    <>
    <Grid component={Paper} elevation={16} sx={{p:2}}>
    
    <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Card style={{ maxWidth: 1500,height:1800, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Grid container >
              <Grid item xs={12}>
              <Typography gutterBottom variant="h5" sx={{ml:50}}>
           SANGGUNIANG BARANGAY OF TALON UNO
          </Typography> 
              </Grid>
              <Grid item xs={12}>
              <Typography gutterBottom variant="body2" sx={{ml:62}}>
           INDIVIDUAL RECORD OF BARANGAY INHABITANT
          </Typography> 
              </Grid>
            </Grid>
          
          <br/>
            <Typography variant="body2" color="error" component="p" gutterBottom>
              Please fill out the required values
          </Typography> 
      
          <br/>
          <Divider/>
          <br/>
          <Grid container spacing={1}>
          <Grid item  xs={12} sm={6}>
          <Typography> 
              IRBI NO. : 
              <TextField 
                

                variant="standard"
              />
               </Typography>
          </Grid>
          <Grid item  xs={12} sm={6}>
            <Typography> Date: 
              <TextField 
              required
                    type="date" 
                    label="" 
                    name="date"
                    variant="outlined"  
                    error={error}
                    sx={{ml:2,mb:1}}
                    //onChange={handleChange} 
           />           </Typography>
           </Grid>
          <Grid item  xs={12} sm={6}>
            <Typography> 
              Region : 
              <TextField 
              sx={{ml:2,mb:1}}
                disabled
                defaultValue="NCR" 
                
              />
            </Typography>
          </Grid>
          <Grid item  xs={12} sm={6} >
          
              <TextField 
                    required
                    sx={{ml:2,mb:1}}
                    type="text" 
                    label="Precint No." 
                    name="Precint No."
                    variant="outlined"  
                    error={error}
                    //onChange={handleChange} 
           />          
                 
          </Grid>
                    <Grid item  xs={12} sm={6}>
            <Typography> 
              Province : 
              <TextField 
                disabled
                defaultValue="Metro Manila" 
                sx={{ml:2,mb:1}}
              />
            </Typography>
          </Grid>
          <Grid item  xs={12} sm={6}>
          
          <TextField 
            sx={{ml:2,mb:1}}
                type="text" 
                label="VRR No." 
                name="VRR No."
                variant="outlined"  
                error={error}
                //onChange={handleChange} 
       />          
             
      </Grid>
          <Grid item   xs={12} sm={6}>
            <Typography> 
              City/Municipality : 
              <TextField 
                sx={{ml:2,mb:1}}
                disabled
                defaultValue="Las Piñas" 
                
              />
            </Typography>

          </Grid>
           <Grid item  xs={12} sm={6} >
          
          <TextField 
                required
                sx={{ml:2,mb:1}}
                type="text" 
                label="Contact No." 
                name="Contact No."
                variant="outlined"  
                error={error}
                //onChange={handleChange} 
       />          
          </Grid>
          <Grid item  xs={12} sm={6} >
            <Typography> 
              Barangay : 
              <TextField 
                disabled
                defaultValue="Talon Uno" 
                sx={{ml:2,mb:1}}
              />
            </Typography>
          </Grid>
         
          </Grid>
          <br/>
          <Divider/>
          <br/>
              <Grid container spacing={1}>
                <Grid item   xs={9} sm={3}>
                  <TextField 
                  
                  margin="normal"
                  required
                  error={error}
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}  
                  id="email"
                  label="Lastname "
                  name="lastname"
                  type="text"
                  autoComplete="email"
                  autoFocus
                  />
                </Grid>
                
                <Grid  item  xs={9} sm={3} >
                <TextField
                margin="normal"
                required
                
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Firstname"
                label="firstname"
                id="firstname"
                autoComplete="firstname"
                inputProps={{ minLength: 6 }}
               
              />
              
                </Grid>
                
                <Grid  item   xs={9} sm={3} >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Middlename"
                label="Middlename"
                id="middlename"
                autoComplete="middlename"
                inputProps={{ minLength: 6 }}
                helperText="*If only applicable"
               
              />
              
                </Grid>
                <Grid  item  xs={9} sm={3} >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Middlename"
                label="Nickname"
                id="middlename"
                autoComplete="middlename"
                inputProps={{ minLength: 6 }}
                helperText="*If only applicable"
               
              />
              
                </Grid>
                <Grid  item  xs={10} sm={4} >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Age"
                label="Age"
                id="middlename"
                autoComplete="middlename"
                inputProps={{ minLength: 6 }}
                helperText="*If only applicable"
               
              />
              
                </Grid>
                <Grid item xs={12} sm={6} >
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
        sx={{ width: 350, ml:30, mt:2   }}
        renderInput={(params) => <TextField {...params} label="Sex/Gender" />}
      />
                </Grid>
                <Grid  item  xs={10} sm={4} >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="date of birth"
                label="Date of Birth"
                id="middlename"
                autoComplete="middlename"
               type="date"
                helperText="*If only applicable"
               
              />
              
                </Grid>
                <Grid item xs={12} sm={6} >
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
        options={optionsStatus}
        sx={{ width: 350, ml:30, mt:2   }}
        renderInput={(params) => <TextField {...params} label="Status" />}
      />
                </Grid>
                <Grid  item  xs={9} sm={4}>
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Address"
                label="Place of Birth "
                id="middlename"
                autoComplete="middlename"
                inputProps={{ minLength: 6 }}
                helperText="*If only applicable"
                
               
              />
              
                </Grid>
                <Grid item xs={9} sm={4}>
                  <TextField 
                   margin="normal"
                   error={error}
                   sx={{ width: 350, ml:15}}
                   onChange={({ target }) => setPassword(target.value)}
                   value={password} 
                   name="Address"
                   label="Height "
                   id="middlename"
                   autoComplete="middlename"
                   inputProps={{ minLength: 6 }}
                  />
                </Grid>
                <Grid item xs={9} sm={4}>
                  <TextField 
                   margin="normal"
                   error={error}
                   sx={{ width: 350, ml:15}}
                   onChange={({ target }) => setPassword(target.value)}
                   value={password} 
                   name="Address"
                   label="Weight "
                   id="middlename"
                   autoComplete="middlename"
                   inputProps={{ minLength: 6 }}
                  />
                </Grid>
                <Grid  item  xs={12} >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Address"
                label=" Present Address (Talon Uno) "
                id="middlename"
                autoComplete="middlename"
                inputProps={{ minLength: 6 }}
            
               
              />
              
                </Grid>
                
                <Grid  item  xs={12}>
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Address Province"
                label="Address (Provincial)"
                id="middlename"
                autoComplete="middlename"
                inputProps={{ minLength: 6 }}
                helperText="*If only applicable"
               
              />
              
                </Grid>
              
                </Grid>
                <br/>
                <Divider sx={{borderBottomWidth: 10}}/>
                <Grid container spacing={1}>
                <Grid  item  xs={12} >
                <Typography> Contact Person Incase of Emergency: </Typography>

                </Grid>
                <Grid  item  xs={12}  >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Name"
                label="Name"
               
                autoComplete="middlename"
                inputProps={{ minLength: 6 }}
                
               
              />
              
                </Grid>
                <Grid  item  xs={12} >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Contact Number"
                label="Relationship"
                id="middlename"
                autoComplete="middlename"
                inputProps={{ minLength: 6 }}
                helperText="*If only applicable"
               
              />
              
                </Grid>
                <Grid  item  xs={12}>
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Address"
                label="Address"
                id="middlename"
                autoComplete="middlename"
                inputProps={{ minLength: 6 }}
                helperText="*If only applicable"
               
              />
              
                </Grid>
                </Grid>
                <Grid container spacing={1}>
                <Grid  item  xs={12} sm={6} >
                <TextField
                
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Contact Number"
                label="Contact Number "
                id="middlename"
                autoComplete="middlename"
                inputProps={{ minLength: 6 }}
                helperText="*If only applicable"
               
              />
              
                </Grid>
                <Grid  item  xs={12} sm={6} >
                <TextField
                disabled
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPassword(target.value)}
                value={password} 
                name="Res"
                label="Res "
                id="middlename"
                autoComplete="middlename"
                inputProps={{ minLength: 6 }}
                helperText="*If only applicable"
               
              />
              
                </Grid>
                <Grid item xs={10} sm={4}>
                <Button 
             loading = {loading}
              type="submit"
              fullWidth
              variant="contained"
              color='error'
              sx={{ mt: 3, mb: 2 }}
              >
            Cancel
          </Button>
          </Grid>
                <Grid item xs={10} sm={4}>
                <Button 
             loading = {loading}
              type="submit"
              fullWidth
              variant="contained"
              color='secondary'
              sx={{ mt: 3, mb: 2 }}
              >
            Preview
          </Button>
                </Grid>
                <Grid item xs={10} sm={4}>
                <LoadingButton 
             loading = {loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
            Submit
          </LoadingButton>
                </Grid>
                <Grid container justifyContent="flex-end">
             
            </Grid>
              </Grid>
          </CardContent>
        </Card>
       </Box>
      </Grid>
    
    </>
  )
}

export default BarangayID