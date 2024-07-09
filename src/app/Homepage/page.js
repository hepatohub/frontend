"use client";
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import Cards from '@/components/Cards';
import cardsData from '@/data/cardsData';

const Homepage = () => {
  return (
    <>
    <div className='bg-bg-homepage bg-bgHome bg-no-repeat bg-cover'>
      <section className="bg-bg-homepage w-full h-700 flex flex-col items-center bg-white">
          <div className="flex items-center justify-end w-full p-3 gap-5">
            <Button text="Entrar" href="/login" />
            <Button text="Cadastrar" href="/login" />
          </div>
      </section>
      <section className="relative py-10 px-4 md:px-8 lg:px-16 xl:px-20 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-start space-y-4 md:max-w-lg text-left md:text-center">
          <div className='flex flex-col gap-5 mb-14'>
            <div className='flex flex-col gap-2'>
              <h1 className="text-spam-color text-3xl text-left font-extrabold">PORTAL HEPÁTICO</h1>
              <h2 className="text-h1-color text-left text-2xl">Cuidando do seu <span className="text-spam-color text-2xl">Fígado</span></h2>
              <h2 className="text-h1-color text-left text-2xl">Cuidando de <span className="text-spam-color">Você</span></h2>
            </div>
            <p className="text-h1-color text-base text-left leading-relaxed">
              Bem-vindo ao Projeto de Gestão de Saúde Hepática. Nós nos dedicamos a fornecer uma plataforma abrangente para auxiliar pacientes com problemas hepáticos e profissionais da saúde no acompanhamento e gerenciamento da saúde do fígado. Nosso objetivo é oferecer informações detalhadas, recursos de auto-cuidado, consulta de medicamentos e uma comunidade colaborativa para uma abordagem integrada ao cuidado hepático.
            </p>
          </div>
          <div className="flex flex-col  items-center md:flex-row md:space-y-0 md:space-x-4">
            <Button text="Saúde Hepática" href={"/construcao"}/>
            <Button text="Medicamentos" href={"/construcao"}/>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
          className='ml-44'
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
    </div>
    </>
  );
};

export default Homepage;
