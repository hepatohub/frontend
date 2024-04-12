import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <div className="bg-bgHeader bg-footer bg-cover h-24 flex items-center relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex-shrink-0">
            <Image src="/logoHeader.png" alt="Logo" width={99} height={76} />
          </div>
          <nav className="hidden md:flex flex-grow justify-center">
            <a href="#" className="text-white hover:text-gray-200 px-4 py-2">Página Inicial</a>
            <a href="/hepatohub" className="text-white hover:text-gray-200 px-4 py-2">Hepato Hub</a>
            <a href="#" className="text-white hover:text-gray-200 px-4 py-2">Auto Cuidado</a>
            <a href="#" className="text-white hover:text-gray-200 px-4 py-2">Medicamentos</a>
            <a href="#" className="text-white hover:text-gray-200 px-4 py-2">Conheça a Equipe</a>
            <a href="#" className="text-white hover:text-gray-200 px-4 py-2">Colabore</a>
          </nav>
          <div className="ml-auto flex-shrink-0 relative">
            <input type="text" placeholder="Pesquisar..." className="bg-white text-gray-800 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <div className='bg-footer rounded-full flex justify-center items-center w-[22px] h-[23px]'>
                <button>
                <Image src="/lupa.png" alt="Ícone de busca" width={14} height={14} />
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
