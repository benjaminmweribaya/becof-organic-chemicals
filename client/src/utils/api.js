import axios from 'axios';

const api = axios.create({
    baseURL: "https://becof-web-app-backend.onrender.com",
});

export const getWeatherData = (location) => {
    return api.get(`/weather?location=${location}&apiKey=${process.env.REACT_APP_WEATHER_API_KEY}`);
};

export const getMarketplaceProducts = () => {
    return api.get('/marketplace');
};

export const getForumThreads = () => {
    return api.get('/forum');
};

export const diagnoseCrop = (imageData) => {
    return api.post('/diagnostics', imageData);
};

// Function to fetch educational resources
export const getEducationalResources = () => {
    return api.get('/api/resources'); // Adjust endpoint if necessary
};

// Function to process payments
export const processPayment = (paymentData) => {
    return api.post('/payment', paymentData); // Adjust endpoint if necessary
};

export default api;
