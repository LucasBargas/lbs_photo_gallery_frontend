import Link from 'next/link';
import React from 'react';
import * as S from './styles';

const HeaderLogo = () => {
  return (
    <S.HeaderLogoContainer>
      <h1>
        <Link href="/">#Galeria de Fotos LBS</Link>
      </h1>
    </S.HeaderLogoContainer>
  );
};

export default HeaderLogo;
