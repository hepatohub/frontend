import React from "react";
import Link from "next/link";

const ButtonAction = ({ href, children, text }) => {
  const buttonStyle = {
    backgroundImage: "linear-gradient(227deg, #36B4E1 25.17%, #164B6D 73.99%)",
    borderRadius: "64px",
    border: "none",
    padding: "10px 20px", // Ajuste o padding conforme necessário
    color: "#FFFFFF",
    textDecoration: "none", // Remover decoração de texto para o link
    cursor: "pointer", // Alterar o cursor para indicar que é clicável
    display: "inline-block", // Definir para que o botão se comporte como um link
    // Adições para acessibilidade
    role: "button", // Indicar que o div funciona como um botão
    tabIndex: 0 // Tornar o botão focável por meio da navegação com a tecla Tab
  };

  const handleClick = () => {
    // Lógica para manipular o clique do botão
    console.log("Botão clicado!");
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {text}
    </button>
  );
};

export default ButtonAction;
