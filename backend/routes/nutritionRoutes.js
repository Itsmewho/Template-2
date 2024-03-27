/** @format */
import asyncHandler from '../middleware/asyncHandler.js';
import Nutrition from '../models/nutritionModel.js';
import express from 'express';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const nutritions = await Nutrition.find({});
    res.json(nutritions);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const nutritions = await Nutrition.findById(req.params.id);
    if (nutritions) {
      return res.json(nutritions);
    }
    res.status(404);
    throw new Error('resource not found');
  })
);

export default router;
