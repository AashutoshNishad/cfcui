import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Icon } from '@mui/material';
import img from "./img1.jpeg"
export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 , minWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DSA Carnival
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Time: 12:00 pm 
           <br />
           Date: 12/04/03
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
