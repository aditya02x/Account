const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const db = require('./src/DB/DB.js');  
const userRoutes = require('./src/routes/User.route.js');
const cors = require("cors");

const app = express(); // <-- create app first

// ✅ CORS must be after app is created
app.use(cors({ origin: "http://localhost:5176", credentials: true }));

// Body parser
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));