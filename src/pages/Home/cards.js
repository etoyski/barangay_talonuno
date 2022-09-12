import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid, Paper } from '@mui/material';
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
    <Container maxWidth="xl" component="main" sx={{p:3, background: '#D1D1D1'}}   >
    <Grid container spacing={5} alignItems="flex-end" >
        <Grid
          item
          xs={12}
          s ={8}
          md={4}
          lg={3}
        >
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="
          https://newsinfo.inquirer.net/files/2022/07/pasted-image-0.png"
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Office of the  <br/><b>President</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
          <Button variant="text" href="https://pbbm.com.ph/">
            Visit
          </Button> 
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid
          item
          xs={12}
          s ={8}
          md={4}
          lg={3}
        >
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="
          https://ptvnews.ph/wp-content/uploads/2022/06/VP-Sara-Duterte-scaled.jpg  "
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Office of the <br/><b> Vice President</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
          <Button variant="text" href="https://ovp.gov.ph/">
            Visit
          </Button> 
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <Grid
          item
          xs={12}
          s ={8}
          md={4}
          lg={3}
        >
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="
          data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISEhESERIREBgSGBEaERIYEhgRGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjQhISE0NDE0NDQ0NDQxNDQ0NDQ0NDQ0NDE0NDQxMTQ0NDQ0NDQ0NDQ0NDQxNDQ0MTQ0NDQxNP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIEAwUHBgj/xAA+EAACAQIDBQUFBgUDBQEAAAABAgADEQQSIQUGMUFRImFxgaEHE1KRsRQyQmLB8CNygpLRorLhM3PD0vFT/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQACAgICAgIDAAAAAAAAAAECEQMSITFBUSIyBIFCYXH/2gAMAwEAAhEDEQA/AOjgSYESiZAJwdyAkrQAjtAQElaAEdoChHCAoo4QFFHCAoQhAIo4WgKEcIEDKON2jTpWDZmJ4KouZHbe0FoUy5NsoPK+trzje2dtvVctmudV1ysbA9bRJtLdOpYnevD0xepmX8thm+U0+J9pGGGiUqr+JRR9TOVNV6xpUXmLnztN9WezoVT2kVCezQRfFyfpaWMH7RRmHvqXZJFyim4B52JN7dJzgWtp6TGSY6w7V33Zm2MNiRehWSpYXKgkOB1KNZh5iX5884XFVKTrUp1Hp1F1DqbEf59Z1DczfQYi1HFFVrAgLUACo99ACPwvfyPcdJm46amW3tYR2haRSijtCAjIkScVoGMiQImYiQIkaYcsJktCBbAkgIwJICVkARgSVo7QIgRxwgK0RElFAjC0lFaBG0JIiKAopKK0BQjhAjaarb+2KeFpl2ZV8evcOc2deoEVmOgVSxPIAakziO9W8JxVRiNKYY5BpcjkT++csm0t0rbw7xV8SxDsRTvf3fD5iaRDzmIksfE+vhN1gNh1qg0pkeI0mrZjPKY45ZXw07m8SAdJ6OruvXUaJfu5zV4vZFWnxQjyMkzxrV4sp8KhOXUG4Pj6wz5hofIns/8AEkEuLMD+/wBZhagVbqOo5jwmnPSZDDl5c/nLCVrKCpKsh0Ycr9f3Y6cJANprpK1VSpv6wenbtx94PtlC1Qj39LsuPiH4XH6989NafP8Au5tp8HXp1U4A2dOAKH7wP75Cd7wmISrTSohzI6hge4zFmnSXbLFaStFIFCMxQImRImSRIgY4SVo5GlsCTAiAkwJWRCOEIUI4QFFHCAopKKArRWkooUoRwgRhJERGB4P2lbf91T+yUz/ErJdz8NK9reLWI8L905IVLsBxLG03m9eO9/jMTV1ymplUHkigKvhoL+cjuvg1qYqmW+6rA2+JuAH76Te+s2zJ2y09HuZulmYVay9lT2QeZnRaODRdAoHlM1JQAABy8pZQTy5Xtd165+M1GD7Kp/CJTxmxqdQfdHjabgQiSM965fvFujYFqY1vfTgZ4OtRKko4sQeHf3T6ExFMMCCLzm+9+7tyaiCxt85vDPXiplh2m57c8C5T3GQqL6fSZqylSQRqDa0ro9zY+RnoeVjC/P8AdxOvey7aJfDPQY3NBgV/7b3I+TKw+U5OvHhxPrPXezraJp4xEN7OrU2/laxU252ZR/eZMmo7HaRtJKY7TDSEREnaIiBGIyVooEbQjhAuASQgIQghCEAhCEAijhAUUlFAUI4QFCEcBSntXEilQq1DwSmz+JANh5mwl2eP9peONLBMoNjVfL35QCfrlgcdxTEvUJOYl2N+upm73Dw7PjFY3y01Zz48B9Z5sHMubkDYjpwnQ/ZxQQioR94qL36fsS8l1jWuKbyj3QeuQCjU0HJXBLMO8j7stYLaAZijqUccr3U96meY21hsbnX3YBp8S494zDoMqkE8ucxbJxeL0FemOVnVixB42bmBw1J/58/xt6usvh7+YK+IRBdjYfOQwdXOgbumh21tVaWuVna4CqBqSdBb/Mbc8cN2y/DanaSnglW3xe7YC3XwlTGZKqMAQw+hnlm30rITmw1QBSQ11WwAbKe0HOt+Vj14az0uEdK4FRVALAHMNDqOfWTKV1wknmOT72YI0ahIFgxnm3txH7P6Tqe/uzg9IkDtLr6TlV7Hxno4st4vNz46u/taQZhf9+M2GxnNPFYdwbH3qr5k6eoE1uHNv3ylik5D0yNSlRGHeVYETdc8X0LSa6gjgQDMomKgtkUDgFEy2mFELQhAVoiJKKBG0UnCBZEcBCVBCOKQKEcUAhCEAhCEBQjhAUI4QpTwPtRp56dNbXC0MTU8GT3Vj6n5z388tvlhRUNIN916WJon+unn/wDGYHD6a2UsBcFAbfmDAfW8937LahD4gG/BB6vPFoP4LdVYg9bG2g7p7X2a1KZFcD/qh0cnW3uygCjxDB7+Ijk/Wt8X7R1OmBB7AcJVTEWHWYxVDMczWYWOXu7p59u3S7WEGVCOv6wGDRgCyqdOYBjqsMq24k6THUdgVykFuOW/KUm/hmGAp/An9ghUAQaaacJOji1YdCNCOYPfNftKvbgYy1rZhjlctV5reZzUV1HQzkuPwzU2YEaZrefGdiqUb5i08Ztbd+tilrvSQZaRzlvyjj9JeHL8tOn8jGdd/TxtE3lvZyl6tNPicD585TwwsWU6EG31Eu7LdaeJo1G+6lRcx6KDx8uPlPVZ4fPxuq+hMO11Hhr4jj6zLK+DPZHDW57tTeWJzbKEcIChCFoBCFoQLIjhCVBCEIChHFIFCOEBQhCAQhCAQhCATV7wUc1EuNTRYVQALkhfvqPFC485tJBxpA+cdo0jRr1qYN1zsAeqHVfQieg9mdfLjnp8qmGb+5XUj0zSpvzgloYuoiG6ZQV6heSnw4eAE8/sfaj4bE0cQuppNcr8SnRl81J87TVx7Y1ccuuUr6GekQoK8Ry5TSJjqeJd6RoVPeUgGZDYMFN7Mtr3W44ibfZuPSvTV0YOjqGVhzUwr4BS4qBQKi3Ae3aAPEBhqOE8skeyZfaph8OlrNUrALwVm1HgRYmXMPiKFO9swvxYhmPmdTLGHeqNDmPeGB/3RVabubOzBfhzWJ155Z064yeGblu2X1/1T+1JVtUoMKgLZSym6GxsRfqIVqWYjNy1mwFNVAAAVVFgALADuE120sUqqbcTOWTeF+I0O28UKau17BVnKqG9eKQV0R+xiGJK/lvoPDunpN+Npdj3St2nOvhznPkUhrdDO/BjqW1w/lZ7sxnwtLUOe/E3ufGbbAqGqILXDED56TUKtiL8Dzmwwl1qIOFnFj56H6TtXld/2AScNSzasqBCerL2SfSbG01O67XwydVZgded7kevpNvOboUUlFAUI4QFCEIFmOKOVBFHCAoo4QFCEJAQhCAoQhAIQhADMVV7A3NrC5PQdZhx+0aNBC9arTpqObMB8hxM5bvhv59pV8NhQyUmFnqnR3X4VH4VPzMujbxG820zicVWqg9lnOX+QaL6TUKh49eXO0zZM72HMzZUMKjBrjXx0H+Zq5SJMe1X9z953wVQU3YnDu1yPgY/jXu6jnx48e34DHJVQMpBuBzvPnGqozgDkfSet3T27Uw6hLkoDYDmvh3TlyT/ACjvxXf43+ncEImHE4hEBZiBaeIG9TkaEfIytX25m7TEueQ/CPKcLk9E4PO7XqMVtPS/AHgOZ/4nlNu7ZWmhYm7HgOZPd0HfNTtHb+UEnU95sJ43H46pVcsSWJ+nTuE3hx3K7vpnk5MeOax9sWPxLVKhdzdj36AdBK5QZeGsstQOXhroZhGYHp1Uz1T/AE8OW/kkBI8Br4TMaxXtjiuq3GlwRa8WUm/JefD1tMbqWsoH4tB3nQCDVd73OripSZ0/6b5KiDoGRez6T0U0G6Gz/s+HSne5REQnqVXU+ZYzfzm2UI4oBCEIChHCBnjAhHKgijihChCEiiKOEBRwhAUUc128G1FweGqV2192vZX4nOir8yPK8o1G9+9qYJRTpgVMS4utP8KL8b29BznO8dvRjqgIfFVAG4hMqDwGUAzSviXrVHrVGLu7Fi3Vj+ndCoLAmakZ2qYlyxu7Mx6sxJ+ZlfE2RLji2ndJViTylY1NAG4fvQyqWDcLdzyBAHMk9JlWoeJ0F+Ewst7W0AEklRcuoub3mbGscvhncAsGt+E69SdBNvu7h8xsdQWIv3i36ETTUwz6cB+k99uTszNh6jG9xWup6WVQf1E58njF14LLmtJscG1jbyk9qYP7Ph6lXsOUA7OTUksF4nxv5TdUqTKQDKm8BRaFQ1GyoUIJ566ad9+HfPJj5se7L9bpzLE1mqMXY3J5WtbuA6SsFN+Fh6TIX4AlfQeklWYgqt9LH5z3S68PnWTLygWy6nTy1kEqZjci/eeETBXsL5WB4cj59Y2Q31VrdBa1vnGzqy1MWoByjM3Unh4cprnrEm40PG/O/WXqz9mwpgaWuTw8B+s15pnn8ohlbHaNy99cLiEp0ajChiNRZyMlRybko/DMSfumx6XtPcz5fCdRPXbt794vBgIzfaaI0907HMo/I+pUdxuOgE1Z9OcydyMBNFuvvRQ2hTZqWZKiWz0WtnW/Ai2jKbcfnab2YaIiEcLQFCEIGeORkhKyIQhAUUcIUoRwgKEcJBGcv9rm1+3Rwan7o984/Mbqg+WY/wBQnUGIAJOgGpPdPnba+0Ti8bWrng9QlR0RdEHkAs1EqVJbAD5+MWLbQCZaQvKuJa7TSMIWYWonl8pnEdoRWWieZ8pIUBMxgIGSjTsLzrG6mD91haYYWLLnI53Y5v19JzbZOG99Wo0hrnqKCPy8W/0gzsFV1poSxCqi3JJAVVHEk9J5+e+o9X8ee6w4gKis7sERQWLE2AUczOW707bbFNlS60UPZXgWPxt+g5DxMt707yNim93TuuHQ6DgXYcGYdOg8zrw81UYAXMvFxa832nNzb/GelWo4y5CdSvS//wAkVY2AbUDgdPKZEp6ljxP7tMmWd7NvPLYwNTFr3iU1OTad4ltKV+MzKgkkauX0qLTqHi3oJlSgBrxPUzOBGRLpndqs9ESpUp2mxMxVqdxCHu5tmpgsSmIp65DZ0+Om1s6edgR0IU8p9DYHF069OnWptnSogqK3VWFxccj3T5pdbGdS9kG2syVcE51S9el/IxAqKPBiG/rbpJZ8rjXTIo4phsrQjhAyiSEiIxKiUIo4QjFHC0BQjtFAIQhCtTvTiTSwOLqA2K4dwD+Zlyj1Inzxgj2vI+pndfaRiBT2bXHOoUpjxLhj6KZwnAC9RR1msWa3aCykzXudZsq2i2mtYShCSigIQEQzWjMiqljltck2A7zwge09n+EVWqYuoQtOimUMSAudhd2J7l/3SlvRvI2KY06ZK0Ab9C7DgW6DoPM8raza21glGnhKbfwaerW41a3Fm71B4Dz6W0yZ349kdBx8zOcw3l2rpc9Y9YzZ+Q1PT/Jhk5nU+gk0QDQRlDOjmhaTVYwsnAQEI4QoiaMyF7mAmkWMnaY3MCpiElrdzahwmLoYgGwp1AX460j2ag/sLedpCotxKVVLGEfT1+mo6wmi3Ix32jZ2EqE5mFEU2PMvTJpsT4lL+c3sw2IQhIqYkhICSEqJQgI4QoRxQCFoQgIiAjhA5v7XMZZcNQB+8XqkeAyr9W+U5nsehq1Q8iVUfU/pPR+0TaHvto1ADdaIFEf0glv9Rb5TzWz6lmQcje/qZuemb7bOvwlFxLVd7ytaFY7SSrJWgBCFl5zDWrZTYatbh/mZveCxI1HLQgnQcvG48pXFMk3PPUwMVOmSczak/uwlxRaIJYSYEBgyRiCyQhQBAwtERAI7xRGAO1hMOcKLnSNzeVsW+oX4RfzhFhawIuJBdTIILL3mZaYgMiYaiZhMzcJAcRA6h7H8bmw1egTrRrhwOiVF/wDdH+c6DONezDGe62l7smyYqiyW6un8RfRan907NM323PRQhCZVIRiEJUOSEIQHCEIQoQhAImawJ5AE/KEIHzbXrmpVqVDxqO7nxYk/rKuzm7Tdxt8zeOE2yuk3Mg0IQJrwkwIQgCrc36fWSKwhCouJEQhAlCEIBCEIUjIuYQhGK9pQpfxKhJ4X+kIQi43GZEGkIQFU4TGnGEIF7Z2M9xXw+J//ABrI5/kB7Y81zDzn0KYQkyahQhCYV//Z"
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Office of the <br/> <b>Mayor</b>
          </Typography>
          <Button variant="text" href="https://laspinascity.gov.ph/">
            Visit
          </Button>
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
          lg={3}
        >
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
            height="160"
          image="
          https://pbs.twimg.com/media/FcbOHzmagAAQgp5?format=jpg&name=small"
          alt="bg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Office of the <b>Barangay Captain</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           
          </Typography>
          <Button variant="text" href="https://barangay-talonuno.vercel.app/home">
            Visit
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid> 
    </Grid>
  </Container>
 
        
   
  
  
  
 
    

  
  );
}