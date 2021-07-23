import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(null);
export { CartContext };

const initialCart = {
  keyboard001: { units: 1, inWishlist: false },
  keyboard002: { units: 2, inWishlist: true },
  keyboard003: { units: 3, inWishlist: false },
  keyboard004: { units: 4, inWishlist: true },
  keyboard005: { units: 5, inWishlist: false },
};

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer((cartState, action) => {
    // local states here
    const key = action.payload;
    console.log(cartState[key].units);
    let newUnits = -1;

    switch (action.type) {
      case "increaseCountInCart":
        newUnits = cartState[key].units + 1;
        return {
          ...cartState,
          [key]: { units: newUnits },
        };

      case "decreaseCountInCart":
        newUnits = cartState[key].units - 1;
        return {
          ...cartState,
          [key]: { units: newUnits },
        };

      case "removeFromCart":
        newUnits = 0;
        return {
          ...cartState,
          [key]: { units: newUnits },
        };

      default:
        break;
    }

    console.log("Current cart:", cartState);
  }, initialCart);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
