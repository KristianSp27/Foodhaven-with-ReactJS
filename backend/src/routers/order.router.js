import { Router } from "express";
import handler from "express-async-handler";
import authMid from "../middleware/auth.mid";
import { BAD_REQUEST } from "../constants/httpStatus";

const router = Router();
router.use(auth);

router.post(
  "/create",
  handler(async (req, res) => {
    const order = req.body;

    if (order.items.length <= 0) res.status(BAD_REQUEST).send("The cart is empty!");
  })
);