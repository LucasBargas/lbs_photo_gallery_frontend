import Head from 'next/head';
import React from 'react';
import * as S from './styles';
import RegisterPageForm from './RegisterPageForm';
import RegisterPageBanner from './RegisterPageBanner';
import bannerImg from '../../../public/photographer.jpg';

const RegisterPage = () => {
  return (
    <>
      <Head>
        <link rel="preload" href={bannerImg.src} as="image" />
      </Head>

      <S.RegisterPageContainer>
        <S.RegisterPageWrapper>
          <RegisterPageBanner />
          <RegisterPageForm />
        </S.RegisterPageWrapper>
      </S.RegisterPageContainer>
    </>
  );
};

export default RegisterPage;
