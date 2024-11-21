const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const resourcesRoute = require('./routes/resources');

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
