import { Router } from "express";
import admin from "../middleware/admin.mid";
import multer from "multer";

const router = Router();
const upload = multer();

router.post("/", admin, upload.single("image"));
