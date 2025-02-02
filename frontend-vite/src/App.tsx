import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import WorshipPage from './pages/WorshipPage';
import MoviesPage from './pages/MoviesPage';
import OthersPage from './pages/OthersPage';
import LoginPage from './pages/LoginPage';
import WordPage from './pages/WordPage'; // ✅ Ensure this is correctly imported

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/word" element={<WordPage />} />  {/* ✅ Added this route */}
          <Route path="/books" element={<BooksPage />} />
          <Route path="/worship" element={<WorshipPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/others" element={<OthersPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
