import { useRouter } from 'next/router';
import React from 'react';
import AppContainer from '../../components/AppContainer';
import HeaderLogo from './HeaderLogo';
import HeaderMedias from './HeaderMedias';
import HeaderNav from './HeaderNav';
import * as S from './styles';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <S.HeaderContainer
      shadow={pathname === '/' || pathname.includes('usuario')}
    >
      <AppContainer>
        <HeaderMedias />
        <S.HeaderArea>
          <HeaderLogo />
          <HeaderNav />
        </S.HeaderArea>
      </AppContainer>
    </S.HeaderContainer>
  );
};

export default Header;
