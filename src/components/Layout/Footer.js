import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* Social Media Icons with Links */}
          <Link href="https://www.instagram.com">
            <InstagramIcon />
          </Link>
          <Link href="https://www.twitter.com">
            <TwitterIcon />
          </Link>
          <Link href="https://www.github.com">
            <GitHubIcon />
          </Link>
          <Link href="https://www.youtube.com">
            <YouTubeIcon />
          </Link>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          EPICUREAN || Need Food? Come here
        </Typography>
        
        
        {/* Footer Links */}
        <Box mt={3}>
          <Link href="/TermsAndConditions" color="inherit" mx={2}>
            Terms and Conditions
          </Link>
          <Link href="/PrivacyPolicy" color="inherit" mx={2}>
            Privacy Policy
          </Link>
          <Link href="/faq" color="inherit" mx={2}>
            FAQ
          </Link>
          <Link href="/contact" color="inherit" mx={2}>
            Contact
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
