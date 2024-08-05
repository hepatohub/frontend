"use client";
import Button from '@/components/Button';
import Cards from '@/components/Cards';
import cardsData from '@/data/cardsData';
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const Homepage = () => {
  return (
    <>
      <div className='bg-bg-homepage bg-bgHome bg-no-repeat bg-cover'>
        <section className="bg-[#0C3853] w-full h-screen flex flex-col items-center lg:hidden md:hidden relative">
          <div className="relative w-full flex h-80 items-end">
            <Image
              src="/mao.png"
              alt="Hepato Hub"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#09599033] to-[#8C8BCC33]"></div>
          </div>
          <div className="flex flex-col h-80 items-center justify-center p-3 text-center">
            <p className="text-[Be Vietnam] font-[700] text-[#F5F5F5] text-xl mb-4">Venha conhecer a plataforma Hepato Hub e cuide ainda mais do seu fígado.</p>
            <p className="text-[Be Vietnam] font-[400] text-[#F5F5F5] text-sm mb-10">Juntando-se à comunidade Hepato Hub você tem acesso a informações relevantes ao cuidado com a saúde de seu fígado. Encontre artigos científicos, busque medicamentos e muito mais.</p>
            <button className="bg-[#8C302B] text-white py-2 px-6 w-80 h-16 rounded-3xl flex justify-center items-center">
              Fazer parte
              <IoIosArrowRoundForward className="text-4xl absolute ml-56" />
            </button>
          </div>
        </section>
        
        <section className="bg-bg-homepage w-full h-700 flex-col items-center bg-white hidden md:flex">
          <div className="flex items-center justify-end w-full p-3 gap-5">
            <Button text="Entrar" href="/login" />
            <Button text="Cadastrar" href="/login" />
          </div>
        </section>
        
        <section className="relative py-10 px-4 md:px-8 lg:px-16 xl:px-20 bg-[#DFE5EF] hidden md:flex font-be-vietnam">
          <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-start space-y-4 md:max-w-lg text-left md:text-center">
              <div className='flex flex-col gap-5 mb-14'>
                <div className='flex flex-col gap-2 font-be-vietnam'>
                  <h1 className="text-spam-color text-3xl text-left font-extrabold">PORTAL HEPÁTICO</h1>
                  <h2 className="text-h1-color text-left text-2xl font-500 font-be-vietnam">Cuidando do seu <span className="text-spam-color text-2xl font-500">Fígado</span></h2>
                  <h2 className="text-h1-color text-left text-2xl font-500">Cuidando de <span className="text-spam-color font-500">Você</span></h2>
                </div>
                <div>
                  <h4 className="text-[#174F73] text-base text-left leading-relaxed w-[566px]">Bem-vindo ao Projeto de Gestão de Saúde Hepática</h4>
                  <p className="text-[#174F73] text-base text-left leading-relaxed w-[554px]">
                    Nós nos dedicamos a fornecer uma plataforma abrangente para auxiliar pacientes com problemas hepáticos e profissionais da saúde no acompanhamento e gerenciamento da saúde do fígado. Nosso objetivo é oferecer informações detalhadas, recursos de auto-cuidado, consulta de medicamentos e uma comunidade colaborativa para uma abordagem integrada ao cuidado hepático.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row md:space-y-0 md:space-x-4">
                <Button text="Saúde Hepática" href={"/construcao"} />
                <Button text="Medicamentos" href={"/construcao"} />
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
        
        <main className="bg-bgSecCards bg-no-repeat bg-cover py-10 justify-around flex">
          <div className="xl:container flex-wrap flex justify-around">
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
