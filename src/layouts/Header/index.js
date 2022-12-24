import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as S from './styles';
import AppContainer from '../../components/AppContainer';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import { BsList } from 'react-icons/bs';

const Header = () => {
  const { pathname } = useRouter();
  const [headerNavMobile, setHeaderNavMobile] = useState(false);

  return (
    <S.HeaderContainer
      shadow={pathname !== '/' && !pathname.includes('perfil')}
    >
      <AppContainer>
        <S.HeaderArea>
          <HeaderLogo />
          <HeaderNav
            headerNavMobile={headerNavMobile}
            setHeaderNavMobile={setHeaderNavMobile}
          />
          <S.HeaderMobileButton id="HeaderMobileButton">
            <button onClick={() => setHeaderNavMobile(true)}>
              <BsList />
            </button>
          </S.HeaderMobileButton>
        </S.HeaderArea>
      </AppContainer>
    </S.HeaderContainer>
  );
};

export default Header;
