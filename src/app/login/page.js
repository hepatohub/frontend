"use client";
import Button from '@/components/Button';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LoginForm from '@/components/LoginForm';


import React from 'react'
// import { GoogleLogin } from 'react-google-login';
// import ReCAPTCHA from 'react-google-recaptcha';

const login = () => {
  const handleGoogleLoginSuccess = (response) => {
    console.log('Google Login Success', response);
    // Aqui você pode implementar a lógica para processar o login com o Google
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google Login Error', error);
  };

  return (
    <div>
      <Header />
     
    
      <Button  text="testando"/>

      <LoginForm />

      <Button />
  
      {/* <GoogleLogin
        clientId="SEU_CLIENT_ID_DO_GOOGLE"
        buttonText="Login com Google"
        onSuccess={handleGoogleLoginSuccess}
        onFailure={handleGoogleLoginFailure}
        cookiePolicy={'single_host_origin'}
      /> */}
      {/* <ReCAPTCHA sitekey="SEU_SITE_KEY_DO_RECAPTCHA" /> */}
      <Footer />
    </div>
  );
};

export default login;