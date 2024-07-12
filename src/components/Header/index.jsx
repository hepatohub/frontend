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


    // const itemsLink = [
  //   {
  //     id: uuidv4(),
  //     texto: "Página Inicial",
  //     href: ""
  //   },
  //   {
  //     id: uuidv4(),
  //     texto: "HepatoHub",
  //     href: "hepatohub"
  //   },
  //   {
  //     id: uuidv4(),
  //     texto: "Auto Cuidado",
  //     href: "autocuidado"
  //   },
  //   {
  //     id: uuidv4(),
  //     texto: "Medicamentos",
  //     href: "construcao"
  //   },
  //   {
  //     id: uuidv4(),
  //     texto: "Alimentação",
  //     href: "construcao"
  //   },
  //   {
  //     id: uuidv4(),
  //     texto: "Conheça a Equipe",
  //     href: "construcao"
  //   },
  //   {
  //     id: uuidv4(),
  //     texto: "Fórum",
  //     href: "construcao"
  //   }
  // ]
  
  // { itemsLink && itemsLink.map(item => 
  //   item.href !== undefined ? (
  //     <Link href={{
  //       pathname: `/${item.href}`
  //     }} key={item.id}>
  //       <p className="text-white hover:text-gray-200 px-2 md:px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
  //         {item.texto}
  //       </p>
  //     </Link>)
  //   : null
  // )}

  return (
    <div className="bg-bgHeader bg-footer bg-cover h-24 flex items-center relative">
      <div className="w-full flex justify-between items-center px-4 md:px-8 lg:px-16">
        <div className="flex-shrink-0">
          <Image
            src="/logoHeader.png"
            alt="Logo"
            width={99}
            height={76}
            priority={true}
          />
        </div>
        <nav
          className={`${
            isMobile ? "hidden" : "flex"
          } flex-grow justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 xl:space-x-10 2xl:space-x-12 items-center`}
        >
          <Link href="/">
            <p className="text-white hover:text-gray-200 px-2 md:px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Página Inicial
            </p>
          </Link>
          <Link href="/hepatohub">
            <p className="text-white hover:text-gray-200 px-2 md:px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              HepatoHub
            </p>
          </Link>
          <Link href="/autocuidado">
            <p className="text-white hover:text-gray-200 px-2 md:px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Auto Cuidado
            </p>
          </Link>
          <Link href="/construcao">
            <p className="text-white hover:text-gray-200 px-2 md:px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Medicamentos
            </p>
          </Link>
          <Link href="/construcao">
            <p className="text-white hover:text-gray-200 px-2 md:px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Alimentação
            </p>
          </Link>
          <Link href="/construcao">
            <p className="text-white hover:text-gray-200 px-2 md:px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Conheça a Equipe
            </p>
          </Link>
          <Link href="/construcao">
            <p className="text-white hover:text-gray-200 px-2 md:px-4 py-2 cursor-pointer text-shadow font-be-vietnam text-15px font-500">
              Fórum
            </p>
          </Link>
        </nav>
        <div className="ml-auto flex-shrink-0 relative">
          <div className="hidden md:flex items-center">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={handleChange}
                className="bg-white text-gray-800 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 w-[256px]"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <div className="">
                  <button type="submit" className="bg-footer rounded-full flex justify-center items-center w-[22px] h-[23px]">
                    {/* <Image
                      src="/lupa.png"
                      alt="Ícone de busca"
                      width={20}
                      height={20}
                      priority={true}
                      className="rounded-full flex justify-center items-center"
                    /> */}
                    <FaSearch size={14} color="white"/>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none ">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
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
