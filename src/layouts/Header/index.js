import Link from 'next/link';
import React from 'react';
import AppContainer from '../../components/AppContainer';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <AppContainer>
        <S.HeaderArea>
          <HeaderLogo />
          <HeaderNav />
        </S.HeaderArea>
      </AppContainer>
    </S.HeaderContainer>
  );
};

export default Header;
