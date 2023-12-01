import { connect, set } from "mongoose";
import { UserModel } from "../models/user.model";
import { FoodModel } from "../models/food.model";
import { sample_users } from "../data";
import { sample_foods } from "../data";
import bcrypt from "bcryptjs";

const PASSWORD_HASH_SALT_ROUNDS = 10;

set("strictQuery", true);

export const dbConnect = async () => {
  try {
    connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};
