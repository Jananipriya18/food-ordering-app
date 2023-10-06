import React, { useState } from "react";
import { MenuList } from "../data/data";
import Layout from "../components/Layout/Layout";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [itemQuantities, setItemQuantities] = useState({});

  const addToCart = (menu) => {
    // Check if the item already exists in the cart by name
    const existingItemIndex = cart.findIndex((item) => item.name === menu.name);

    if (existingItemIndex !== -1) {
      // If it exists, update the quantity in both cart and itemQuantities state
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);

      const updatedQuantities = { ...itemQuantities };
      updatedQuantities[menu.name] += 1;
      setItemQuantities(updatedQuantities);
    } else {
      // If it doesn't exist, add it to the cart with quantity 1
      const newItem = { ...menu, quantity: 1 };
      setCart((prevCart) => [...prevCart, newItem]);

      const updatedQuantities = { ...itemQuantities };
      updatedQuantities[menu.name] = 1;
      setItemQuantities(updatedQuantities);
    }

    // Update the local storage with the updated cart data
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Calculate the total bill
  const calculateTotalBill = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {MenuList.map((menu, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "390px",
              display: "flex",
              m: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <div className="cardsContent">
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="h5">{menu.price}</Typography>
                </div>
                <Typography variant="body2">{menu.description}</Typography>
                <Button onClick={() => addToCart(menu)}>
                  <Typography>
                    <AddShoppingCartIcon />
                  </Typography>
                  ADD TO CART ({itemQuantities[menu.name] || 0})
                </Button>
                <Link to="/Cart">View Cart</Link>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <div>
        <Typography variant="h6">Total Bill: ${calculateTotalBill()}</Typography>
      </div>
    </Layout>
  );
};

export default Menu;

