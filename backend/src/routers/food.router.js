import { Router } from "express";
import { sample_foods, sample_tags } from "../data.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(sample_foods);
});

export default router;
