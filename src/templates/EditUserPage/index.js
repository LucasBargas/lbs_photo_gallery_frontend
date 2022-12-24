import React from 'react';
import * as S from './styles';
import EditUserPageBanner from './EditUserPageBanner';

const EditUserPage = ({ datas }) => {
  return (
    <S.EditUserPageContainer>
      <S.EditUserPageWrapper>
        <EditUserPageBanner />
      </S.EditUserPageWrapper>
    </S.EditUserPageContainer>
  );
};

export default EditUserPage;
