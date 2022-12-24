import React from 'react';
import * as S from './styles';
import bannerImg from '../../../../public/photographer_edit.png';

const EditUserPageBanner = () => {
  return (
    <S.EditUserPageBannerContainer
      banner={bannerImg.src}
    ></S.EditUserPageBannerContainer>
  );
};

export default EditUserPageBanner;
