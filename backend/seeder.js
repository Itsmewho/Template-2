/** @format */
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

//Data -->

import fitnessBlog from './data/fitness.js';
import lifestyles from './data/lifestyle.js';
import nutritions from './data/nutrition.js';
import products from './data/products.js';
import users from './data/users.js';
import workouts from './data/workouts.js';
import muscle from './data/muscle.js';
import recipes from './data/recipes.js';
import research from './data/research.js';

//models -->

import Fitness from './models/fitnessModel.js';
import Lifestyles from './models/lifestyleModel.js';
import Nutrition from './models/nutritionModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import User from './models/userModel.js';
import Recipes from './models/recipesModel.js';
import Muscle from './models/muscleModel.js';
import Workouts from './models/workoutModel.js';
import Research from './models/researchModel.js';

//Data management -->

const importData = async () => {
  try {
    await Order.deleteMany();
    await Fitness.deleteMany();
    await Lifestyles.deleteMany();
    await Nutrition.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Workouts.deleteMany();
    await Muscle.deleteMany();
    await Recipes.deleteMany();
    await Research.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleWorkouts = workouts.map((workouts) => {
      return { ...workouts, user: adminUser };
    });
    await Workouts.insertMany(sampleWorkouts);

    const sampleMuscle = muscle.map((muscle) => {
      return { ...muscle, user: adminUser };
    });
    await Muscle.insertMany(sampleMuscle);

    const sampleRecipes = recipes.map((recipes) => {
      return { ...recipes, user: adminUser };
    });
    await Recipes.insertMany(sampleRecipes);

    const sampleResearch = research.map((research) => {
      return { ...research, user: adminUser };
    });
    await Research.insertMany(sampleResearch);

    const sampleFitness = fitnessBlog.map((fitness) => {
      return { ...fitness, user: adminUser };
    });

    await Fitness.insertMany(sampleFitness);
    const sampleLifestyles = lifestyles.map((lifestyles) => {
      return { ...lifestyles, user: adminUser };
    });
    await Lifestyles.insertMany(sampleLifestyles);

    const sampleNutrition = nutritions.map((nutrition) => {
      return { ...nutrition, user: adminUser };
    });
    await Nutrition.insertMany(sampleNutrition);

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    console.log('Data imported!');
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Fitness.deleteMany();
    await Lifestyles.deleteMany();
    await Nutrition.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Workouts.deleteMany();
    await Muscle.deleteMany();
    await Recipes.deleteMany();
    await Research.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
