/** @format */
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';
import express from 'express';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const products = await Product.findById(req.params.id);
    if (products) {
      return res.json(products);
    }
    res.status(404).json({ massage: 'products not found' });
  })
);

export default router;
