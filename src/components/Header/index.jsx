"use client";
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-bgHeader bg-footer bg-cover h-24 flex items-center relative">
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-h1-color bg-cover mt-2 px-4 space-y-2 z-50">
          <Link href="/">
            <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Página Inicial
            </p>
          </Link>
          <Link href="/hepatohub">
            <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Sobre
            </p>
          </Link>
          <Link href="/autocuidado">
            <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Auto Cuidado
            </p>
          </Link>
          <Link href="/construcao">
            <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Medicamentos
            </p>
          </Link>
          <Link href="/construcao">
            <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Conheça a Equipe
            </p>
          </Link>
          <Link href="/construcao">
            <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Colabore
            </p>
          </Link>
          <form onSubmit={handleSearch} className="relative mt-2">
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={handleChange}
              className="bg-white text-gray-800 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <div className="bg-footer rounded-full flex justify-center items-center w-[22px] h-[23px]">
                <button type="submit">
                  <Image
                    src="/lupa.png"
                    alt="Ícone de busca"
                    width={14}
                    height={14}
                    priority={true}
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;
