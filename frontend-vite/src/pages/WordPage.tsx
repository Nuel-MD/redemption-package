import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface WordItem {
  id: number;
  title: string;
  description: string;
  link: string;
}

const WordPage: React.FC = () => {
  const [wordItems, setWordItems] = useState<WordItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWordItems = async () => {
      try {
        const response = await axios.get('/api/items/word');
        if (Array.isArray(response.data)) {
          setWordItems(response.data);
        } else {
          setError('Invalid data format');
        }
      } catch (error) {
        setError('Error fetching word items');
      } finally {
        setLoading(false);
      }
    };
    fetchWordItems();
  }, []);

  if (loading) return <p>Loading word items...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold text-indigo-700">Word Resources</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {wordItems.length > 0 ? (
          wordItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-indigo-600">{item.title}</h2>
              <p className="mt-2 text-gray-700">{item.description}</p>
              <a href={item.link} className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">Read More</a>
            </div>
          ))
        ) : (
          <p>No word resources available.</p>
        )}
      </div>
    </div>
  );
};

export default WordPage;
