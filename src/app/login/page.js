"use client";
import Button from '@/components/Button';
import React, { useState } from 'react';

const Login = () => {
  const [activeTab, setActiveTab] = useState("Entrar");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const toggleTab = (tab) => {
    setActiveTab(tab);
    setError("");
    setSuccess("");
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;
    return re.test(password);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(email)) {
      setError("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    if (email !== confirmEmail) {
      setError("Os endereços de e-mail não coincidem.");
      return;
    }

    if (!validatePassword(password)) {
      setError("A senha deve ter entre 8 e 14 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    // Simulate a call to check if the email is unique
    const isEmailUnique = await mockCheckEmailUnique(email);
    if (!isEmailUnique) {
      setError("O endereço de e-mail já está associado a uma conta existente.");
      return;
    }

    // Simulate successful registration
    setSuccess("Registro bem-sucedido! Redirecionando para a página inicial...");
    setTimeout(() => {
      window.location.href = "/Homepage"; // Redirect to homepage
    }, 2000);
  };

  const mockCheckEmailUnique = async (email) => {
    // Mock function to simulate email uniqueness check
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(email !== "existing@example.com");
      }, 1000);
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with", loginEmail, loginPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-bgLogin bg-no-repeat bg-cover bg-footer relative">
      <div className="absolute top-0 right-0 m-4">
        <Button text="Home" href="/Homepage" />
      </div>
  
      <div className="bg-login2 bg-no-repeat bg-cover flex pt-20 pl-10 w-[980px] h-[750px] rounded-[100px]">
        <div className="max-w-sm w-[300px] h-[675px] shadow-none shadow-right border-l-0 overflow-hidden">
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
                activeTab === "Cadastrar" ? " bg-button-login text-cards rounded-full " : "bg-cards text-button-login rounded-full "
              }`}
              onClick={() => toggleTab("Cadastrar")}
            >
              Cadastrar
            </button>
          </div>
          <div className="pt-10">
            {activeTab === "Entrar" ? (
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="loginEmail" className="block text-sm text-cards">
                    E-mail
                  </label>
                  <input
                    type="text"
                    id="loginEmail"
                    className="mt-1 p-4 w-full bg-transparent border-b-2 outline-none"
                    placeholder="Insira seu e-mail"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <label htmlFor="loginPassword" className="block text-sm text-cards">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="loginPassword"
                    placeholder="Insira sua senha"
                    className="mt-1 p-4 w-full border-b-2 bg-transparent outline-none"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 pt-6 flex justify-center">
                  <button
                    type="submit"
                    className="w-32 bg-button shadow-[0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset] hover:bg-blue-600 text-cards py-2 rounded-[64px] transition duration-300"
                  >
                    Entrar
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm text-cards">
                    E-mail
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="mt-1 p-4 w-full bg-transparent border-b-2 outline-none"
                    placeholder="Insira seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="confirmEmail" className="block text-sm text-cards">
                    Confirmar E-mail
                  </label>
                  <input
                    type="text"
                    id="confirmEmail"
                    className="mt-1 p-4 w-full bg-transparent border-b-2 outline-none"
                    placeholder="Confirme seu e-mail"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 relative">
                 
                  <label htmlFor="password" className="block text-sm text-cards">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Insira sua senha"
                    className="mt-1 p-4 w-full border-b-2 bg-transparent outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <label htmlFor="confirmPassword" className="block text-sm text-cards">
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirme sua senha"
                    className="mt-1 p-4 w-full border-b-2 bg-transparent outline-none"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 pt-6 flex justify-center">
                  <button
                    type="submit"
                    className="w-32 bg-button shadow-[0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset] hover:bg-blue-600 text-cards py-2 rounded-[64px] transition duration-300"
                  >
                    Cadastrar
                  </button>
                </div>
              </form>
            )}
            
            {/* Exibição da mensagem de erro */}
            {error && <div className="text-red-500 text-center">{error}</div>}
            
            {/* Exibição da mensagem de sucesso */}
            {success && <div className="text-green-500 text-center">{success}</div>}
            
            {/* Link para redefinir senha */}
            <div className="py-3 text-center">
              <a href="#" className="text-cards">
                Esqueceu a senha?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
  

export default Login;
