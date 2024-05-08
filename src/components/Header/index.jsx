"use client"
import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchContext } from '@/contexts/SearchContext';

const Header = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [originalContent, setOriginalContent] = useState('');

  // Salva o conteúdo original da página quando o componente é montado
  useEffect(() => {
    setOriginalContent(document.documentElement.innerHTML);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const elements = document.querySelectorAll("*:not(script):not(style)");
    elements.forEach(element => {
      const regex = new RegExp(`(${searchTerm})`, 'gi');
      element.innerHTML = element.textContent.replace(regex, '<span class="highlight">$1</span>');
    });
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    document.documentElement.innerHTML = originalContent;
    setSearchTerm('');
  };

  return (
    <>
      <div className="bg-bgHeader bg-footer bg-cover h-24 flex items-center relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-shrink-0">
            <Image src="/logoHeader.png" alt="Logo" width={99} height={76} priority={true} />
          </div>
          <nav className="hidden md:flex flex-grow justify-center">
            <Link href="/">
              <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer">Página Inicial</p>
            </Link>
            <Link href="/hepatohub">
              <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer">Sobre</p>
            </Link>
            <Link href="/autocuidado">
              <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer">Auto Cuidado</p>
            </Link>
            <Link href="/construcao">
              <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer">Medicamentos</p>
            </Link>
            <Link href="/construcao">
              <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer">Conheça a Equipe</p>
            </Link>
            <Link href="/construcao">
              <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer">Colabore</p>
            </Link>
          </nav>
          <div className="ml-auto flex-shrink-0 relative">
            <form onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Pesquisar..." 
                value={searchTerm} 
                onChange={handleChange} 
                className="bg-white text-gray-800 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400" 
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <div className='bg-footer rounded-full flex justify-center items-center w-[22px] h-[23px]'>
                  <button type="submit">
                    <Image src="/lupa.png" alt="Ícone de busca" width={14} height={14} priority={true} />
                  </button>
                </div>
              </div>
              {searchTerm && (
                <button
                  type="button"
                  className="ml-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                  onClick={handleReset}
                >
                  Limpar
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
