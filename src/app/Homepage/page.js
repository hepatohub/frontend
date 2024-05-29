"use client"
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { SearchProvider } from '@/contexts/SearchContext';
import Cards from '@/components/Cards';
import cardsData from '@/data/cardsData';

const Homepage = () => {
  return (
    <>
      <SearchProvider>
        <Header />

        <section className="bg-bg-homepage w-full h-700 flex flex-col items-center bg-bgHome bg-no-repeat bg-cover">
          <div className="flex flex-row items-end justify-end w-full mt-2 mr-4">
            <Button text="Entrar" href="/login" />
            <div className="ml-4"></div>{" "}
            {/* Adicionando margem entre os botões */}
            <Button text="Cadastrar" href="/login" />
          </div>
          <div className="xl:container flex flex-row gap-[200px] py-10 ml-[-10rem]">
            <div className="sm:text-center sm:ml-3 w-400 h-208">
            <h1 className="text-spam-color text-4xl ml-[-6.2em] mt-[47px]  font-extrabold">PORTAL HEPÁTICO</h1>{" "}
               
              <h2 className="text-h1-color text-3xl ml-[-7.4em] ">
               
                Cuidando do seu <span className="text-spam-color  text-3xl ">Fígado</span>{" "}
                
              </h2>

              <h2 className="text-h1-color text-3xl ml-[-10em] ">Cuidando de <span className="text-spam-color">Você</span></h2>
              <br />
              <div className="max-w-[566px]">
                <p className="text-h1-color  text-left text-lg">
                  Bem-vindo ao Projeto de Gestão de Saúde Hepática. Nós nos dedicamos a fornecer uma plataforma abrangente para auxiliar pacientes com problemas hepáticos e profissionais da saúde no acompanhamento e gerenciamento da saúde do fígado. Nosso objetivo é oferecer informações detalhadas, recursos de auto-cuidado, consulta de medicamentos e uma comunidade colaborativa para uma abordagem integrada ao cuidado hepático.
                </p>
              </div>
              <br/>
              <div className="flex my-3.5">
                <Button text="Saúde Hepática" />
                <div className="ml-4"></div>{" "}
                {/* Adicionando margem entre os botões */}
                <Button text="Medicamentos" />
              </div>
            </div>

            <div>
              <Image
                className="self-end"
                src="/logo.png"
                alt="Logo"
                width={534}
                height={534}
              />
            </div>
          </div>
        </section>
        <main className="flex bg-bgSecCards bg-no-repeat bg-cover py-10 justify-around">
          <div className="xl:container flex-wrap flex justify-around ">
            {cardsData.map((card) => (
              <div key={card.id} className="mb-8">
                <Cards
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                />
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </SearchProvider>
    </>
  );
};

export default Homepage;
