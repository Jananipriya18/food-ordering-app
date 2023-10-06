import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import { styled } from '@mui/material/styles';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  transition: 'box-shadow 0.3s ease-in-out',
  margin: '10px',
  
  '&:hover': {
    boxShadow: `0 0 0 3px ${theme.palette.error.main}`,
  },
}));

const StyledIcon = styled(EmojiFoodBeverageIcon)(({ theme }) => ({
  fontSize: 100,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
}));

const StyledIcondeli = styled(DeliveryDiningIcon)(({ theme }) => ({
  fontSize: 100,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
}));

const StyledIconfast = styled(FastfoodIcon)(({ theme }) => ({
  fontSize: 100,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
}));

const StyledIconlocal = styled(LocalDiningIcon)(({ theme }) => ({
  fontSize: 100,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
}));

const StyledIcontake = styled(TakeoutDiningIcon)(({ theme }) => ({
  fontSize: 100,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'rotate(360deg)',
  },
}));

const CardContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export default function ActionAreaCard() {
  return (
    <CardContainer>
      <StyledCard>
        <CardActionArea>
          <CardMedia
            component="div"
            height="100"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1 0 auto',
            }}
          >
            <StyledIcon />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Feast in Every Bite 🍽️
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
      <StyledCard>
        <CardActionArea>
          <CardMedia
            component="div"
            height="100"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1 0 auto',
            }}
          >
            <StyledIconfast />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Quick and Delicious 🍔
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
      <StyledCard>
        <CardActionArea>
          <CardMedia
            component="div"
            height="80"
            
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1 0 auto',
              width:'maxWidth',
            }}
          >
            <StyledIcondeli />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              We Deliver to your Doorstep🚚
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
      <StyledCard>
        <CardActionArea>
          <CardMedia
            component="div"
            height="100"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1 0 auto',
            }}
          >
            <StyledIconlocal />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Supporting Local Flavors 🏡
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
      <StyledCard>
        <CardActionArea>
          <CardMedia
            component="div"
            height="100"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1 0 auto',
            }}
          >
            <StyledIcontake />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Takeout Treasures 🥡
            </Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </CardContainer>
  );
}
