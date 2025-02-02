import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 p-6 mt-12">
    <div className="container mx-auto text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Redemption Package. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-6">
        <a href="#" className="hover:text-white">Contact Us</a>
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;