import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Paper } from '@mui/material';
import Third from "../../assets/bg6.jpg";
import { Box, Container } from '@mui/system';
import { experimentalStyled as styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function ActionAreaCard() {
   
  return (
    <Container maxWidth="md" component="main" sx={{p:2}}>
    <Grid container spacing={5} alignItems="flex-end">
        <Grid
          item
          xs={12}
          s ={8}
          md={4}
        >
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="
          https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Office of the <b>President</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid
          item
          xs={12}
          s ={8}
          md={4}
        >
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="
          https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Office of the <br/> <b>Mayor</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid
          item
          xs={12}
          s ={8}
          md={4}
        >
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
            height="160"
          image="
          https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Office of the <b>Barangay Captain</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid> 
    </Grid>
  </Container>
 
        
   
  
  
  
 
    

  
  );
}