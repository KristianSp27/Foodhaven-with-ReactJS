import { connect, set } from "mongoose";

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
