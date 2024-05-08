import React from "react";
import Link from "next/link";

const Button = ({ href, children, text }) => {
  const buttonStyle = {
    backgroundImage: "linear-gradient(227deg, #36B4E1 25.17%, #164B6D 73.99%)",
    borderRadius: "64px",
    border: "none",
    padding: "10px 20px", // Ajuste o padding conforme necessário
    color: "#FFFFFF",
    textDecoration: "none", // Remover decoração de texto para o link
    cursor: "pointer", // Alterar o cursor para indicar que é clicável
    display: "inline-block" // Definir para que o botão se comporte como um link
  };

  // Verificar se href está definido antes de renderizar o Link
  if (href) {
    return (
      <Link href={href}>
        <div style={buttonStyle}>
          {text || children} {/* Use o texto fornecido ou o conteúdo filho */}
        </div>
      </Link>
    );
  } else {
    return (
      <div style={buttonStyle}>
        {text || children} {/* Use o texto fornecido ou o conteúdo filho */}
      </div>
    );
  }
};

export default Button;
