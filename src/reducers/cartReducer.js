// cartReducer.js
const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Update the cart in Redux state
        const updatedCart = [...state.cart];
        const existingItemIndex = updatedCart.findIndex(
          (item) => item.name === action.payload.name
        );
        if (existingItemIndex !== -1) {
          updatedCart[existingItemIndex].quantity += 1;
        } else {
          updatedCart.push({ ...action.payload, quantity: 1 });
        }
  
        // Update local storage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
  
        return {
          ...state,
          cart: updatedCart,
        };
  
      case 'REMOVE_FROM_CART':
        // Update the cart in Redux state
        const filteredCart = state.cart.filter(
          (item) => item.name !== action.payload.name
        );
  
        // Update local storage
        localStorage.setItem('cart', JSON.stringify(filteredCart));
  
        return {
          ...state,
          cart: filteredCart,
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  