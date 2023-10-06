import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import { FeatureList, FeatureCard, features } from "../components/Layout/FeatureList";
import ActionAreaCard from "../components/Layout/Homeextra";

const Home = () => {
  return (
    
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button className="btn">ORDER NOW</button>
          </Link>
        </div>
      </div>
      <FeatureList/>
      <ActionAreaCard/>
    </Layout>
    
  );
};

export default Home;
