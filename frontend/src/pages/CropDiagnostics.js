import React, { useState, useEffect } from 'react';
import { getWeatherData } from '../utils/api';

function CropDiagnostics() {
    const [image, setImage] = useState(null);
    const [diagnosis, setDiagnosis] = useState('');
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const location = 'Nairobi'; // Replace with dynamic location
                const response = await getWeatherData(location);
                setWeather(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeather();
    }, []);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const submitImage = async () => {
        if (!image) return alert("Please upload an image!");
        // Simulate API call
        setDiagnosis("Healthy crop! No signs of pests or disease.");
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">Crop Diagnostics</h1>
            <p>Upload an image of your crop to receive a diagnosis.</p>
            <div className="mt-4">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="block mb-4"
                />
                <button
                    onClick={submitImage}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </div>
            {diagnosis && <p className="mt-4 text-xl">{diagnosis}</p>}
            {weather && (
                <div className="mt-4 bg-green-100 p-4 rounded">
                    <h2 className="text-lg font-semibold">Weather Forecast</h2>
                    <p>Location: {weather.location}</p>
                    <p>Temperature: {weather.temperature}°C</p>
                    <p>Condition: {weather.condition}</p>
                </div>
            )}
        </div>
    );
}

export default CropDiagnostics;
