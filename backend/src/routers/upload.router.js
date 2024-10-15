import { Router } from "express";
import admin from "../middleware/admin.mid";
import multer from "multer";
import handler from "express-async-handler";
import { BAD_REQUEST } from "../constants/httpStatus";

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
