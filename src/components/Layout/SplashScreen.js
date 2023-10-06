import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../../images/lottie.json'; 
import epicurean from './epicurean.png';
import './SplashScreen.css';

const SplashScreen = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="centered-content">
        {showAnimation ? (
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay={true}
          />
        ) : (
          <>
            <div className='loginIntro'>
              <img src={epicurean} alt="App Image" className="centered-image" />
              <Link to="/login">
                <button className='btn btn-outline-danger'>Go to Login</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
