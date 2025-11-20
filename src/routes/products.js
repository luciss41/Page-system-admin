import express from "express";
import {
  getProducts,
  addProductPage,
  addProduct,
  editProductPage,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/add", addProductPage);
router.post("/add", addProduct);

router.get("/edit/:id", editProductPage);
router.post("/edit/:id", updateProduct);

router.post("/delete/:id", deleteProduct);

export default router;
