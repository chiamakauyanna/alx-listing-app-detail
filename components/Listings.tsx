import React from 'react';
import { PROPERTYLISTINGSAMPLE } from '../constants';

const Listings: React.FC = () => {
  return (
    <section className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROPERTYLISTINGSAMPLE.map((property, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">{property.name}</h3>
            <p className="text-gray-600">
              {property.address.city}, {property.address.country}
            </p>
            <p className="text-gray-800 mt-2">${property.price} / night</p>
            <p className="text-sm text-gray-500 mt-1">{property.category.join(', ')}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Listings;
