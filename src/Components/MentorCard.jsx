// components/MentorCard.js
import React from 'react';

function MentorCard({ mentor }) {
  return (
    <div className="rounded-lg border shadow-lg hover:scale-110 transition duration-500 cursor-pointer object-cover overflow-hidden">
      <img src={mentor.image} alt={mentor.name} className="w-full" />
      <div className="p-4">
        <h3 className="font-bold text-gray-600 text-xl">{mentor.name}</h3>
        <p>{mentor.university}</p>
      </div>
    </div>
  );
}

export default MentorCard;
