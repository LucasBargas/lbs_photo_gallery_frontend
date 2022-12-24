import { useRouter } from 'next/router';
import React from 'react';
import RegisterPage from '../../templates/RegisterPage';
import bannerImg from '../../../public/photographer_register.png';
import HeadPerPage from '../../components/HeadPerPage';

const Register = () => {
  const router = useRouter();

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
