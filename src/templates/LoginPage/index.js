import React from 'react';
import * as S from './styles';
import LoginPageForm from './LoginPageForm';
import LoginPageBanner from './LoginPageBanner';

const RegisterPage = () => {
  return (
    <S.LoginPageContainer>
      <S.LoginPageWrapper>
        <LoginPageForm />
        <LoginPageBanner />
      </S.LoginPageWrapper>
    </S.LoginPageContainer>
  );
};

export default RegisterPage;
