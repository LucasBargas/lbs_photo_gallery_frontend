import React from 'react';
import HeadPerPage from '../components/HeadPerPage';

function Homepage() {
  return (
    <>
      <HeadPerPage
        title="Galeria de Fotos LBS"
        url={process.env.NEXT_PUBLIC_DOMAIN_URL}
      />
      <div>Home</div>
    </>
  );
}

export default Homepage;
