"use client";
import React from "react";

const LoginForm = ({ onLogin, onRegister }) => {
  // Verificar se estamos no lado do cliente
  // const isClient = typeof window !== 'undefined';

  // if (!isClient) {
  //   return null;
  //    // Se não estiver no lado do cliente, não renderizar nada
  // }

  // Se estiver no lado do cliente, importar e usar useState
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [mode, setMode] = React.useState("login");
  const [error, setError] = React.useState("");

  const handleLogin = () => {
    // Lógica de login
  };

  const handleRegister = () => {
    // Lógica de registro
  };

  return (
    <div>
      {/* Renderização do formulário */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {mode === "login" ? (
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Entrar</button>
          <p onClick={() => setMode("register")}>Cadastrar-se</p>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Registrar</button>
          <p onClick={() => setMode("login")}>Já tem uma conta? Entrar</p>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
