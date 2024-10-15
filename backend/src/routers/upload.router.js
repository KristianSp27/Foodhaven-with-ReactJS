import { Router } from "express";
import admin from "../middleware/admin.mid";
import multer from "multer";
import handler from "express-async-handler";
import { BAD_REQUEST } from "../constants/httpStatus";
import { configCloudinary } from "../config/cloudinary.config";

const router = Router();
const upload = multer();

router.post(
  "/",
  admin,
  upload.single("image"),
  handler(async (req, res) => {
    const file = req.file;
    if (!file) {
      res.status(BAD_REQUEST).send();
      return;
    }

    const imageUrl = await uploadImageToCloudinary(req.file?.buffer);
  })
);

const uploadImageToCloudinary = (imageBuffer) => {
  const cloudinary = configCloudinary();

  return new Promise((resolve, reject) => {
    if (!imageBuffer) reject(null);

    cloudinary.uploader
      .upload_stream((error, result) => {
        if (error || !result) reject(error);
        else resolve(result.url);
      })
      .end(imageBuffer);
  });
};
