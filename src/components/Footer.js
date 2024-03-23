// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-3 text-center">
      <div className="container mx-auto flex flex-col items-center">
        <img className="w-10 md:w-12 mb-4 rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaV_UBqVZWTlWdZfrPOGNqvOIq_K_HkZeZZQ&usqp=CAU" alt="Footer Logo" />
        <p className="text-sm sm:text-base font-bold">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
