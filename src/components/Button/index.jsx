import React from "react";
import Link from "next/link";

const Button = ({href, children, text, widthPrimario = true, rounded = true, width}) => {
  const buttonStyle = {
    backgroundImage: "linear-gradient(227deg, #36B4E1 25.17%, #164B6D 73.99%)",
  };

  return (
    <Link href={href}>
      <button className={`
        h-[36px] cursor-pointer py-2 px-4 text-white flex items-center justify-center font-be-vietnam font-500 text-base
        ${widthPrimario ? "w-[185px]" : "w-[122px]"}
        ${rounded ? "rounded-[64px]" : "rounded-none"}
      `} style={buttonStyle}>
        {text || children} {/* Use o texto fornecido ou o conteúdo filho */}
      </button>
    </Link>
  );
};

export default Button;
