import { Router } from "express";
import handler from "express-async-handler";
import auth from "../middleware/auth.mid.js";
import { BAD_REQUEST } from "../constants/httpStatus.js";
import { OrderModel } from "../models/order.model.js";
import { OrderStatus } from "../constants/orderStatus.js";

const router = Router();
router.use(auth);

router.post(
  "/create",
  handler(async (req, res) => {
    const order = req.body;
    console.log(order);
    if (order.items.length <= 0) res.status(BAD_REQUEST).send("The cart is empty!");
    console.log(req.user.id);
    await OrderModel.deleteOne({
      user: req.user.id,
      status: OrderStatus.NEW,
    });

    const newOrder = new OrderModel({ ...order, user: req.user.id });
    await newOrder.save();
    res.send(newOrder);
  })
);

router.put(
  //to update an existing item
  "/pay",
  handler(async (req, res) => {
    const { paymentId } = req.body;
    const order = await getNewOrderForCurrentUser(req);
    if (!order) {
      res.status(BAD_REQUEST).send("Order not found!");
      return;
    }

    order.paymentId = paymentId;
    order.status = OrderStatus.PAID;
    await order.save();
  })
);

router.get(
  "/newOrderForCurrentUser",
  handler(async (req, res) => {
    const order = await getNewOrderForCurrentUser(req);
    if (order) res.send(order);
    else res.status(BAD_REQUEST).send();
  })
);

const getNewOrderForCurrentUser = async (req) => await OrderModel.findOne({ user: req.user.id, status: OrderModel.NEW });

export default router;
