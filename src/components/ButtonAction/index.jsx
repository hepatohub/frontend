import React from "react";

const ButtonAction = ({ onClick, children, text, type }) => {
  const buttonStyle = {
    backgroundImage: "linear-gradient(227deg, #36B4E1 25.17%, #164B6D 73.99%)",
    borderRadius: "64px",
    border: "none",
    padding: "10px 20px",
    color: "#FFFFFF",
    textDecoration: "none",
    cursor: "pointer",
    display: "inline-block",
  };

  const handleClick = (e) => {
    
    onClick(); // Chamar a função de clique fornecida
  };

  return (
    <button style={buttonStyle} onClick={handleClick} type={type}>
      {text || children} 
    </button>
  );
};

export default ButtonAction;
