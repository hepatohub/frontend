import Header from '@/components/Header';
import Button from '@/components/Button';
import Cards from '@/components/Cards';
import cardsData from '@/data/cardsData';
import React from 'react';
import Image from "next/image";

const Homepage = () => {
  

  return (
    <>
      <Header />

      <section className="bg-bg-homepage w-full h-700 flex flex-col items-center justify-around bg-bgHome bg-no-repeat bg-cover">
        <div className='flex flex-row items-end justify-end w-full mt-2 mr-4'>
          <Button text="Entrar" />
          <div className="ml-4"></div> {/* Adicionando margem entre os botões */}
          <Button text="Cadastrar" />
        </div>
        <div className='flex flex-row'>
          <div className="w-400 h-208 " >
            <h1 className="text-h1-color text-lg/[46px] font-extrabold py-10">
              <span className="text-spam-color text-4xl font-extrabold"> PORTAL HEPÁTICO</span> <br />
              Cuidando do seu <span className="text-spam-color font-extrabold">Fígado</span> <br />
              Cuidando de <span className="text-spam-color">Você</span>
            </h1>
            <div className="max-w-96">
              <p className="text-h1-color text-base">Bem-vindo ao Projeto de Gestão de Saúde Hepática
              Nós nos dedicamos a fornecer uma plataforma abrangente para auxiliar pacientes com problemas hepáticos e profissionais da saúde no acompanhamento e gerenciamento da saúde do fígado. Nosso objetivo é oferecer informações detalhadas, recursos de auto-cuidado, consulta de medicamentos e uma comunidade colaborativa para uma abordagem integrada ao cuidado hepático.</p>
            </div>
            <div className='flex my-3.5'>
              <Button text="Saúde Hepática" />
              <div className="ml-4"></div> {/* Adicionando margem entre os botões */}
              <Button text="Medicamentos" />
            </div>
          </div>

          <div>
            <Image className='self-end' src="/logo.png" alt="Logo" width={534} height={534} />
          </div>
        </div>
      </section>
      <main className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8"> {/* Usando grid-cols-2 para telas menores e grid-cols-4 para telas maiores */}
        {cardsData.map((card) => (
          <Cards
            key={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        ))}


       

      </main>
    </>
  );
};

export default Homepage;
