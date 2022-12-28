import React from 'react';
import HeadPerPage from '../components/HeadPerPage';
import HomePage from '../templates/HomePage';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getStaticProps = async () => {
  const res = await fetch(`${apiUrl}/photos`);
  const photos = await res.json();

  return {
    props: { photos },
  };
};

const Home = ({ photos }) => {
  console.log(photos);

  return (
    <>
      <HeadPerPage
        title="Galeria de Fotos LBS"
        url={process.env.NEXT_PUBLIC_DOMAIN_URL}
      />
      <HomePage photos={photos} home />
    </>
  );
};

export default Home;
