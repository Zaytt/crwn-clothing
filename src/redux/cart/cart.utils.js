export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((item) => item.id === cartItemToRemove.id);
  if (existingCartItem) {
    // Check if its last item on cart, if it is, remove it
    if (existingCartItem.quantity === 1) {
      return clearItemFromCart(cartItems, cartItemToRemove);
    }

    // if not, map the array and return a copy but one less item
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToRemove.id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      } else {
        return cartItem;
      }
    });
  }
};

export const clearItemFromCart = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
