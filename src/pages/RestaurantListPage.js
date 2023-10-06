import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import { RestaurantList } from "../data/restaurant";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import "../App.css";
import { Menu } from "../pages/Menu";

function RestaurantListPage() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const openDetailsDialog = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const closeDetailsDialog = () => {
    setSelectedRestaurant(null);
  };

  return (
    <>
      <Layout>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {RestaurantList.map((restaurant, index) => (
            <Card key={index} sx={{ maxWidth: "350px" , maxHeight:"600px", display: "flex", m: 2 }}>
              <CardActionArea onClick={() => openDetailsDialog(restaurant)}>
                <CardMedia
                  sx={{ maxWidth: "400px", maxHeight: "500px" }} 
                  component={"img"}
                  src={restaurant.image}
                  alt={restaurant.name}
                />
                <CardContent>
                  <div className="cardsContent">
                    <Typography variant="h5" gutterBottom component={"div"}>
                      {restaurant.name}
                    </Typography>
                    {/* <Typography variant="h5">{restaurant.rating}</Typography> */}
                  </div>

                  <Typography variant="body2">{restaurant.description}</Typography>

                  <Typography variant="h6">
                    <Link to={`/location/${restaurant.place}`}>
                      {restaurant.place}
                    </Link>
                  </Typography>

                  <Typography variant="h6">Cuisine: {restaurant.cuisine}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Layout>

      <Dialog
        open={selectedRestaurant !== null}
        onClose={closeDetailsDialog}
        fullWidth
        maxWidth="md"
      >
        {selectedRestaurant && (
          <>
            <DialogTitle>{selectedRestaurant.name}</DialogTitle>
            <DialogContent>
              <Typography variant="h6">Rating: {selectedRestaurant.rating}</Typography>
              <Typography variant="h6">Working Hours:</Typography>
              <List>
                {selectedRestaurant.operatingHours.map((hours, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`${hours.day}: ${hours.hours}`} />
                  </ListItem>
                ))}
              </List>
              <Typography variant="h6">Customer Reviews:</Typography>
              <List>
                {selectedRestaurant.reviews.map((review, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`Rating: ${review.rating}`}
                      secondary={`Comment: ${review.comment}`}
                    />
                  </ListItem>
                ))}
              </List>
              <Link to="/menu">
                <Button variant="contained" color="primary">
                  See Menu
                </Button>
              </Link>
              <Button onClick={closeDetailsDialog} color="secondary">
                Close
              </Button>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
}

export default RestaurantListPage;
