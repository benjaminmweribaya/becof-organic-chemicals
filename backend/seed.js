const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Resource = require('./models/Resource');

// Load environment variables
dotenv.config();

// Connect to the database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedResources = [
    {
        title: 'Sustainable Farming Techniques',
        url: 'https://example.com/sustainable-farming',
        description: 'A comprehensive guide to sustainable farming practices.',
    },
    {
        title: 'Organic Fertilizer Benefits',
        url: 'https://example.com/organic-fertilizers',
        description: 'Learn how organic fertilizers improve soil health.',
    },
    {
        title: 'Integrated Pest Management',
        url: 'https://example.com/integrated-pest-management',
        description: 'Techniques for managing pests using eco-friendly methods.',
    },
];

const seedDatabase = async () => {
    try {
        await Resource.deleteMany();
        console.log('Existing resources removed.');

        await Resource.insertMany(seedResources);
        console.log('Seed data added successfully.');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error.message);
        process.exit(1);
    }
};

seedDatabase();
