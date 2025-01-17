import React from 'react';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import Listings from '../components/Listings';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Filters />
      <Listings />
    </div>
  );
};

export default HomePage;

