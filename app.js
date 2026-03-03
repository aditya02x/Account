const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const db = require('./src/DB/DB.js');  
const userRoutes = require('./src/routes/User.route.js');

const app = express();
app.use(express.json());
app.use('/api/users', userRoutes); // Use user routes for /api/users endpoints

// 1️⃣ Connect to MongoDB

// 3️⃣ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

