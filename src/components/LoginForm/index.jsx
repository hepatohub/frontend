import React from "react";
import { useForm } from "react-hook-form";
import ButtonAction from "../ButtonAction";

const LoginForm = ({ onLogin, onRegister, mode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (mode === "login") {
      onLogin(data);
    } else {
      onRegister(data);
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
          {errors.email && <p style={{ color: "red" }}>Email é obrigatório</p>}
          <input
            type="email"
            placeholder="Insira seu e-mail"
            {...register("email", { required: true })}
            className="mt-1 p-4 w-full bg-transparent border-b-2 outline-none text-cards"
          />
        </div>
        <div>
          {errors.password && <p style={{ color: "red" }}>Senha é obrigatória</p>}
          <input
            type="password"
            placeholder="Insira sua senha"
            {...register("password", { required: true })}
            className="mt-1 p-4 w-full bg-transparent border-b-2 outline-none text-cards"
          />
        </div>
        <div className="flex justify-center pt-10 ">
          <ButtonAction type="submit">{mode === "login" ? "Entrar" : "Cadastrar"}</ButtonAction>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
