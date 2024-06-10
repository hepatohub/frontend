import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonAction from "../ButtonAction";

const LoginForm = ({ onLogin, onRegister, mode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const onSubmit = async (data) => {
    if (mode === "login") {
      onLogin(data);
    } else {
      // Validar formato do e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
      }

      // Aqui você pode realizar outras validações, como verificação de unicidade de e-mail (do lado do cliente).
      // Se as validações passarem, você pode exibir uma mensagem de sucesso e redirecionar o usuário.
      // Por enquanto, apenas simular uma mensagem de sucesso.
      setRegistrationSuccess(true);
      // Redirecionar o usuário para a página inicial logado após 3 segundos
      setTimeout(() => {
        // Redirecionar o usuário para a página inicial
        window.location.href = "/Homepage";
      }, 3000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {mode === "register" && (
          <div>
            {errors.name && <p style={{ color: "red" }}>Nome é obrigatório</p>}
            <input
              type="text"
              placeholder="Insira seu nome e sobrenome"
              {...register("name", { required: true })}
              className="mt-1 p-4 w-full bg-transparent border-b-2 outline-none text-cards"
            />
          </div>
        )}
        <div>
          {errors.email && <p style={{ color: "red" }}>
            {errors.email.message}</p>}
          <input
            type="email"
            placeholder="Insira seu e-mail"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Por favor, insira um endereço de e-mail válido.",
              },
            })}
            className={`mt-1 p-4 w-full bg-transparent border-b-2 outline-none text-cards ${
              errors.email && "border-red-500" // Adicionando classe para destacar o campo com erro
            }`}
          />
        </div>
        <div>
          {errors.password && <p style={{ color: "red" }}>Senha é obrigatória</p>}
          <input
            type="password"
            placeholder="Insira sua senha"
            {...register("password", {
              required: true,
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/,
                message:
                  "A senha deve ter entre 8 e 14 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.",
              },
            })}
            className={`mt-1 p-4 w-full bg-transparent border-b-2 outline-none text-cards ${
              errors.password && "border-red-500" // Adicionando classe para destacar o campo com erro
            }`}
          />
          {errors.password && errors.password.type === "pattern" && (
            <p style={{ color: "red" }}>
              A senha deve ter entre 8 e 14 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.
            </p>
          )}
        </div>
        <div className="flex justify-center pt-10">
          <ButtonAction type="submit">{mode === "login" ? "Entrar" : "Cadastrar"}</ButtonAction>
        </div>
      </form>
      {registrationSuccess && (
        <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>Cadastro realizado com sucesso! Redirecionando para a página inicial...</p>
      )}
    </div>
  );
};

export default LoginForm;
