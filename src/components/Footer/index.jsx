"use client"
import React, { useState } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import ButtonAction from "../ButtonAction";

const getYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [formErrors, setFormErrors] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (value.trim() === "" && e.target.required) {
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: "Este campo é obrigatório.",
      }));
    } else if (name === "email" && !isValidEmail(value)) {
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: "Por favor, insira um email válido.",
      }));
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      setFormData({
        nome: "",
        email: "",
        mensagem: "",
      });
      setFormErrors({
        nome: "",
        email: "",
        mensagem: "",
      });
    } else {
      console.log("Por favor, corrija os erros antes de enviar o formulário.");
    }
  };

  const validateForm = () => {
    return Object.values(formErrors).every((error) => error === "");
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleCancel = () => {
    setFormData({
      nome: "",
      email: "",
      mensagem: "",
    });
    setFormErrors({
      nome: "",
      email: "",
      mensagem: "",
    });
    console.log("Formulário cancelado");
  };

  return (
    <footer className="bg-bgFooter bg-no-repeat bg-cover bg-footer text-white py-12 text-shadow font-vietnam">
      <div className="container mx-auto flex flex-wrap justify-around">
        {/* Categoria */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8 px-4">
          <h2 className="text-lg font-bold mb-12">CATEGORIAS</h2>
          <ul className="flex flex-col gap-5">
            <li>
              <a href="#" className="text-base block hover:text-gray-400">
                Página Inicial
              </a>
            </li>
            <li>
              <a
                href="/hepatohub"
                className="text-base block hover:text-gray-400"
              >
                Hepato Hub
              </a>
            </li>
            <li>
              <a href="#" className="text-base block hover:text-gray-400">
                Auto Cuidado
              </a>
            </li>
            <li>
              <a href="#" className="text-base block hover:text-gray-400">
                Medicamentos
              </a>
            </li>
            <li>
              <a href="#" className="text-base block hover:text-gray-400">
                Conheça a Equipe
              </a>
            </li>
            <li>
              <a href="#" className="text-base block hover:text-gray-400">
                Colabore
              </a>
            </li>
          </ul>
        </div>

        {/* Atendimento */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8 px-4">
          <h2 className="text-lg font-bold mb-12">ATENDIMENTO</h2>
          <ul className="flex flex-col gap-6">
            <li className="flex items-center">
              <FaWhatsapp className="mr-2" />
              <a href="#" className="text-base hover:text-gray-400">
                WhatsApp: +123456789
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" />
              <a href="#" className="text-base hover:text-gray-400">
                Telefone: +987654321
              </a>
            </li>
            <li className="flex items-center flex-wrap">
              <AiOutlineMail className="mr-2" />
              <a
                href="mailto: portalhepatico@gmail.com"
                className="sm:text-[14px] lg:text-base text-wrap hover:text-gray-400 max-w-full"
              >
                E-mail: portalhepatico@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8 px-4 flex justify-start
        items-center flex-col">
          <h2 className="text-lg font-bold mb-12">SOCIAL</h2>
          <div className="flex items-center">
            <a href="#" className="mr-4 hover:text-gray-400">
              <AiFillInstagram className="w-10 h-10" />
            </a>
            <a href="#" className="mr-4 hover:text-gray-400">
              <AiFillLinkedin className="w-10 h-10" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <AiFillFacebook className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Formulário */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8 px-4">
          <h2 className="text-lg font-bold mb-12">FORMULÁRIO</h2>
          <form action="https://formspree.io/f/xeqybjgz" method="POST" className="flex flex-col gap-4">
            <div className="mb-4">
              <label htmlFor="nome" className="block text-sm font-bold mb-1">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome"
                className="w-full px-4 py-2 rounded bg-white text-black outline-none"
                required
              />
              {formErrors.nome && (
                <span className="text-red-500 text-sm">{formErrors.nome}</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 rounded bg-white text-black outline-none"
                required
              />
              {formErrors.email && (
                <span className="text-red-500 text-sm">{formErrors.email}</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="mensagem"
                className="block text-sm font-bold mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Mensagem"
                maxLength={1000}
                className="w-full px-4 py-2 rounded bg-white text-black outline-none h-[78px]"
                required
              />
              {formErrors.mensagem && (
                <span className="text-red-500 text-sm">
                  {formErrors.mensagem}
                </span>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-end gap-5">
              <ButtonAction
                text="Enviar"
                type="submit"
                onClick={handleSubmit} 
              />
              <ButtonAction
                text="Cancelar"
                type="button"
                onClick={handleCancel}
              />
            </div>
          </form>
        </div>
      </div>

      {/* Links adicionais */}
      <div className="container mx-auto mt-8 text-base">
        <div className="mb-4">
          <a href="#" className="hover:text-gray-400 mr-8">
            Termos de uso
          </a>
          <a href="#" className="hover:text-gray-400">
            Política de privacidade
          </a>
        </div>
        <div>
          <p className="text-center">
            © {getYear()} Projeto de Gestão de Saúde Hepática. Todos os direitos
            reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
