"use client";
import React, { useState } from 'react';

const Login = () => {
  const [activeTab, setActiveTab] = useState("Entrar");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-bgLogin bg-no-repeat bg-cover bg-footer">

    <div className="bg-login2 bg-no-repeat bg-cover flex pt-20 pl-10 w-[873px] h-[589px] rounded-[100px]">

      <div className="max-w-sm w-[300px] h-[475px] shadow-none shadow-right border-l-0  overflow-hidden">
        <div className="flex justify-between">
          <button
            className={`p-4 w-[50%] text-center ${
              activeTab === "Entrar" ? "bg-button-login rounded-full text-cards" : "bg-cards rounded-full"
            }`}
            onClick={() => toggleTab("Entrar")}
          >
            Entrar
          </button>
          <button
            className={`p-4 w-[50%] text-center ml-[-4px] ${
              activeTab === "Cadastrar" ? " bg-button-login  text-cards rounded-full " : "bg-cards text-button-login rounded-full "
            }`}
            onClick={() => toggleTab("Cadastrar")}
          >
            Cadastrar
          </button>
        </div>
        <div className="pt-10">
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm text-cards">
                
              </label>
              <input
                type="text"
                id="username"
                className="mt-1 p-4 w-full bg-transparent border-b-2   outline-none"
                placeholder='Insira seu e-mail'
                autoFocus
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm text-cards">
                
              </label>
              <input
                type="password"
                id="password"
                placeholder='Insira sua senha'
                className="mt-1 p-4 w-full  border-b-2 bg-transparent outline-none"
              />
              <span
                className="absolute top-2 right-4 cursor-pointer"
                onClick={() => {
                  const passwordInput = document.getElementById("password");
                  passwordInput.type === "password"
                    ? (passwordInput.type = "text")
                    : (passwordInput.type = "password");
                }}
              >
                <i className="fa fa-eye-slash"></i>
              </span>
            </div>
            
            <div className="mb-4 pt-6 flex justify-center">
              <button
                type="submit"
                className="w-32 bg-button shadow-[0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset] hover:bg-blue-600 text-cards py-2 rounded-[64px] transition duration-300"
              >
                {activeTab}
              </button>
            </div>
          </form>
          <div className=" py-3 text-center">
            <a href="#" className="text-cards">
              Esqueceu a senha?
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Login;
