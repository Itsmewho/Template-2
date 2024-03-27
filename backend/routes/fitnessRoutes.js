/** @format */
import asyncHandler from '../middleware/asyncHandler.js';
import Fitness from '../models/fitnessModel.js';
import express from 'express';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const fitnessBlog = await Fitness.find({});
    res.json(fitnessBlog);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const fitnessBlog = await Fitness.findById(req.params.id);
    if (fitnessBlog) {
      return res.json(fitnessBlog);
    }
    res.status(404);
    throw new Error('fitness not found');
  })
);

export default router;
