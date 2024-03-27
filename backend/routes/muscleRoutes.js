/** @format */
import asyncHandler from '../middleware/asyncHandler.js';
import Muscle from '../models/muscleModel.js';
import express from 'express';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const muscle = await Muscle.find({});
    res.json(muscle);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const muscle = await Muscle.findById(req.params.id);
    if (muscle) {
      return res.json(muscle);
    }
    res.status(404);
    throw new Error('muscle not found');
  })
);

export default router;
