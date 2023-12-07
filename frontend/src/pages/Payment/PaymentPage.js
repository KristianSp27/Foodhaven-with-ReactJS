import React, { useState, useEffect } from "react";
import classes from "./paymentPage.module.css";
import { getNewOrderForCurrentUser } from "../../services/orderService";
import Title from "../../components/Title/Title";

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
        </div>
      </div>
    </>
  );
}
