import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [verse, setVerse] = useState('');

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        const response = await axios.get('/api/bible-verse');
        setVerse(response.data.verse);
      } catch (error) {
        console.error('Error fetching verse', error);
      }
    };
    fetchVerse();
  }, []);

  const categories = [
    { name: 'Word', link: '/word' },
    { name: 'Books', link: '/books' },
    { name: 'Worship', link: '/worship' },
    { name: 'Movies', link: '/movies' },
    { name: 'Others', link: '/others' },
  ];

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-4xl font-bold text-center text-indigo-700">Welcome to Redemption Package</h1>
      <p className="mt-6 text-xl text-center italic text-gray-600">"{verse}"</p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link to={category.link} key={category.name} className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
            <h2 className="text-2xl font-semibold text-indigo-600 text-center">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
