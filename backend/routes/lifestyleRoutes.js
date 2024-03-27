/** @format */
import asyncHandler from '../middleware/asyncHandler.js';
import Lifestyle from '../models/lifestyleModel.js';
import express from 'express';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const lifestyles = await Lifestyle.find({});
    res.json(lifestyles);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const lifestyles = await Lifestyle.findById(req.params.id);
    if (lifestyles) {
      return res.json(lifestyles);
    }
    res.status(404);
    throw new Error('resource not found');
  })
);

export default router;
