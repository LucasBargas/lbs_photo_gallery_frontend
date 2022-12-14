import React from 'react';
import AppContainer from '../../components/AppContainer';
import HeaderMedias from './HeaderMedias';
import * as S from './styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <AppContainer>
        <S.HeaderArea>
          <HeaderMedias />
          <p>Navegação</p>
        </S.HeaderArea>
      </AppContainer>
    </S.HeaderContainer>
  );
};

export default Header;
