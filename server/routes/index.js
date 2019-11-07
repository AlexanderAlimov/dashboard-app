import express from "express";
import controller from "../controllers/controller";

const { getCategories, getProducts, getFilterProducts } = controller;

const router = express.Router();

router.get("/api/categories", getCategories);

router.get("/api/products", getProducts);

router.get("/api/filterProducts", getFilterProducts);

export default router;
