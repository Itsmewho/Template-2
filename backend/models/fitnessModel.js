/** @format */

import mongoose from 'mongoose';

const fitnessSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mobileImage: {
      type: String,
      required: true,
    },
    detailImage: {
      type: String,
      required: true,
    },
    detailMobileImage: {
      type: String,
      required: true,
    },
    longtext: {
      type: String,
      required: true,
    },
    longtext1: {
      type: String,
      required: true,
    },
    longtext2: {
      type: String,
      required: true,
    },
    longtext3: {
      type: String,
      required: true,
    },
    longtext4: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
    },
    short1: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    slogan: {
      type: String,
      required: true,
    },
    meta: {
      type: String,
      required: true,
    },
    metaDescription: {
      type: String,
      required: true,
    },
    metaTitle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Fitness = mongoose.model('Fitness', fitnessSchema);

export default Fitness;
