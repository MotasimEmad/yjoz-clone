import React from 'react';

function PriceCard({ label, price }) {
  return (
    <div className="bg-white flex flex-col px-8 py-4 rounded-lg w-full text-center text-sm">
      <span className="text-gray-500">{label}</span>
      <h1 className="mt-4 text-secondray font-bold">
        {price !== null ? `AED ${price.toFixed(2)}` : 'N/A'}{' '}
        <span className="text-gray-700 font-normal">/day</span>
      </h1>
    </div>
  );
}

export default PriceCard;
