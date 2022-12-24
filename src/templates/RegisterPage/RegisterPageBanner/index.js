import React from 'react';
import * as S from './styles';
import bannerImg from '../../../../public/photographer_register.jpg';

const RegisterPageBanner = () => {
  return (
    <S.RegisterPageBannerContainer
      banner={bannerImg.src}
    ></S.RegisterPageBannerContainer>
  );
};

export default RegisterPageBanner;
