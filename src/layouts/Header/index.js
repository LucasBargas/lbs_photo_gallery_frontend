import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as S from './styles';
import AppContainer from '../../components/AppContainer';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import { BsList } from 'react-icons/bs';

const Header = () => {
  const { asPath } = useRouter();
  const [headerNavMobile, setHeaderNavMobile] = useState(true);

  return (
    <S.HeaderContainer
      shadow={asPath === '/' || asPath.includes('lucas_bargas')}
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
