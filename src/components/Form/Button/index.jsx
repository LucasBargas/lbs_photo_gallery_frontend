import React from 'react';
import * as S from './styles';

const Button = ({ loading, children }) => (
  <S.ButtonContainer loading={loading}>
    <button type="submit">{children}</button>
  </S.ButtonContainer>
);

export default Button;
