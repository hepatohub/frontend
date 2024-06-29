import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
  <div className="
    bg-hepato-blue flex items-center justify-center h-[100vh]
    sm:max-w-full
    lg:w-full "
  >
    <div className="
      bg-construcao h-[921px] flex flex-col justify-center items-center
      sm:max-w-full
      lg:w-[1003px]
    ">
      <div>
        <Image src="/404.png" alt="Erro 404" width={583} height={389} />
      </div>
      <section className="grid grid-cols-2 items-center justify-end mt-7 ml-80">
        <Image src="/oops.png" alt="Erro 404" width={254} height={50} />
        <Image src="/erro.png" alt="Erro 404" width={264} height={264} />
      </section>

      <div className="mt-7 flex flex-col items-center">
        <p className='text-roxo text-center font-semibold 
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
