import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Button from '@/components/Button';
import Image from "next/image";
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <section className='bg-bgauto bg-no-repeat bg-cover w-full h-[963px]'>
    <div className='flex flex-row items-end justify-end w-full pt-4 pr-6'>
          <Button text="Entrar" />
          <div className="ml-4"></div> {/* Adicionando margem entre os botões */}
          <Button text="Cadastrar" />
        </div>
    
    <Image src="/logo.png" alt='logo Hepato Hub' width={457} height={457} className='pt-[60px]'/>

   
    </section>
    <main className='bg-bgSechepato bg-no-repeat bg-cover pb-2 h-[1397px]'>

<div className='bg-hepatodivs'>
  <p>      Alimentação Balanceada:
   Dicas:
- Priorize alimentos ricos em nutrientes, como frutas, vegetais, grãos integrais e proteínas magras.
- Reduza a ingestão de gorduras saturadas e alimentos processados, optando por opções mais saudáveis.
- Limite o consumo de açúcares adicionados e evite refrigerantes e bebidas açucaradas.
- Beba bastante água ao longo do dia para manter-se hidratado e ajudar na função hepática.
</p>

</div>

</main>
    <Footer />
    </>

    
  )
}

export default page