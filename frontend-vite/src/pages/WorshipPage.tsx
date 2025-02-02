import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WorshipItem {
  id: number;
  title: string;
  description: string;
  link: string;
}

const WorshipPage: React.FC = () => {
  const [worshipItems, setWorshipItems] = useState<WorshipItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWorshipItems = async () => {
      try {
        const response = await axios.get('/api/items/worship');
        if (Array.isArray(response.data)) {
          setWorshipItems(response.data);
        } else {
          setError('Invalid data format');
        }
      } catch (error) {
        setError('Error fetching worship items');
      } finally {
        setLoading(false);
      }
    };
    fetchWorshipItems();
  }, []);

  if (loading) return <p>Loading worship items...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold text-indigo-700">Worship Resources</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {worshipItems.length > 0 ? (
          worshipItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-indigo-600">{item.title}</h2>
              <p className="mt-2 text-gray-700">{item.description}</p>
              <a href={item.link} className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">Download</a>
            </div>
          ))
        ) : (
          <p>No worship items available.</p>
        )}
      </div>
    </div>
  );
};

export default WorshipPage;
