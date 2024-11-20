const mongoose = require('mongoose');
require('dotenv').config();
const joi = require('joi');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
};

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Simple email validation regex
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: /^\d{10,15}$/, // Matches phone numbers with 10-15 digits
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
  }
);

const validateClient = (data) => {
  const schema = joi.object({
    name: joi.string().trim().required(),
    email: joi.string().trim().email().required(),
    phone: joi.string()
      .trim()
      .pattern(/^\d{10,15}$/) // Matches phone numbers with 10-15 digits
      .required(),
    subject: joi.string().trim().required(),
    message: joi.string().trim().required(),
  });

  return schema.validate(data); // Returns detailed errors
};

const clientModel = mongoose.model('Client', clientSchema);

module.exports = { connectDB, clientModel, validateClient };
