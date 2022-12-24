import Head from 'next/head';
import React from 'react';

const HeadPerPage = ({ title, url, banner }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Galeria de fotos desenvolvida, para estudo, por Lucas Bargas com Nextjs, para exercitar o consumo da API Rest desenvolvida pelo mesmo com Nodejs e Express."
      />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:site_name" content="Galeria de Fotos LBS" />
      <meta
        property="og:description"
        content="Galeria de fotos desenvolvida, para estudo, por Lucas Bargas com Nextjs, para exercitar o consumo da API Rest desenvolvida pelo mesmo com Nodejs e Express."
      />
      <meta property="og:url" content={url} />
      {banner && <link rel="preload" href={banner} as="image" />}
    </Head>
  );
};

export default HeadPerPage;
