const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const resourcesRoute = require('./routes/resources');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/resources', resourcesRoute);

// Basic route
app.get('/', (req, res) => {
    res.send('Becof Web App Backend is Running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
