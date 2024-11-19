import React, { useState } from 'react';

function CropDiagnostics() {
    const [image, setImage] = useState(null);
    const [diagnosis, setDiagnosis] = useState('');

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
        </div>
    );
}

export default CropDiagnostics;
