import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center text-white py-20"
      style={{ backgroundImage: 'url("/hero-background.jpg")' }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Favorite Place Here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </div>
    </section>
  );
};

export default Hero;
