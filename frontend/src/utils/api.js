import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
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

export default api;
