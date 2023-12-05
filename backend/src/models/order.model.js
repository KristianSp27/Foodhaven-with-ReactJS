import { model, Schema } from "mongoose";
import { OrderStatus } from "../constants/orderStatus.js";
import { FoodModel } from "./food.model.js";

export const LatLngSchema = new Schema(
  {
    lat: { type: String, required: true },
    lng: { type: String, required: true },
  },
  {
    _id: false,
  }
);
