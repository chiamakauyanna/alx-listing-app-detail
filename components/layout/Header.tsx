import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <h1 className="text-xl font-bold">ALX Listing App</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="text-white">Rooms</button>
          <button className="text-white">Mansions</button>
          <button className="text-white">Countryside</button>
        </div>
        <div className="space-x-4">
          <button className="text-white hover:underline">Sign In</button>
          <button className="bg-blue-500 px-4 py-2 rounded text-white">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

