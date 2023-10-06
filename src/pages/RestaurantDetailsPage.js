import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { RestaurantList } from "../data/restaurant";

function RestaurantDetailsPage() {
  const { id } = useParams();
  const restaurant = RestaurantList[id];
  
  // State to manage the cart
  const [cart, setCart] = useState([]);
  
  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem !== item);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Rating: {restaurant.rating}</p>
      <p>Location: {restaurant.place}</p>
      <p>Cuisine: {restaurant.cuisine}</p>

      <h2>Menu:</h2>
      <ul>
        {restaurant.menu.map((item, itemIndex) => (
          <li key={itemIndex}>
            {item.dish} - {item.price} - Cuisine: {item.cuisine}
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart:</h2>
      <ul>
        {cart.map((cartItem, cartIndex) => (
          <li key={cartIndex}>
            {cartItem.dish} - {cartItem.price} - Cuisine: {cartItem.cuisine}
            <button onClick={() => removeFromCart(cartItem)}>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantDetailsPage;
