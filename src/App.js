import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Pagenotfound from "./pages/Pagenotfound";
import { Login } from "./components/Layout/Login";
import { Register } from "./components/Layout/Register";
import SplashScreen from "./components/Layout/SplashScreen";
import RestaurantListPage from './pages/RestaurantListPage';
import RestaurantDetailsPage from './pages/RestaurantDetailsPage';
import MenuPage from './pages/MenuPage';
import TermsAndConditions from './components/Layout/Sidebar/TermsConditions';
import FAQ from './components/Layout/Sidebar/Faq';
import PrivacyPolicy from './components/Layout/Sidebar/PrivacyPolicy';
import Menu from "./pages/Menu";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/resListPage" element={<RestaurantListPage />} />
          <Route path="/restaurant/:restaurantId" element={<RestaurantDetailsPage />} />
          <Route path="/menu/:restaurantId" element={<MenuPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
