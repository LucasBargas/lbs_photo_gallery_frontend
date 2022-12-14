import React from 'react';
import * as S from './styles';

const AppContainer = ({ mw, children }) => {
  return <S.AppContainerArea mw={mw}>{children}</S.AppContainerArea>;
};

export default AppContainer;
