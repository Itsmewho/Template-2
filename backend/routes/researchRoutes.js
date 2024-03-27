/** @format */
import asyncHandler from '../middleware/asyncHandler.js';
import Research from '../models/researchModel.js';
import express from 'express';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const research = await Research.find({});
    res.json(research);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const research = await Research.findById(req.params.id);
    if (research) {
      return res.json(research);
    }
    res.status(404);
    throw new Error('Research not found');
  })
);

export default router;
