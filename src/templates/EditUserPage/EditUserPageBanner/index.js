import React from 'react';
import * as S from './styles';
import bannerImg from '../../../../public/photographer_edit.jpg';

const EditUserPageBanner = () => {
  return (
    <S.EditUserPageBannerContainer
      banner={bannerImg.src}
    ></S.EditUserPageBannerContainer>
  );
};

export default EditUserPageBanner;
