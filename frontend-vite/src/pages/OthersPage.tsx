import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface OtherResource {
  id: number;
  title: string;
  description: string;
  link: string;
}

const OthersPage: React.FC = () => {
  const [resources, setResources] = useState<OtherResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get('/api/items/others');
        if (Array.isArray(response.data)) {
          setResources(response.data);
        } else {
          setError('Invalid data format');
        }
      } catch (error) {
        setError('Error fetching other resources');
      } finally {
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

  if (loading) return <p>Loading other resources...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold text-indigo-700">Other Resources</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.length > 0 ? (
          resources.map((resource) => (
            <div key={resource.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-indigo-600">{resource.title}</h2>
              <p className="mt-2 text-gray-700">{resource.description}</p>
              <a href={resource.link} className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">Access Resource</a>
            </div>
          ))
        ) : (
          <p>No other resources available.</p>
        )}
      </div>
    </div>
  );
};

export default OthersPage;
