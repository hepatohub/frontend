import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Button from '@/components/Button';
import Image from "next/image";
import React from 'react'

const page = () => {
  return (
    <>
      <section className='bg-bgauto bg-no-repeat bg-cover w-full h-[963px]'>
        <div className='flex flex-row items-end justify-end w-full pt-4 pr-6'>
            <Button text="Entrar" href={"login"}/>
            <div className="ml-4"></div> {/* Adicionando margem entre os botões */}
            <Button text="Cadastrar" href={"login"}/>
        </div>
        <Image src="/logo.png" alt='logo Hepato Hub' width={457} height={457} className='pt-[60px]'/>
      </section>
      
      <main className='flex flex-col bg-bgSechepato bg-no-repeat bg-cover pb-4 w-full h-auto justify-center items-center '>
        <section className='flex bg-hepatodivs rounded-[26px] w-[1233px] h-[248px] mt-6 justify-center items-center'>
        <div className=' pt-4 pl-12 w-[1136px]  text-title-color'>
          <h3 className='text-center text-h1-color font-bold'>Estratégias Práticas para o Bem-Estar e Auto Cuidado</h3>
          <h4 className='py-2 font-bold'>      Alimentação Balanceada:
          </h4>
          <p className='py-2 font-semibold'> Dicas:</p>

        <ul className=''>
          <li className='list-disc'>Priorize alimentos ricos em nutrientes, como frutas, vegetais, grãos integrais e proteínas magras.</li>
          <li className='list-disc'>Reduza a ingestão de gorduras saturadas e alimentos processados, optando por opções mais saudáveis.</li>
          <li className='list-disc'>Limite o consumo de açúcares adicionados e evite refrigerantes e bebidas açucaradas.</li>
          <li className='list-disc'>Beba bastante água ao longo do dia para manter-se hidratado e ajudar na função hepática.</li>
        </ul>

        </div>
        <div className='mr-10 pt-4'>
        <Image alt="imagem de pão"  src="/pao.png" width={168} height={78}/>
        </div>
        </section>

        <section className='flex bg-hepatodivs rounded-[26px] w-[1233px] h-[248px] mt-6 pb-2justify-center items-center'>
        <div className=' pt-4 pl-12 w-[1136px]  text-title-color'>
          <h3 className='text-center text-h1-color font-bold'>Estratégias Práticas para o Bem-Estar e Auto Cuidado</h3>
          <h4 className='py-2 font-bold'>      Exercício Regular:
          </h4>
          <p className='py-2 font-semibold'> Dicas:</p>

        <ul className=''>
          <li className='list-disc'>Procure realizar atividades físicas que você goste, como caminhadas, natação, dança ou ioga, pelo menos 30 minutos por dia, cinco vezes por semana.</li>
          <li className='list-disc'>Inclua exercícios de fortalecimento muscular para manter um peso saudável e promover a saúde do fígado.</li>
          <li className='list-disc'>Varie seus exercícios para evitar o tédio e melhorar sua motivação.</li>
          
        </ul>

        </div>
        <div className='mr-10 pt-4'>
        <Image alt="imagem de pão"  src="/bike.png" width={168} height={78}/>
        </div>
        </section>

        <section className='flex bg-hepatodivs w-[1233px] h-[248px] mt-6 justify-center items-center'>
        <div className=' pt-4 pl-12 w-[1136px]  text-title-color'>
          <h3 className='text-center text-h1-color font-bold'>Estratégias Práticas para o Bem-Estar e Auto Cuidado</h3>
          <h4 className='py-2 font-bold'>     Gestão do Estresse:
          </h4>
          <p className='py-2 font-semibold'> Dicas:</p>

        <ul className=''>
          <li className='list-disc'>Pratique técnicas de relaxamento, como meditação, respiração profunda, mindfulness ou tai chi, para reduzir o estresse.</li>
          <li className='list-disc'>Reserve um tempo para atividades que lhe tragam prazer e relaxamento, como hobbies, passeios ao ar livre ou leitura.</li>
          <li className='list-disc'>Procure apoio emocional e compartilhe seus sentimentos com amigos, familiares ou um profissional de saúde mental, se necessário.</li>
          
        </ul>

        </div>
        <div className='mr-10 pt-4'>
        <Image alt="imagem representando estresse"  src="/stress.png" width={168} height={78}/>
        </div>
        </section>

        <section className='flex bg-hepatodivs rounded-[26px] w-[1233px] h-[248px] mt-6 justify-center items-center'>
        <div className=' pt-4 pl-12 w-[1136px]  text-title-color'>
          <h3 className='text-center text-h1-color font-bold'>Estratégias Práticas para o Bem-Estar e Auto Cuidado</h3>
          <h4 className='py-2 font-bold'>     Evitar Toxinas e Substâncias Nocivas:
          </h4>
          <p className='py-2 font-semibold'> Dicas:</p>

        <ul className=''>
          <li className='list-disc'>Evite o consumo de álcool ou limite-o de acordo com as orientações médicas, pois o álcool pode causar danos ao fígado.</li>
          <li className='list-disc'>Consulte um médico antes de tomar qualquer medicamento, suplemento ou remédio fitoterápico, especialmente se você tiver doença hepática.</li>
          <li className='list-disc'> Evite o tabagismo e a exposição ao fumo passivo, pois o tabaco pode aumentar o risco de doenças hepáticas.</li>
          
        </ul>

        </div>
        <div className='mr-10 pt-4'>
        <Image alt="imagem de uma ecobag" src="/ecobag.png" width={168} height={78}/>
        </div>
        </section>

        <section className='flex bg-hepatodivs rounded-[26px]  w-[1233px] h-[288px] mt-6 justify-center items-center '>
        <div className=' pt-4 pl-12 w-[1136px]  text-title-color text-sm'>
          <h3 className='text-center text-h1-color font-bold'>Estratégias Práticas para o Bem-Estar e Auto Cuidado</h3>
          <h4 className='py-2 font-bold'>      Monitoramento da Saúde:
          </h4>
          <p className='py-2 font-semibold'> Dicas:</p>

        <ul className=''>
          <li className='list-disc text-sm'>Realize exames de saúde regularmente para monitorar a função hepática e outros indicadores de saúde.</li>
          <li className='list-disc text-sm'>Esteja atento aos sinais de alerta de problemas hepáticos, como icterícia, dor abdominal persistente, inchaço abdominal ou mudanças na cor das fezes e urina.</li>
          <li className='list-disc text-sm'> Não hesite em consultar um médico se tiver preocupações sobre sua saúde hepática ou se sentir sintomas incomuns.</li>
          
        </ul>

        <h4 className='py-1  font-bold'>      Referências:
        </h4>

        <li className='list-disc text-sm'>American Liver Foundation (https://liverfoundation.org/)</li>
          <li className='list-disc text-sm'>National Institute of Diabetes and Digestive and Kidney Diseases (https://www.niddk.nih.gov/)</li>
          <li className='list-disc text-sm'>Centers for Disease Control and Prevention (https://www.cdc.gov/)</li>

        </div>

        </section>
      </main>
    </> 
  )
}

export default page