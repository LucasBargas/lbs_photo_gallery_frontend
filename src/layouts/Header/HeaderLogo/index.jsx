import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';

const HeaderLogo = () => (
  <S.HeaderLogoContainer>
    <h1>
      <NavLink to="/">#Galeria de Fotos LBS</NavLink>
    </h1>
  </S.HeaderLogoContainer>
);

export default HeaderLogo;
