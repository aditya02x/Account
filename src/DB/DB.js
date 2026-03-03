const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB URI from .env
const ConnectDB = process.env.MONGODB_URI;

// Connect to MongoDB (no options needed for Mongoose 7+)
mongoose.connect(ConnectDB)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

module.exports = mongoose;