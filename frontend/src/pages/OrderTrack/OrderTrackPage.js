import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trackOrderById } from "../../services/orderService";
import NotFound from "../../components/NotFound/NotFound";
import classes from "./orderTrackPage.module.css";

export default function OrderTrackPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    orderId &&
      trackOrderById(orderId).then((order) => {
        setOrder(order);
      });
  }, []);

  if (!orderId) return <NotFound message="Order not found!" linkText="Go to the homepage" />;
  return (
    order && (
      <div className={classes.container}>
        <div className={classes.content}>
          <h1>Order #{order.id}</h1>
          <div className={classes.header}>
            <div>
              <strong>Date</strong>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
