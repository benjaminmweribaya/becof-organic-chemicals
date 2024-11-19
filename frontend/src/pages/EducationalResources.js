import React from 'react';

function EducationalResources() {
  const resources = [
    { title: 'Sustainable Farming 101', link: '#' },
    { title: 'Pest Control Without Chemicals', link: '#' },
    { title: 'Understanding Soil Health', link: '#' },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">Educational Resources</h1>
      <p>Learn more about sustainable farming practices.</p>
      <ul className="mt-4">
        {resources.map((resource, index) => (
          <li key={index} className="mb-2">
            <a
              href={resource.link}
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
