import React from 'react';
import * as S from './styles';
import RegisterForm from './RegisterForm';
import RegisterBanner from './RegisterBanner';

const Register = () => (
  <S.RegisterContainer>
    <S.RegisterWrapper>
      <RegisterBanner />
      <RegisterForm />
    </S.RegisterWrapper>
  </S.RegisterContainer>
);

export default Register;
