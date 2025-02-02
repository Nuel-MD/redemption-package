import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Movie {
  id: number;
  title: string;
  description: string;
  link: string;
}

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/items/movies');
        if (Array.isArray(response.data)) {
          setMovies(response.data);
        } else {
          setError('Invalid data format');
        }
      } catch (error) {
        setError('Error fetching movies');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold text-indigo-700">Movies</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-indigo-600">{movie.title}</h2>
              <p className="mt-2 text-gray-700">{movie.description}</p>
              <a href={movie.link} className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">Watch Now</a>
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default MoviesPage;
