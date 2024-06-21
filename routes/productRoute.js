import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoCnntroller,
  updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();
//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//Get Product
router.get("/get-product", getProductController);

//Get Single Product
router.get("/get-product/:slug", getSingleProductController);
//Get  photo
router.get("/product-photo/:pid", productPhotoCnntroller);
//delete product
router.delete("/delete-product/:pid", deleteProductController);
//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);
//product filter
router.post("/product-filters", productFilterController);
//product count
router.get("/product-count", productCountController);
//product per page
router.get("/product-list/:page", productListController);
export default router;
