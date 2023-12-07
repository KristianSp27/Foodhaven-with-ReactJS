import { PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React, { useEffect } from "react";
import { useLoading } from "../../hooks/useLoading";

export default function PaypalButtons({ order }) {
  return (
    <PayPalScriptProvider
      options={{
        clientId: "ATEQWrK4wIEniqiEMfssBdsMYfKBHs4AcC4Z49Ljt6TiBNGp7_b82TtZEMHHbmN_hQNpSjEj97eKexeh",
      }}
    >
      <Buttons order={order} />
    </PayPalScriptProvider>
  );
}

function Buttons({ order }) {
  const [{ isPending }] = usePayPalScriptReducer();
  const { showLoading, hideLoading } = useLoading();
  useEffect(() => {
    isPending ? showLoading() : hideLoading();
  });

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "EUR",
            value: order.totalPrice,
          },
        },
      ],
    });
  };
}
