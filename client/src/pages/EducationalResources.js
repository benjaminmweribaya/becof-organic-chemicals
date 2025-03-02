import React, { useState, useEffect } from 'react';
import { getEducationalResources } from '../utils/api';

function EducationalResources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await getEducationalResources();
        setResources(response.data);
      } catch (error) {
        setError('Failed to fetch resources. Please try again later.');
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-700">Educational Resources</h1>
      <p className="text-gray-600 mt-2">
        Explore articles and guides to learn more about sustainable farming practices.
      </p>

      {loading && (
        <div className="mt-6">
          <p className="text-blue-500">Loading resources...</p>
        </div>
      )}

      {error && (
        <div className="mt-6">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-green-600">
                {resource.title}
              </h2>
              <p className="text-gray-500 text-sm mt-2">{resource.description}</p>
              <a
                href={resource.url}
                className="text-blue-600 hover:underline mt-4 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EducationalResources;
