const express = require('express');
const Resource = require('../models/Resource');
const router = express.Router();

// Get all resources
router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

// Add a new resource
router.post('/', async (req, res) => {
    const { title, url, description } = req.body;
    try {
        const newResource = new Resource({ title, url, description });
        const savedResource = await newResource.save();
        res.status(201).json(savedResource);
    } catch (error) {
        res.status(400).json({ message: 'Invalid Data', error: error.message });
    }
});

module.exports = router;
