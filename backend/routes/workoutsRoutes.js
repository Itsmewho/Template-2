/** @format */
import asyncHandler from '../middleware/asyncHandler.js';
import Workouts from '../models/workoutModel.js';
import express from 'express';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const workouts = await Workouts.find({});
    res.json(workouts);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const workouts = await Workouts.findById(req.params.id);
    if (workouts) {
      return res.json(workouts);
    }
    res.status(404);
    throw new Error('Workouts not found');
  })
);

export default router;
