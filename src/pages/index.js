import React from 'react';
import HeadPerPage from '../components/HeadPerPage';
import HomePage from '../templates/HomePage';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const fetchDatas = async (url) => {
  let res;
  let json;

  try {
    res = await fetch(url);
    json = await res.json();
  } catch (error) {
    json = null;
    return error;
  } finally {
    return json;
  }
};

export const getServerSideProps = async () => {
  const photos = await fetchDatas(`${apiUrl}/photos`);

  return {
    props: { photos },
  };
};

const Home = ({ photos }) => {
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
