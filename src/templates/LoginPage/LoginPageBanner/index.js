import React from 'react';
import * as S from './styles';
import bannerImg from '../../../../public/photographer_login.png';

const LoginPageBanner = () => {
  return (
    <S.LoginPageBannerContainer
      banner={bannerImg.src}
    ></S.LoginPageBannerContainer>
  );
};

export default LoginPageBanner;
