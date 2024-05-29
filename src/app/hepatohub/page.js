"use client"
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from "next/image";
import React from 'react'

const hepatohub = () => {
  return (
    <>
      <Header />
      <section className='bg-bgHepatohub bg-no-repeat bg-cover h-[698px] relative -mt-1'>
        <div className='flex flex-row items-end justify-end w-full pt-4 pr-6'>
          <Button text="Entrar" />
          <div className="ml-4"></div> {/* Adicionando margem entre os botões */}
          <Button text="Cadastrar" />
        </div>
        <h2 className='text-hepato-blue text-2xl w-[528px] absolute bottom-0 left-0 right-0 ml-auto mr-6 mb-8 text-right'>Juntos pela saúde do fígado <br/> Seu hub de informação e apoio.</h2>
      </section>
      <main className='bg-bgSechepato bg-no-repeat bg-cover pb-2 h-[1397px]'>
      <h1 className='text-[#174F73] font-bold  text-6xl text-center pt-3'>HEPATO HUB</h1>

      <div className='flex items-center justify-around '>
        <div className=' flex bg-hepatodivs w-[597px] h-[277px] rounded-[26px] items-center justify-center'>
        <p className='text-center text-h1-color text-lg w-[534px]'>O sistema de consultas de medicamentos para doenças hepáticas HepatoHub, utilizando dados abertos do Ministério da Saúde, é uma ferramenta extremamente valiosa para profissionais de saúde, pacientes e cuidadores. A aplicação deve fornecer informações precisas e atualizadas sobre medicamentos específicos para o tratamento de doenças hepáticas, garantindo uma abordagem mais eficaz e segura.</p>
      </div>
        <Image src="/doctor.png" alt="imagem de um médico" width={398} height={398} />
      </div>
      <div className='flex items-center justify-around '>

      <Image src="/prancheta.png" alt="imagem de um médico" width={187} height={121} />

        <div className=' flex bg-hepatodivs w-[597px] h-[277px] rounded-[26px] items-center justify-center'>
        <p className='text-center text-h1-color text-base w-[534px]'>A utilização de dados abertos do Ministério da Saúde como base para o sistema oferece várias vantagens. Primeiro, os dados do governo geralmente são confiáveis e atualizados regularmente, garantindo que as informações fornecidas pelo sistema sejam precisas e relevantes. Além disso, ao utilizar dados abertos, o sistema promove a transparência e a acessibilidade das informações de saúde, permitindo que os usuários tenham uma compreensão mais clara sobre os medicamentos disponíveis e seus usos.</p>
      </div>
       
      </div>

      

      <div className='flex items-center justify-around '>
        <div className=' flex bg-hepatodivs w-[597px] h-[277px] rounded-[26px] items-center justify-center'>
        <p className='text-center text-h1-color text-base w-[534px]'>Em termos de funcionalidades, o sistema web oferece ao usuário um meio de cadastro para que seja possível a identificação sobre a utilização dos serviços, uma interface intuitiva e fácil de usar, permitindo que os usuários realizem consultas de medicamentos de forma rápida e eficiente. Os usuários podem pesquisar por doença hepática específica ou por medicamento, e o sistema fornecerá informações básicas sobre os medicamentos disponíveis, localização e regras de aquisição. Com a funcionalidade de cadastro pode ser mantido um histórico de utilização, consultas e perfil geral do paciente.</p>
      </div>
        <Image src="/kit.png" alt="imagem de um médico" width={187} height={121} />
      </div>

      <div className='flex items-center justify-around '>

      <Image src="/remedio.png" alt="imagem de um médico" width={187} height={121} />

        <div className=' flex bg-hepatodivs w-[597px] h-[277px] rounded-[26px] items-center justify-center'>
        <p className='text-center text-h1-color text-base w-[534px]'>
Além disso, o sistema também pode incluir recursos adicionais, como alertas sobre novos medicamentos disponibilizados para o tratamento de doenças hepáticas, atualizações sobre diretrizes de tratamento e links para recursos adicionais, como folhetos informativos e artigos científicos.
Para garantir a segurança e a privacidade dos usuários, o sistema deve adotar medidas adequadas de segurança de dados, garantindo que as informações pessoais dos usuários sejam protegidas e que apenas profissionais autorizados tenham acesso a determinadas funcionalidades, como a capacidade administrar as funcionalidades do sistema.</p>
      </div>
       
      </div>


      
      </main>
      <Footer />
    </>
  )
}

export default hepatohub
