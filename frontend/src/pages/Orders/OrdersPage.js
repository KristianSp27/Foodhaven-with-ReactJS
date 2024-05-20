import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

const initialState = {};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default function OrdersPage() {
  const [{ allStatus, orders }, dispatch] = useReducer(reducer, initialState);

  const { filter } = useParams();

  useEffect(() => {}, [filter]);
  return <div>OrdersPage</div>;
}
