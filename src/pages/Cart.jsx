import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Layout from "../components/Layout/Layout";

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [userLocation, setUserLocation] = useState(""); 
  const DeliveryCharges = 0.08; 
  const [paymentOption, setPaymentOption] = useState("cash"); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: userLocation, 
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const removeFromCart = (menu) => {
    const updatedCart = cart.filter((item) => item.name !== menu.name);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const fetchUserLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        const approximateAddress = `Approximate Location: Lat ${latitude.toFixed(6)}, Lon ${longitude.toFixed(6)}`;
        setUserLocation(approximateAddress);
      });
    } else {
      setUserLocation("Location not available");
    }
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  const calculateTotalPrice = () => {
    const subTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const tax = subTotal * DeliveryCharges;
    return subTotal + tax;
  };

  const totalPrice = calculateTotalPrice();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const validateForm = () => {
    const errors = {};
    let valid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
      valid = false;
    }
    if (paymentOption === "credit_card") {
      if (!formData.cardNumber.trim()) {
        errors.cardNumber = "Card Number is required";
        valid = false;
      }
      if (!formData.expiryDate.trim()) {
        errors.expiryDate = "Expiry Date is required";
        valid = false;
      }
      if (!formData.cvv.trim()) {
        errors.cvv = "CVV is required";
        valid = false;
      }
    }

    setFormErrors(errors);
    return valid;
  };

  const handleCheckout = () => {
    if (validateForm()) {
      const orderData = {
        ...formData,
        paymentOption,
      };

      setCart([]);
      localStorage.removeItem("cart");
      alert("Order placed successfully!");
      alert("Your driver Ravi has picked the order and will be delivered in 30 minutes");
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "40%" }}>
          {cart.map((item, index) => (
            <Card key={index} style={{ marginBottom: "10px" }}>
              <CardContent>
                <div className="cardsContent">
                  <Typography variant="h5" gutterBottom component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="h5">${item.price}</Typography>
                  <Typography variant="body2">
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography variant="body2">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </div>
                <Button onClick={() => removeFromCart(item)}>Remove</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Typography variant="h6">DeliveryCharges : ${(totalPrice - cart.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2)}</Typography>
        <Typography variant="h6">Total: ${totalPrice.toFixed(2)}</Typography>

        <div>
        <Typography variant="h5" style={{ fontFamily: 'YourFontFamily', textDecoration: 'underline' }}>
  Checkout
</Typography>
          <form>
            <h5>Enter your Name</h5>
            <TextField
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              error={!!formErrors.name}
              helperText={formErrors.name}
            /><br/>
            <h5>Enter your Email address</h5>
            <TextField
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              error={!!formErrors.email}
              helperText={formErrors.email}
            /><br/>
            <h5>Enter your address</h5>
            <TextField
              name="address"
              label="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
              error={!!formErrors.address}
              helperText={formErrors.address}
            /><br/>

            <FormControl>
            <h5>Select the payment option</h5>
              <InputLabel htmlFor="payment-option"></InputLabel>
              <Select
                labelId="payment-option"
                id="payment-option"
                value={paymentOption}
                onChange={handlePaymentOptionChange}
                required
              >
                <MenuItem value="cash">Cash</MenuItem>
                <MenuItem value="credit_card">Credit Card</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
              </Select>
            </FormControl><br/>

            {paymentOption === "credit_card" && (
              <>
                <TextField
                  name="cardNumber"
                  label="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  error={!!formErrors.cardNumber}
                  helperText={formErrors.cardNumber}
                /><br/>
                <TextField
                  name="expiryDate"
                  label="Expiry Date"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                  error={!!formErrors.expiryDate}
                  helperText={formErrors.expiryDate}
                /><br/>
                <TextField
                  name="cvv"
                  label="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  error={!!formErrors.cvv}
                  helperText={formErrors.cvv}
                /><br/>
              </>
            )}

            <Button variant="contained" color="primary" onClick={handleCheckout}>
              Place Order
            </Button>
          </form>
        </div>
      </Box>
    </Layout>
  );
};

export default Cart;
