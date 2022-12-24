import React from 'react';
import * as S from './styles';
import RegisterPageForm from './RegisterPageForm';
import RegisterPageBanner from './RegisterPageBanner';

const RegisterPage = () => {
  return (
    <S.RegisterPageContainer>
      <S.RegisterPageWrapper>
        <RegisterPageBanner />
        <RegisterPageForm />
      </S.RegisterPageWrapper>
    </S.RegisterPageContainer>
  );
};

export default RegisterPage;
