"use client";
import Image from "next/image";
import Link from "next/link";

const construcao = () => {
  return (
    <div className="
      bg-hepato-blue flex items-center justify-center min-h-screen">
      <div className="
        bg-construcao h-[721px] w-[1003px] flex flex-col justify-center items-center
        sm:max-w-full rounded-3xl
      ">
        <div>
          <Image src="/404.png" alt="Erro 404" width={500} height={389} />
        </div>
        <section className="grid grid-cols-2 items-center justify-end ml-20">
          <Image src="/oops.png" alt="Erro 404" width={200} height={50} />
          <Image src="/erro.png" alt="Erro 404" width={200} height={264} />
        </section>

        <div className="flex flex-col items-center">
          <p className='text-roxo text-center text-xl font-semibold 
            lg:w-[685px] lg:text-xl
            sm:max-w-full sm:text-2xl
          '>Página não encontrada. Desculpe pelo transtorno. Se precisar de ajuda, entre em contato conosco.</p>
        </div>

        <div className="bg-roxo rounded-full w-[239px] h-[54px] flex items-center justify-center text-white mt-4 text-2xl shadow-fushia">
          <Link href="/Homepage"  > Voltar </Link>
        </div>
      </div>
    </div>
  );
};

export default construcao;
