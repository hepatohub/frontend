import React from 'react';
import Image from "next/image";

const Cards = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-bgCards w-[245px] h-[390px] flex flex-col justify-center items-center">
    <Image className="" src={imageUrl} alt="Imagem do Card" width={168} height={137} />
    <div className="px-6 py-4 text-center">
      <div className="font-bold text-white py-5">{title}</div>
      <p className="text-white text-sm">{description}</p>
    </div>
  </div>
  );
};

export default Cards;
