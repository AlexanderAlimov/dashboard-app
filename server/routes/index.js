import express from "express";
import productController from "../controllers/product-ctrl";
import authController from "../controllers/auth-ctrl";
import categoryController from "../controllers/category-ctrl";
import { isloggedIn } from "../utils/utils";

const router = express.Router();

router.get("/api/categories", isloggedIn, categoryController.getCategories);

router.get("/api/products", isloggedIn, productController.getProducts);

router.post("/api/products", isloggedIn, productController.addProduct);

router.post("/api/categories", isloggedIn, categoryController.addCategory);

router.delete("/api/products/:id", isloggedIn, productController.removeProduct);

router.delete(
  "/api/categories/:id",
  isloggedIn,
  categoryController.removeCategory
);

router.put("/api/products/:id", isloggedIn, productController.editProduct);

router.post("/api/login", authController.login);

router.post("/api/register", authController.register);

router.get("/api/logout", authController.logout);

export default router;
