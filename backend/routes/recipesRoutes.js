/** @format */
import asyncHandler from '../middleware/asyncHandler.js';
import Recipes from '../models/recipesModel.js';
import express from 'express';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const recipes = await Recipes.find({});
    res.json(recipes);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const recipes = await Recipes.findById(req.params.id);
    if (recipes) {
      return res.json(recipes);
    }
    res.status(404);
    throw new Error('recipes not found');
  })
);

export default router;
