import express from "express";
import controller from "../controllers/controller";
import authController from "../controllers/auth-controller";

const router = express.Router();

router.get("/api/categories", controller.getCategories);

router.get("/api/products", controller.getProducts);

router.post("/api/products", controller.addProduct);

router.post("/api/categories", controller.addCategory);

router.delete("/api/products/:id", controller.removeProduct);

router.delete("/api/categories/:id", controller.removeCategory);

router.put("/api/products/:id", controller.editProduct);

router.post("/api/login", authController.login);

router.post("/api/register", authController.register);

export default router;
