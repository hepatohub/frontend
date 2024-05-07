import React from "react";
import Link from "next/link";

const Button = ({ text, href }) => {
  const buttonStyle = {
    backgroundImage: "linear-gradient(227deg, #36B4E1 25.17%, #164B6D 73.99%)",
    borderRadius: "64px",
    border: "none",
    padding: "10px 20px", // Ajuste o padding conforme necessário
    color: "#FFFFFF",
  };

  return (
    
    <button style={buttonStyle}>
      {text}
    </button>
   
  );
};

export default Button;
