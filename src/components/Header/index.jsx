"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { LiaUserCheckSolid } from "react-icons/lia";
import { PiSirenThin } from "react-icons/pi";
import { TbNotes } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { useMediaQuery } from "react-responsive";

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
                    src="/bgHeaderMobile.png"
                    alt="LogoM"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                  />
                </button>
                </div>
                <button onClick={toggleMenu} className="text-white focus:outline-none z-10">
                  <AiOutlineClose size={24} />
                </button>
                <div className="text-center flex-1 font-be-vietnam">
                  <h1 className="text-xl font-bold text-white">Hepato Hub</h1>

                </div>
                <div className="flex-shrink-0 bg-white mr-4 rounded-full w-12 h-12 flex items-center justify-center z-10">
                  <Image
                    src="/logoHeader.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    priority={true}
                    className="w-10 h-10"
                  />
                </div>
            </div>
            <div className="bg-[#D9D9D9] p-4 h-[calc(100%-3rem)] overflow-auto w-[80%] ">
                <Link href="/">
                  <div className="flex items-center text-[#0E3A56] py-2 ml-10 cursor-pointer font-be-vietnam text-xl font-500 border-b-2 border-gray-300">
                    <LiaUserCheckSolid className="mr-2" /> Acessar
                  </div>
                </Link>
                <Link href="/buscar">
                  <div className="flex items-center text-[#0E3A56] py-2 ml-10 cursor-pointer font-be-vietnam text-xl font-500 border-b-2 border-gray-300">
                    <AiOutlineSearch className="mr-2" /> Buscar
                  </div>
                </Link>
                <Link href="/contato">
                  <div className="flex items-center text-[#0E3A56] py-2 ml-10 cursor-pointer font-be-vietnam text-xl font-500 border-b-2 border-gray-300">
                    <TiMessages className="mr-2" /> Contato
                  </div>
                </Link>
                <Link href="/sobre">
                  <div className="flex items-center text-[#0E3A56] py-2 ml-10 cursor-pointer font-be-vietnam text-xl font-500 border-b-2 border-gray-300">
                    <TbNotes className="mr-2" /> Sobre
                  </div>
                </Link>
                <Link href="/ajuda">
                  <div className="flex items-center text-[#8C302B] py-2 ml-10 cursor-pointer font-be-vietnam text-xl font-500 border-b border-gray-300">
                    <PiSirenThin className="mr-2" /> Ajuda
                  </div>
                </Link>
            </div>
          </form>
        </div>
      )}
    </div>
      )}

export default Header;
