/** @format */
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

import fitnessBlog from './data/fitness.js';
import lifestyles from './data/lifestyle.js';
import nutritions from './data/nutrition.js';

const port = process.env.PORT || 5000;
connectDB(); //
const app = express();

app.get('/', (req, res) => {
  res.send('API is running,.');
});

app.get('/api/fitnessBlog', (req, res) => {
  res.json(fitnessBlog);
});
app.get('/api/lifestyles', (req, res) => {
  res.json(lifestyles);
});
app.get('/api/nutritions', (req, res) => {
  res.json(nutritions);
});

app.get('/api/fitnessBlog/:id', (req, res) => {
  const fitnessB = fitnessBlog.find((f) => f._id === req.params.id);
  res.json(fitnessB);
});
app.get('/api/lifestyles/:id', (req, res) => {
  const lifestyle = lifestyles.find((f) => f._id === req.params.id);
  res.json(lifestyle);
});
app.get('/api/nutritions/:id', (req, res) => {
  const nutrtion = nutritions.find((f) => f._id === req.params.id);
  res.json(nutrtion);
});

app.listen(port, () => console.log(`Server is running on: ${port}`));
