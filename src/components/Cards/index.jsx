import Image from "next/image";

const Cards = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-gradient-to-r from-[#33A4CC] to-[#164B6D] rounded-3xl w-[242.2px] h-[390.67px] flex flex-col justify-center items-center"  style={{
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)"
    }}>
    <Image className="" src={imageUrl} alt="Imagem do Card" width={168} height={137} />
    <div className="px-6 py-4 text-center">
      <div className="font-be-vietnam font-bold text-white py-5">{title}</div>
      <p className="font-be-vietnam text-white text-sm">{description}</p>
    </div>
  </div>
  );
};

export default Cards;
