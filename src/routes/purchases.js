import express from "express";
import {
  listPurchases,
  addPurchase,
  cancelPurchase,
} from "../controllers/purchasesController.js";

const router = express.Router();

router.get("/", listPurchases);
router.post("/add", addPurchase);
router.post("/cancel/:id", cancelPurchase);

export default router;
