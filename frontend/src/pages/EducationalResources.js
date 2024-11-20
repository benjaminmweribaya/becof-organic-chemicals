import React, { useState, useEffect } from 'react';
import { getEducationalResources } from '../utils/api';

function EducationalResources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await getEducationalResources();
        setResources(response.data);
      } catch (error) {
        console.error('Error fetching resources:', error);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Educational Resources</h1>
      <p>Learn more about sustainable farming practices.</p>
      <ul className="mt-4">
        {resources.map((resource) => (
          <li key={resource.id} className="mt-2">
            <a
              href={resource.url}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EducationalResources;
