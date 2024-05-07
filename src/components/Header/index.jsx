import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
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
            <Link href="/medicamentos">
              <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer">Medicamentos</p>
            </Link>
            <Link href="/equipe">
              <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer">Conheça a Equipe</p>
            </Link>
            <Link href="/colabore">
              <p className="text-white hover:text-gray-200 px-4 py-2 cursor-pointer">Colabore</p>
            </Link>
          </nav>
          <div className="ml-auto flex-shrink-0 relative">
            <input type="text" placeholder="Pesquisar..." className="bg-white text-gray-800 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <div className='bg-footer rounded-full flex justify-center items-center w-[22px] h-[23px]'>
                <button>
                  <Image src="/lupa.png" alt="Ícone de busca" width={14} height={14} priority={true} />
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
