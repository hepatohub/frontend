"use client"
import React, { useState } from 'react';
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { AiOutlineMail, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import Button from "@/components/Button";

const getYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [formErrors, setFormErrors] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    if (value.trim() === '' && e.target.required) {
      setFormErrors(prevState => ({
        ...prevState,
        [name]: 'Este campo é obrigatório.'
      }));
    } else {
      setFormErrors(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode realizar a lógica para enviar os dados do formulário
    console.log(formData);
    // Resetar o estado do formulário após o envio
    setFormData({
      nome: '',
      email: '',
      mensagem: ''
    });
    setFormErrors({
      nome: '',
      email: '',
      mensagem: ''
    });
  };

  const handleCancel = () => {
    // Lógica para cancelar (se necessário)
    console.log('Formulário cancelado');
    setIsCancelled(true); // Define o estado de cancelamento como verdadeiro
  };

  return (
    <footer className="bg-bgFooter bg-no-repeat bg-cover bg-footer text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-around">
        {/* Categoria */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
          <h2 className="text-lg font-bold mb-4">Categoria</h2>
          <ul>
            <li><a href="#" className="text-base block hover:text-gray-400 mb-8">Página Inicial</a></li>
            <li><a href="/hepatohub" className="text-base block hover:text-gray-400 mb-8">Hepato Hub</a></li>
            <li><a href="#" className="text-base block hover:text-gray-400 mb-8">Auto Cuidado</a></li>
            <li><a href="#" className="text-base block hover:text-gray-400 mb-8">Medicamentos</a></li>
            <li><a href="#" className="text-base block hover:text-gray-400 mb-8">Conheça a Equipe</a></li>
            <li><a href="#" className="text-base block hover:text-gray-400 mb-8">Colabore</a></li>
          </ul>
        </div>

        {/* Atendimento */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
          <h2 className="text-lg font-bold mb-4">Atendimento</h2>
          <ul>
            <li className="flex items-center mb-5">
              <FaWhatsapp className="mr-2" />
              <a href="#" className="text-base hover:text-gray-400">WhatsApp: +123456789</a>
            </li>
            <li className="flex items-center mb-5">
              <FaPhone className="mr-2" />
              <a href="#" className="text-base hover:text-gray-400">Telefone: +987654321</a>
            </li>
            <li className="flex items-center mb-5">
              <AiOutlineMail className="mr-2" />
              <a href="mailto: portalhepatico@gmail.com
" className="text-base  hover:text-gray-400">E-mail:  portalhepatico@gmail.com
</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
          <h2 className="text-lg font-bold mb-4">Social</h2>
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
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
          <h2 className="text-lg font-bold mb-4">Formulário</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nome" className="block text-sm font-bold mb-1">Nome:</label>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" className="w-full px-4 py-2 rounded bg-white text-black outline-none" required />
              {formErrors.nome && <span className="text-red-500 text-sm">{formErrors.nome}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold mb-1">E-mail:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-2 rounded bg-white text-black outline-none" required />
              {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="mensagem" className="block text-sm font-bold mb-1">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Mensagem" maxLength={1000} className="w-full px-4 py-2 rounded bg-white text-black outline-none" required />
              {formErrors.mensagem && <span className="text-red-500 text-sm">{formErrors.mensagem}</span>}
            </div>
            <div className='flex justify-end gap-5'>
              <Button text="Enviar" type="submit" onClick={handleSubmit} />
              <Button text="Cancelar" type="button" onClick={handleCancel} />
            </div>
          </form>
        </div>
      </div>

      {/* Links adicionais */}
      <div className="container mx-auto  mt-8">
        <div className="mb-4">
          <a href="#" className="mr-4 hover:text-gray-400">Termos de uso</a>
          <a href="#" className="hover:text-gray-400">Política de privacidade</a>
        </div>
        <div>
          <p className='text-center'>© {getYear()} Projeto de Gestão de Saúde Hepática. Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
