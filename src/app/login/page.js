"use client";
import React, { useState } from "react";
import Button from '@/components/Button';
import LoginForm from "@/components/LoginForm";

const Login = () => {
  const [activeTab, setActiveTab] = useState("Entrar");

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-bgLogin bg-no-repeat bg-cover bg-footer relative">
      <div className="absolute top-0 right-0 m-4">
        <Button text="Home" href="/Homepage" />
      </div>
  
      <div className="bg-login2 bg-no-repeat bg-cover flex pt-20 pl-10 w-[873px] h-[589px] rounded-[100px]">
        <div className="max-w-sm w-[300px] h-[675px] shadow-none shadow-right border-l-0 overflow-hidden">
          <div className="flex justify-between">
            <button
              className={`p-4 w-[50%] text-center ${
                activeTab === "Entrar" ? "bg-button-login rounded-full text-cards" : "bg-cards rounded-full"
              }`}
              onClick={() => setActiveTab("Entrar")}
            >
              Entrar
            </button>
            <button
              className={`p-4 w-[50%] text-center ml-[-4px] ${
                activeTab === "Cadastrar" ? " bg-button-login text-cards rounded-full " : "bg-cards text-button-login rounded-full "
              }`}
              onClick={() => setActiveTab("Cadastrar")}
            >
              Cadastrar
            </button>
          </div>
          <div className="pt-10">
            {activeTab === "Entrar" ? (
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

export default Login;
