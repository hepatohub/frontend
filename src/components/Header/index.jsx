import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <>
<div className="bg-gradient-to-r from-blue-500 to-blue-800 bg-cover h-24 flex items-center ">
<div className="container mx-auto flex justify-between items-center" >

          <div className="flex-shrink-0">
            <Image src="/logoHeader.png" alt="Logo" width={99} height={76} />
          </div>

          <nav className="hidden md:flex flex-grow justify-center">
            <a href="#" className="text-white hover:text-gray-200 px-4 py-2">Link 1</a>
            <a href="#" className="text-white hover:text-gray-200 px-4 py-2">Link 2</a>
            <a href="#" className="text-white hover:text-gray-200 px-4 py-2">Link 3</a>
            <a href="#" className="text-white hover:text-gray-200 px-4 py-2">Link 4</a>
            <a href="#" className="text-white hover:text-gray-200 px-4 py-2">Link 5</a>
          </nav>

          <div className="ml-auto flex-shrink-0">
            <input type="text" placeholder="Pesquisar..." className="bg-white text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
