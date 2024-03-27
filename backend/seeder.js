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

//models -->

import Fitness from './models/fitnessModel.js';
import Lifestyles from './models/lifestyleModel.js';
import Nutrition from './models/nutritionModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import User from './models/userModel.js';

//Data management -->

const importData = async () => {
  try {
    await Order.deleteMany();
    await Fitness.deleteMany();
    await Lifestyles.deleteMany();
    await Nutrition.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

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
