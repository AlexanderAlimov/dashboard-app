import express from 'express';
import db from '../db/db';

const router = express.Router();

router.get('/api/categories', (req,res,next) => {
	res.status(200).send({
    success: 'true',
    message: 'categories retrieved successfully',
    categories: db.categories,
  });
})

router.get('/api/products', (req,res,next) => {
	res.status(200).send({
    success: 'true',
    message: 'products retrieved successfully',
    products: db.products,
  });
})


export default router;