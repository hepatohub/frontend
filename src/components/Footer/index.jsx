"use client";
import Image from "next/image";
import { useState } from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp
} from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { RiWhatsappFill } from "react-icons/ri";
import logo from "../../../public/logo.png";
import Button from "../Button";

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
    const {name, value} = e.target;
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
    <footer className="bg-gradient-to-r from-[#33A4CC] to-[#164B6D] text-white text-shadow font-vietnam px-6 z-50 relative h-[407px] flex flex-col justify-end ">
    <div className="absolute inset-0 bg-bgFooter bg-no-repeat bg-cover"></div>
      <div className="lg:hidden relative flex justify-between items-center gap-6 ">
        <div className="bg-white rounded-full flex items-center justify-center ">
          <Image
            src={logo}
            alt="Imagem da logo do HepatoHub"
            width={63}
            height={49}
          />
        </div>
        <p className="font-be-vietnam">
          &copy; 2024 Projeto de Gestão de Saúde Hepática. Todos os direitos
          reservados
        </p>
      </div>
      <div className="container relative lg:mx-auto flex flex-wrap justify-around sm:flex-col lg:flex-row sm:items-start sm:mx-0">
        {/* Categoria */}
        <div className="w-full mt-28 sm:w-1/2 md:w-1/4 lg:w-1/4  pl-[51px] lg:block sm:hidden">
          <h2 className="text-[19px] font-bold mb-12 font-be-vietnam">CATEGORIAS</h2>
          <ul className="flex flex-col gap-5">
            <li>
              <a href="/Homepage" className="font-be-vietnam text-base block hover:text-gray-200">
                Página Inicial
              </a>
            </li>
            <li>
              <a
                href="/hepatohub"
                className=" font-be-vietnam text-base block hover:text-gray-200"
              >
                Hepato Hub
              </a>
            </li>
            <li>
              <a href="/autocuidado" className=" font-be-vietnam text-base block hover:text-gray-200">
                Auto Cuidado
              </a>
            </li>
            <li>
              <a href="/construcao" className=" font-be-vietnam text-base block hover:text-gray-200">
                Medicamentos
              </a>
            </li>
            <li>
              <a href="/construcao" className=" font-be-vietnam text-base block hover:text-gray-200">
                Conheça a Equipe
              </a>
            </li>
            <li>
              <a href="/construcao" className=" font-be-vietnam text-base block hover:text-gray-200">
                Fórum
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL MOBILE */}
        <div className="w-full lg:hidden sm:block">
          <h2 className=" font-be-vietnam text-lg font-bold border-b-4 border-b-white ">Social</h2>
          <div className="flex items-center justify-between">
            <a href="#" className="mr-4 hover:text-gray-200">
              <AiFillLinkedin size={50} />
            </a>

            <a href="#" className="mr-4 hover:text-gray-200">
              <ImInstagram size={50} />
            </a>

            <a href="https://www.facebook.com" target="_blank" className="hover:text-gray-200">
              <AiFillFacebook size={50} />
            </a>

            <a href="#" className="hover:text-gray-200">
              <AiOutlineWhatsApp size={50}/>
            </a>
          </div>
        </div>

        {/* Atendimento */}
        <div className="w-full mt-28 sm:w-1/2 md:w-1/4 lg:w-1/4 px-4">
          <h2 className=" font-be-vietnam text-[19px] font-bold mb-12">ATENDIMENTO</h2>
          <ul className="flex flex-col gap-6">
           <li className="flex items-center flex-wrap">
              <RiWhatsappFill className="mr-2 text-[15px]" />
              <a
                href="https://wa.me/552188888888"
                className=" font-be-vietnam text-[14px] lg:text-base text-wrap hover:text-gray-200 max-w-full"
              >
                Whatsap: (21) 8888-8888
              </a>
            </li>
            <li className="flex items-center flex-wrap">
              <FaPhoneAlt className="mr-2 text-[15px]" />
              <a
                href="tel:+552155555555"
                className=" font-be-vietnam text-[14px] lg:text-base text-wrap hover:text-gray-200 max-w-full"
              >
                Telefone: (21) 5555-5555
              </a>
            </li>
            <li className="flex items-center flex-wrap">
              <AiOutlineMail className="mr-2 text-[15px]" />
              <a
                href="mailto: hepatohub@gmail.com"
                className=" font-be-vietnam text-[14px] lg:text-base text-wrap hover:text-gray-200 max-w-full"
              >
                E-mail: hepatohub@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div
          className="w-full mt-28 sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 flex justify-start
        items-center flex-col lg:block sm:hidden"
        >
          <h2 className=" font-be-vietnam text-[19px] ml-8 font-bold mb-12">SOCIAL</h2>
          <div className="flex items-center">
            <a href="#" className="mr-4 hover:text-gray-200">
              <ImInstagram className="w-8 h-8" />
            </a>
            <a href="#" className="mr-4 hover:text-gray-200">
              <AiFillLinkedin className="w-[39px] h-[39px]" />
            </a>
            <a href="https://www.facebook.com" target="_blank" className="hover:text-gray-200">
              <AiFillFacebook className="w-[39px] h-[39px]" />
            </a>
          </div>
        </div>

        {/* Formulário */}
        <div className="w-full mt-28 sm:w-1/2 md:w-1/4 lg:w-1/4  px-4">
          <h2 className=" font-be-vietnam text-lg font-bold text-center">FORMULÁRIO</h2>
          <form
            action="https://formspree.io/f/xeqybjgz"
            method="POST"
            className="flex flex-col gap-4"
          >
            <div className="">
              <label htmlFor="nome" className=" font-be-vietnam block text-sm font-bold mb-1">
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
            <div className="">
              <label htmlFor="email" className=" font-be-vietnam block text-sm font-bold mb-1">
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
            <div className="">
              <label
                htmlFor="mensagem"
                className=" font-be-vietnam block text-sm font-bold mb-1"
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
              <Button
                text="Enviar"
                type="submit"
                href={"/"}
                onClick={handleSubmit}
                rounded={false}
                widthPrimario={false}
              />
              <Button
                text="Cancelar"
                type="button"
                href={"/"}
                onClick={handleCancel}
                rounded={false}
                widthPrimario={false}
              />
            </div>
          </form>
        </div>
      </div>

      {/* Links adicionais */}
      <div className=" relative container mx-auto ">
        <div className="">
          <a href="#" className="text-[15px] pl-[51px] font-be-vietnam hover:text-gray-200 mr-8">
            Termos de Uso
          </a>
          <a href="#" className="text-[15px] font-be-vietnam hover:text-gray-200">
            Política de Privacidade
          </a>
        </div>
        <div>
          <p className="mb-1 text-[12px] font-be-vietnam text-center">
            © {getYear()} Projeto de Gestão de Saúde Hepática. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
