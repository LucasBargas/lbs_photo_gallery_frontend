import React from 'react';
import AppContainer from '../../components/AppContainer';
import HeaderMedias from './HeaderMedias';
import HeaderNav from './HeaderNav';
import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <AppContainer>
        <S.HeaderAreaTop>
          <HeaderMedias />
          <HeaderNav />
        </S.HeaderAreaTop>
      </AppContainer>
    </S.HeaderContainer>
  );
};

export default Header;
