/** @format */
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errormiddleware.js';

import productRoutes from './routes/productsRoutes.js';
import nutritionRoutes from './routes/nutritionRoutes.js';
import lifestyleRoutes from './routes/lifestyleRoutes.js';
import fitnessRoutes from './routes/fitnessRoutes.js';
import workoutRoutes from './routes/workoutsRoutes.js';
import recipesRoutes from './routes/recipesRoutes.js';
import researchRoutes from './routes/researchRoutes.js';
import muscleRoutes from './routes/muscleRoutes.js';
import users from './data/users.js';

const port = process.env.PORT || 5000;
connectDB(); //
const app = express();

app.get('/', (req, res) => {
  res.send('API is running,.');
});

app.use('/api/products', productRoutes);
app.use('/api/nutritions', nutritionRoutes);
app.use('/api/fitnessBlog', fitnessRoutes);
app.use('/api/lifestyles', lifestyleRoutes);
app.use('/api/products', productRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/muscle', muscleRoutes);
app.use('/api/research', researchRoutes);
app.use('/api/recipes', recipesRoutes);

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const users = users.find((f) => f._id === req.params.id);
  res.json(users);
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on: ${port}`));
