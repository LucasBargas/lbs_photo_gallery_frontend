import React from 'react';
import * as S from './styles';

const Button = ({ loading, children }) => {
  return (
    <S.ButtonContainer loading={loading}>
      <button>{children}</button>
    </S.ButtonContainer>
  );
};

export default Button;
