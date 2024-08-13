"use client";
import Button from '@/components/Button';
import LoginForm from "@/components/LoginForm";
import Link from 'next/link';
import { useSearchParams } from "next/navigation";

const Entrar = () => {
  const searchParams = useSearchParams();
  const param = searchParams.get("acao");
  console.log(param)

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-bgLogin bg-no-repeat bg-cover bg-footer relative w-full">
      <div className="absolute top-0 right-0 m-4">
        <Button text="Home" href="/Homepage" />
      </div>
  
      <div className="
        bg-login2 bg-no-repeat bg-cover flex h-[589px] rounded-[100px]
        sm:w-4/5 sm:pt-20 sm:pl-6
        lg:w-[873px] lg:pt-20 lg:pl-10">
        <div className="max-w-sm w-[300px] h-[675px] shadow-none shadow-right border-l-0 overflow-hidden ">
          <div className="flex justify-between">
            <Link
              className={`p-4 w-[50%] text-center ${
                param === "entrar" ? "bg-button-login rounded-full text-cards" : "bg-cards rounded-full"
              }`}
              href={"/minha-conta?acao=entrar"}
            >
              Entrar
            </Link>
            <Link
              className={`p-4 w-[50%] text-center ml-[-4px] ${
                param === "cadastrar" ? " bg-button-login text-cards rounded-full " : "bg-cards text-button-login rounded-full "
              }`}
              href={"/minha-conta?acao=cadastrar"}
            >
              Cadastrar
            </Link>
          </div>
          <div className="pt-10">
            {param === "entrar" ? (
              <LoginForm mode="login" />
            ) : (
              <LoginForm mode="register" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entrar;
