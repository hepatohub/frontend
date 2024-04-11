import React from 'react';
import Image from "next/image";

const Cards = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-bgCards w-242 h-391 rounded overflow-hidden shadow-lg ">
      <Image className="w-full" src={imageUrl} alt="Imagem do Card" width={168} height={137} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
