import React from 'react';
import * as S from './styles';
import AppContainer from '../../components/AppContainer';

const NotFoundPage = () => {
  return (
    <S.NotFoundPageContainer>
      <AppContainer>
        <h1>Página não encontradada :(</h1>
      </AppContainer>
    </S.NotFoundPageContainer>
  );
};

export default NotFoundPage;
