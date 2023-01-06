import { useRouter } from 'next/router';
import React from 'react';
import RegisterPage from '../../templates/RegisterPage';
import bannerImg from '../../../public/photographer_register.jpg';
import HeadPerPage from '../../components/HeadPerPage';
import { parseCookies } from 'nookies';

export const getServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const token = cookies.galleryPhotoApiToken;

  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const Register = () => {
  const router = useRouter();

  return (
    <>
      <HeadPerPage
        title="Galeria de Fotos LBS | Cadastre-se"
        url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.pathname}`}
        banner={bannerImg.src}
      />
      <RegisterPage />
    </>
  );
};

export default Register;
