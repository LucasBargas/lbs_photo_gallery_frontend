import React from 'react';
import * as S from './styles';

const FormAuth = ({ onSubmit, title, children }) => {
  return (
    <S.FormAuthContainer onSubmit={onSubmit}>
      <h2>{title}</h2>
      <S.FormAuthArea>{children}</S.FormAuthArea>
    </S.FormAuthContainer>
  );
};

export default FormAuth;
