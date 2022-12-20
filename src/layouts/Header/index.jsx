import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';
import { useLocation, useParams } from 'react-router-dom';
import * as S from './styles';
import AppContainer from '../../components/AppContainer';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';

const Header = () => {
  const location = useLocation();
  const [headerNavMobile, setHeaderNavMobile] = useState(false);

  return (
    <S.HeaderContainer
      shadow={location.pathname !== '/' && location.pathname !== '/meu-perfil'}
    >
      <AppContainer>
        <S.HeaderArea>
          <HeaderLogo />
          <HeaderNav
            headerNavMobile={headerNavMobile}
            setHeaderNavMobile={setHeaderNavMobile}
          />
          <S.HeaderMobileButton id="HeaderMobileButton">
            <button type="button" onClick={() => setHeaderNavMobile(true)}>
              <BsList />
            </button>
          </S.HeaderMobileButton>
        </S.HeaderArea>
      </AppContainer>
    </S.HeaderContainer>
  );
};

export default Header;
