// components/UniversityCard.js
import React from 'react';

function UniversityCard({ university }) {
  return (
    <div className="rounded shadow-lg hover:scale-110 transition duration-500 cursor-pointer object-cover overflow-hidden">
      <img src={university.image} alt={university.name} className="w-full" />
      <div className="p-4">
        <h3 className="font-bold text-gray-600 text-xl">{university.name}</h3>
      </div>
    </div>
  );
}

export default UniversityCard;
