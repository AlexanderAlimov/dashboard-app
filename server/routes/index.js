import express from "express";
import controller from "../controllers/controller";

const router = express.Router();

router.get("/api/categories", controller.getCategories);

router.get("/api/products", controller.getProducts);

router.get("/api/filterProducts", controller.getFilterProducts);

router.post("/api/products", controller.addProduct);

router.post("/api/categories", controller.addCategory);

router.delete("/api/products/:id", controller.removeProduct);

router.delete("/api/categories/:id", controller.removeCategory);

export default router;
