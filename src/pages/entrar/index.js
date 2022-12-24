import { useRouter } from 'next/router';
import React from 'react';
import LoginPage from '../../templates/LoginPage';
import HeadPerPage from '../../components/HeadPerPage';
import bannerImg from '../../../public/photographer_login.jpg';

const Login = () => {
  const router = useRouter();

  return (
    <>
      <HeadPerPage
        title="Galeria de Fotos LBS | Entrar"
        url={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`}
        banner={bannerImg.src}
      />
      <LoginPage />
    </>
  );
};

export default Login;
