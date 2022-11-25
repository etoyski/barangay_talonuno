import { Autocomplete, Box, Button, Card, CardContent, Divider, Grid, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import moment from 'moment';


const options = ['Male', 'Female'];
const optionsStatus = ['Single', 'Engaged','Married','Divorced','Widowed'];
const docs = ['Barangay ID', 'Barangay Clearance', 'Barangay ID'];

const BarangayForm = ({step,setActiveStep,setFormdata}) => {

  const today = moment();
  // console.log(
  //   "Today's date is: " + 
  //   today.format('YYYY-MM-DD')
  // );
  const [irbi, setIrbi] = useState('');
  const [region, setRegion] = useState('NCR');
  const [province, setProvince] = useState('Metro Manila');
  const [city, setCity] = useState('Las Piñas');
  const [barangay, setBarangay] = useState('Talon Uno');
  const [date, setDate] = useState( today.format('YYYY-MM-DD'));
  const [precintno, setPrecintno] = useState('');
 // const [vrr, setVrr] = useState('');
  const [contactno , setContactno] = useState('');
  const [lastname, setLastname] = useState(''); 
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [status, setStatus] = useState('');
  const [birthplace, setBirthplace] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [presentaddress, setPresentaddress] = useState('');
  const [provincialaddress, setProvincialaddress] = useState('');
  //emergencycontact
  const [emergencyname, setEmergencyname] = useState('');
  const [emergencyrelationship, setEmergencyrelationship] = useState('');
  const [emergencyaddress, setEmergencyaddress] = useState('');
  const [emergencynumber, setEmergencynumber] = useState('');
  const [emergencyres, setEmergencyres] = useState('');

  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false); 
  const [inputValue, setInputValue] = React.useState('');
  const [inputValue2, setInputValue2] = React.useState('');
  const [inputValue3, setInputValue3] = React.useState('');
  const [value, setValue] = React.useState(options[0]);
  const [value2, setValue2] = React.useState(optionsStatus[0]);
  // const [value3, setValue3] = React.useState(docs[0]);
    //console.log("sd")
  const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      setActiveStep((currentState)=> currentState +1 );
      console.log('pak')
      setFormdata(( currentState ) => {
        let data = { 
          irbi, 
          region, 
          city, 
          province, 
          barangay, 
          date, 
          precintno,
         
          contactno, 
          middlename,
          nickname,
          age, 
          value, 
          dob, 
          value2, 
          birthplace, 
          height, 
          weight, 
          lastname, 
          firstname,
          presentaddress,
          provincialaddress,
          emergencyname,
          emergencyaddress,
          emergencynumber,
          emergencyrelationship,
          emergencyres
        }

        return{
          ...currentState, 
          brgyform: data,
      }
      })
    };
    const handleCancel = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Cancelled!',
            'Your request has been cancelled.',
            'success'
          )
          navigate('/mainpage')
        }
      })
    }
  return (
    <>
    <Container maxWidth="xl">
    <Grid component={Paper} elevation={16} sx={{p:2}}>
    
    <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Card style={{ maxWidth: 1500,height:3000, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            
              <Typography gutterBottom variant="h5" >
           SANGGUNIANG BARANGAY OF TALON UNO
          </Typography> 
            
         
              <Typography gutterBottom variant="body2" >
           INDIVIDUAL RECORD OF BARANGAY INHABITANT
          </Typography> 
             
          
          <br/>
            <Typography variant="body2" color="error" component="p" gutterBottom>
              Please fill out the  values
          </Typography> 
          {/* <Autocomplete
        value={value3}
        onChange={(event, newValue3) => {
          setValue3(newValue3);
        }}
        inputValue={inputValue3}
        onInputChange={(event, newInputValue3) => {
          setInputValue3(newInputValue3);
        }}
        id="controllable-states-demo"
        options={docs}
        sx={{ width: 250 }}
        renderInput={(params) => <TextField {...params} label="Request Type" />}
      /> */}

          <br/>
          <Divider/>
          <br/>
          <Grid container spacing={1}>
          <Grid item  xs={12} sm={6}>
          <Typography> 
              IRBI NO. : 
              <TextField 
                required
                name='irbi'
                onChange={(e) => setIrbi(e.target.value)}
                value={irbi}
                variant="standard"
                type="number"
              />
               </Typography>
          </Grid>
          <Grid item  xs={12} sm={6}>
            <Typography> Date: 
              <TextField 
              disabled
                    type="text"
                    label="Date Today"
                    name="date"
                    variant="outlined"  
                    error={error}
                    sx={{ml:2,mb:1}}
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
           />           </Typography>
           </Grid>
          <Grid item  xs={12} sm={6}>
            <Typography> 
              Region : 
              <TextField 
              sx={{ml:2,mb:1}}
                disabled
                name='NCR'
                label='NCR'
                defaultValue="NCR"
                value={region} 
                
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
                    onChange={(e) => setPrecintno(e.target.value)}
                value={precintno}
                    //onChange={handleChange} 
           />          
                 
          </Grid>
                    <Grid item  xs={12} sm={6}>
            <Typography> 
              Province : 
              <TextField 
                disabled
                name='Metro Manila'
                label='Metro Manila'
                defaultValue="Metro Manila" 
                value={province}
                sx={{ml:2,mb:1}}
              />
            </Typography>
          </Grid>
         
          <Grid item   xs={12} sm={6}>
            <Typography> 
              City/Municipality : 
              <TextField 
                sx={{ml:2,mb:1}}
                disabled
                defaultValue="Las Piñas" 
                name='Las Piñas'
                label='Las Piñas'
                value={city}
              />
            </Typography>

          </Grid>
           <Grid item  xs={12} sm={6} >
          
          <TextField 
                required
                sx={{ml:2,mb:1}}
                type="number" 
                label="Contact No." 
                name="Contact No."
                variant="outlined"  
                error={error}
                onChange={(e) => setContactno(e.target.value)}
                value={contactno}
       />          
          </Grid>
          <Grid item  xs={12} sm={6} >
            <Typography> 
              Barangay : 
              <TextField 
                disabled
                defaultValue="Talon Uno" 
                name='Talon Uno'
                label='Talon Uno'
                sx={{ml:2,mb:1}}
                onChange={(e) => setBarangay(e.target.value)}
                value={barangay}
              />
            </Typography>
          </Grid>
         
          </Grid>
          <br/>
          <Divider/>
          <br/>
              <Grid container spacing={1}>
                <Grid item    xs={12} sm={6}>
                  <TextField 
                  
                  margin="normal"
                  
                  error={error}
                  fullWidth
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}  
                  id="lastname"
                  label="Lastname "
                  name="lastname"
                  type="text"
                  autoComplete="lastname"
                  autoFocus
                  required
                  />
                </Grid>
                
                <Grid  item   xs={12} sm={6} >
                <TextField
                margin="normal"
                
                
                error={error}
                fullWidth
                onChange={({ target }) => setFirstname(target.value)}
                value={firstname} 
                name="Firstname"
                label="firstname"
                id="firstname"
                autoComplete="firstname"
                inputProps={{ minLength: 2 }}
                required
              />
              
                </Grid>
                
                <Grid  item    xs={12} sm={6} >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setMiddlename(target.value)}
                value={middlename} 
                name="Middlename"
                label="Middlename"
                id="middlename"
                autoComplete="middlename"
                helperText="*If only applicable"
                
              />
              
                </Grid>
                <Grid  item  xs={12} sm={6} >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setNickname(target.value)}
                value={nickname} 
                name="Nickname"
                label="Nickname"
                id="nickname"
                autoComplete="Nickname"
                helperText="*If only applicable"
                
              />
              
                </Grid>
                <Grid  item  xs={12} sm={6} >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setAge(target.value)}
                value={age} 
                name="Age"
                label="Age"
                id="age"
                autoComplete="age"
                type="number"
                required
              />
              
                </Grid>
                <Grid item xs={12} sm={6} >
                <Autocomplete
                required
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
        // sx={{ width: 350, ml:30, mt:2   }}
        renderInput={(params) => <TextField {...params} label="Sex/Gender" />}
      />
                </Grid>
                <Grid  item   xs={12} sm={6} >
                  <Typography> Date of Birth:</Typography>
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setDob(target.value)}
                value={dob} 
                name="date of birth"
                
                id="Date of Birth"
                autoComplete="Date of Birth"
               type="date"
               required
               
              />
              
                </Grid>
                <Grid item  xs={12} sm={6} >
                <Autocomplete
                required
        value={value2}
        onChange={(event, newValue2) => {
          setValue2(newValue2);
        }}
        inputValue={inputValue2}
        onInputChange={(event, newInputValue2) => {
          setInputValue2(newInputValue2);
        }}
        id="status"
        label="Status"name="status"
        options={optionsStatus}
        // sx={{ width: 350, ml:30, mt:2   }}
        renderInput={(params1) => <TextField  {...params1} defaultValue="Status" label="Status"name="status" id='status' />}
      />
                </Grid>
                <Grid  item  xs={12} sm={6}>
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setBirthplace(target.value)}
                value={birthplace} 
                name="Place of Birth"
                label="Place of Birth "
                id="Place of Birth"
                autoComplete="Place of Birth"
                required
               
              />
              
                </Grid>
                <Grid item  xs={12} sm={6}>
                  <TextField 
                   margin="normal"
                   error={error}
                   required
                   onChange={({ target }) => setHeight(target.value)}
                   value={height} 
                   name="Height"
                   label="Height "
                   id="Height"
                   autoComplete="Height"
                   InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                       cm
                      </InputAdornment>
                    ),
                  }}
                  type="number"
                  />
                </Grid>
                <Grid item  xs={12} sm={6}>
                  <TextField 
                   margin="normal"
                   error={error}
                   required
                   onChange={({ target }) => setWeight(target.value)}
                   value={weight} 
                   name="weight"
                   label="Weight "
                   id="weight"
                   autoComplete="weight"
                   InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                       kg
                      </InputAdornment>
                    ),
                  }}
                  type="number"
                  />
                </Grid>
                <Grid  item   xs={12} sm={6} >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setPresentaddress(target.value)}
                value={presentaddress} 
                name="Present Address"
                label=" Present Address (Talon Uno) "
                id="Present Address"
                autoComplete="Present Address"
                inputProps={{ minLength: 6 }}
                required
               
              />
              
                </Grid>
                
                <Grid  item   xs={12} sm={6}>
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setProvincialaddress(target.value)}
                value={provincialaddress} 
                name="Address Province"
                label="Address (Provincial)"
                id="middlename"
                autoComplete="middlename"
                helperText="*If only applicable"
                required
              />
              
                </Grid>
              
                </Grid>
                <br/>
                <Divider sx={{borderBottomWidth: 10}}/>
                <Grid container spacing={1}>
                <Grid  item   xs={12} sm={6} >
                <Typography> Contact Person Incase of Emergency: </Typography>

                </Grid>
                <Grid  item   xs={12} sm={6}  >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setEmergencyname(target.value)}
                value={emergencyname} 
                name="Name"
                label="Name"
                required
                autoComplete="Name"
                
               
              />
              
                </Grid>
                <Grid  item   xs={12} sm={6} >
                <TextField
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setEmergencyrelationship(target.value)}
                value={emergencyrelationship} 
                name="Relationship"
                label="Relationship"
                id="Relationship"
                autoComplete="Relationship"
                required
               
              />
              
                </Grid>
                <Grid  item   xs={12} sm={6}>
                <TextField
                required
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setEmergencyaddress(target.value)}
                value={emergencyaddress} 
                name="Address"
                label="Address"
                id="Address"
                autoComplete="Address"
             
              />
              
                </Grid>
                </Grid>
                <Grid container spacing={1}>
                <Grid  item  xs={12} sm={6} >
                <TextField
                required
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setEmergencynumber(target.value)}
                value={emergencynumber} 
                name="Contact Number"
                label="Contact Number "
                id="Contact Number"
                autoComplete="Contact Number"
                type="number"
              />
              
                </Grid>
                <Grid  item  xs={12} sm={6} >
                <TextField
                
                margin="normal"
                error={error}
                fullWidth
                onChange={({ target }) => setEmergencyres(target.value)}
                value={emergencyres} 
                name="Res"
                label="Res "
                id="Res"
                autoComplete="Res"
                helperText="*If only applicable"
               
              />
              
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button 
             loading = {loading}
              onClick={handleCancel}
              fullWidth
              variant="contained"
              color='error'
              sx={{ mt: 3, mb: 2 }}
              >
            Cancel
          </Button>
          </Grid>
                
                <Grid item xs={12} sm={6}>
                <LoadingButton 
             loading = {loading}
              type="submit"
              
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
              >
            next
          </LoadingButton>
                </Grid> 
                <Grid container justifyContent="flex-end">
             
            </Grid>
              </Grid>
          </CardContent>
        </Card>
       </Box>
      </Grid>
      </Container>
    </>
  )
}

export default BarangayForm