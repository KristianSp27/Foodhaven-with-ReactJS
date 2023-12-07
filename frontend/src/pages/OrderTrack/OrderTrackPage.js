import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trackOrderById } from "../../services/orderService";
import NotFound from "../../components/NotFound/NotFound";

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
  return <div>OrderTrackPage</div>;
}
