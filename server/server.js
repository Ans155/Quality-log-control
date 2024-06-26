const express = require('express');
let dotenv = require('dotenv').config()
const loggerMiddleware = require('./middleware/logger');
const errorHandler = require('./utils/errorHandler');
const api1Router = require('./controllers/api');
const connectDB = require("./config/db");
const cors = require('cors');
const app = express();

connectDB();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api1', api1Router);
// Add other API routers as needed

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
