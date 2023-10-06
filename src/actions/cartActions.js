// cartActions.js
export const addToCart = (menu) => {
    return {
      type: 'ADD_TO_CART',
      payload: menu,
    };
  };
  
  export const removeFromCart = (menu) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: menu,
    };
  };
  