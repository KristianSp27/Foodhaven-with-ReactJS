import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { getAll } from "../../services/orderService";

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

  useEffect(() => {
    getAll(filter).then((orders) => {
      dispatch({ type: "ORDERS_FETCHED", payload: orders });
    });
  }, [filter]);
  return <div>OrdersPage</div>;
}
