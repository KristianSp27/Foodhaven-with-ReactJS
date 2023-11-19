import React, { createContext, useState } from "react";
import { sample_foods } from "../data";

const CartContext = createContext(null);
export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(sample_foods.slice(1, 4).map((food) => ({ food, quantity: 1, price: food.price })));
  const [totalPrice, setTotalPrice] = useState(40);
  const [totalCount, setTotalCount] = useState(3);
  //placeholder values in the upper 3 rows
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}
