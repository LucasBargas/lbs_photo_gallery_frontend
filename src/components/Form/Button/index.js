import React from 'react';
import * as S from './styles';

const Button = ({ children }) => {
  return (
    <S.ButtonContainer>
      <button>{children}</button>
    </S.ButtonContainer>
  );
};

export default Button;
