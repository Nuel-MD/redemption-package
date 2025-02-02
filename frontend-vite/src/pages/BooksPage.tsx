import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Book {
  id: number;
  title: string;
  description: string;
  link: string;
}

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/items/books');
        if (Array.isArray(response.data)) {
          setBooks(response.data);
        } else {
          setError('Invalid data format');
        }
      } catch (error) {
        setError('Error fetching books');
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-3xl font-bold text-indigo-700">Books</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-indigo-600">{book.title}</h2>
              <p className="mt-2 text-gray-700">{book.description}</p>
              <a href={book.link} className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">Download</a>
            </div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
