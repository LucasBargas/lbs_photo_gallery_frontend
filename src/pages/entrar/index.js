import { useRouter } from 'next/router';
import React from 'react';
import LoginPage from '../../templates/LoginPage';
import HeadPerPage from '../../components/HeadPerPage';

const Login = () => {
  const router = useRouter();

  return (
    <>
      <HeadPerPage
        title="Galeria de Fotos LBS | Entrar"
        url={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`}
      />
      <LoginPage />
    </>
  );
};

export default Login;
