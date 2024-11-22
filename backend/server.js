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
const corsOptions = {
    origin: ['http://localhost:3000', 'https://becof-web-app-backend.onrender.com'], // Replace with actual URLs
    optionsSuccessStatus: 200,
};
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api/resources', resourcesRoute);

// Basic route
app.get('/', (req, res) => {
    res.send('Becof Web App Backend is Running');
});

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
