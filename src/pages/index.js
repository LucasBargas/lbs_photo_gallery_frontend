import React from 'react';
import HeadPerPage from '../components/HeadPerPage';

const Homepage = () => {
  return (
    <>
      <HeadPerPage
        title="Galeria de Fotos LBS"
        url={process.env.NEXT_PUBLIC_APP_DOMAIN}
      />
      <div>Home</div>
    </>
  );
};

export default Homepage;
