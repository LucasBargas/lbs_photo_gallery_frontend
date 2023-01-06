import { useRouter } from 'next/router';
import React from 'react';
import LoginPage from '../../templates/LoginPage';
import HeadPerPage from '../../components/HeadPerPage';
import bannerImg from '../../../public/photographer_login.jpg';
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

const Login = () => {
  const router = useRouter();

  return (
    <>
      <HeadPerPage
        title="Galeria de Fotos LBS | Entrar"
        url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.pathname}`}
        banner={bannerImg.src}
      />
      <LoginPage />
    </>
  );
};

export default Login;
