import React, { useState, useEffect } from "react";
import classes from "./paymentPage.module.css";
import { getNewOrderForCurrentUser } from "../../services/orderService";
import Title from "../../components/Title/Title";
import OrderItemsList from "../../components/OrderItemsList/OrderItemsList";
import Map from "../../components/Map/Map";

export default function PaymentPage() {
  const [order, seetOrder] = useState();

  useEffect(() => {
    getNewOrderForCurrentUser().then((data) => seetOrder(data));
  }, []);

  if (!order) return;
  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Title title="Order form" fontSize="1.6rem" />
          <div className={classes.summary}>
            <div>
              <h3>Address: </h3>
              <span>{order.address}</span>
            </div>
          </div>
          <OrderItemsList order={order} />
        </div>
        <div className={classes.map}>
          <Title title="Your location" fontSize="1.6rem" />
          <Map readonly={true} location={order.addressLatLng} />
        </div>
      </div>
    </>
  );
}
