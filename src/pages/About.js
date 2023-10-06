import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
            margin: 0,
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To Epicurean Eats</Typography>
        <p>
          Discover the ultimate dining experience with our food ordering app, meticulously crafted to cater to your every culinary desire. Our app boasts a user-friendly interface, ensuring that you can effortlessly browse and place orders from a vast selection of restaurants, ranging from beloved local eateries to international cuisine hotspots. What sets us apart is the power to personalize your orders with ease, allowing you to create the perfect meal tailored to your preferences. Real-time order tracking keeps you in the loop, ensuring you'll know precisely when your mouthwatering meal will arrive at your doorstep. Plus, with state-of-the-art security measures in place, your payment details are safeguarded, providing you with peace of mind throughout the transaction process.
        </p>
        <br />
        <p>
          At our food ordering app, we're all about making your dining experiences not only enjoyable but also affordable. Explore a world of culinary delights while taking advantage of exclusive discounts, promotions, and special offers designed to satisfy your cravings without straining your wallet. Dive into the depths of culinary exploration and discover new favorites while being guided by the insights of our vibrant community. Read honest reviews and ratings from fellow foodies, ensuring that you make well-informed choices every time you order. For your convenience, we've also implemented features such as favorites and order history, enabling you to save your go-to orders and streamline future dining adventures.
        </p>
        <p>"Epicurean Eats" is not only a delightful phrase but also an intriguing concept. This term suggests a focus on high-quality, gourmet, and indulgent culinary experiences. It conjures images of savoring exquisite dishes, perhaps in fine dining establishments or exploring gourmet food options. Whether it's sampling artisanal cheeses, sipping rare wines, or indulging in decadent desserts, "Epicurean Eats" signifies a passion for the finer pleasures of the dining world. It's an invitation to embark on a gastronomic journey filled with flavor, sophistication, and a celebration of culinary craftsmanship.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
