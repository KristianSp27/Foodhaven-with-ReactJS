import React, { useReducer } from "react";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
const initialState = {};

export default function OrdersPage() {
  const [{ allStatus, orders }, dispatch] = useReducer(reducer, initialState);
  return <div>OrdersPage</div>;
}
