import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { getAll } from "../../services/orderService";
import classes from "./ordersPage.module.css";
import Title from "../../components/Title/Title";

const initialState = {};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ORDERS_FETCHED":
      return { ...state, orders: payload };
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
  return (
    <div className={classes.container}>
      <Title title="Orders" margin="1.5rem 0 0 .2rem" fontSize="1.9rem" />
    </div>
  );
}
