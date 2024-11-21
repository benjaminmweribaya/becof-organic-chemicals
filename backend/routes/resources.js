const express = require('express');
const router = express.Router();

// Mock Data for Educational Resources
const resources = [
  {
    id: 1,
    title: 'Integrated Farm Management',
    description: 'Learn about optimizing farm resources for balanced outcomes.',
    url: 'https://example.com/integrated-farm-management',
  },
  {
    id: 2,
    title: 'Sustainable Agriculture',
    description: 'Principles of sustainable farming for long-term viability.',
    url: 'https://example.com/sustainable-agriculture',
  },
  {
    id: 3,
    title: 'Water Conservation Techniques',
    description: 'Efficient methods for using and saving water on farms.',
    url: 'https://example.com/water-conservation',
  },
  {
    id: 4,
    title: 'Soil Health Management',
    description: 'Improve soil fertility using organic and biofertilizers.',
    url: 'https://example.com/soil-health-management',
  },
];

// GET /api/resources - Fetch educational resources
router.get('/', (req, res) => {
  try {
    res.status(200).json(resources);
  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ message: 'Failed to fetch resources' });
  }
});

module.exports = router;
