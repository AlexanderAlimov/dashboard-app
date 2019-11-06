import express from "express";
import controller from "../controllers/controller";

const { getCategories, getProducts } = controller;

const router = express.Router();

router.get("/api/categories", getCategories);

router.get("/api/products", getProducts);

export default router;
