import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import RegisterPage from '../../templates/RegisterPage';
import bannerImg from '../../../public/photographer.jpg';
import HeadPerPage from '../../components/HeadPerPage';

const Register = () => {
  const router = useRouter();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    authenticated ? router.push('/') : router.push('/cadastre-se');
  }, [authenticated, router]);

  return (
    <>
      <HeadPerPage
        title="Galeria de Fotos LBS | Cadastre-se"
        url={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`}
        banner={bannerImg.src}
      />
      <RegisterPage />
    </>
  );
};

export default Register;
