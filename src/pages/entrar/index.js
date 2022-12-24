import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import LoginPage from '../../templates/LoginPage';
import HeadPerPage from '../../components/HeadPerPage';

const Login = () => {
  const router = useRouter();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    authenticated ? router.push('/') : router.push('/entrar');
  }, [authenticated, router]);

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
