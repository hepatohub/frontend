import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";

const LoginForm = ({ onLogin, onRegister, mode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (mode === "login") {
      // Lógica de login
      onLogin(data);
    } else {
      // Lógica de registro
      onRegister(data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {mode === "register" && (
          <div>
            {errors.name && <p style={{ color: "red" }}>Nome é obrigatório</p>}
            <input
              type="text"
              placeholder="Nome"
              {...register("name", { required: true })}
            />
          </div>
        )}
        {mode === "register" && (
          <div>
            {errors.email && <p style={{ color: "red" }}>Email é obrigatório</p>}
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
        )}
        <div>
          {errors.password && <p style={{ color: "red" }}>Senha é obrigatória</p>}
          <input
            type="password"
            placeholder="Senha"
            {...register("password", { required: true })}
          />
        </div>
        {mode === "register" && (
          <div>
            {errors.confirmPassword && <p style={{ color: "red" }}>Confirmação de Senha é obrigatória</p>}
            <input
              type="password"
              placeholder="Confirmar Senha"
              {...register("confirmPassword", { required: true })}
            />
          </div>
        )}
        <Button type="submit">{mode === "login" ? "Entrar" : "Cadastrar"}</Button>
      </form>
    </div>
  );
};

export default LoginForm;
