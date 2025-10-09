import React from "react";

type Destination = {
  name: string;
  image: string;
  cost: number;
  duration: string;
  rating: number;
};

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {destination.name}
        </h2>
        <p className="text-gray-600 text-sm mt-1">{destination.duration}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg font-bold text-blue-600">
            ${destination.cost}
          </span>
          <span className="text-yellow-500 text-sm">
            ⭐ {destination.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
