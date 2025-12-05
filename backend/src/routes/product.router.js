import express from "express";

import { getProducts } from "../controllers/productController.js";
import { insertDummyProducts } from "../controllers/seddController.js";

const router = express.Router();

router.get("/products",getProducts)
router.post("/seed-products",insertDummyProducts);

export default router;