import React from 'react';
import * as S from './styles';
import EditUserPageBanner from './EditUserPageBanner';
import EditUserPageForm from './EditUserPageForm';

const EditUserPage = ({ datas }) => {
  return (
    <S.EditUserPageContainer>
      <S.EditUserPageWrapper>
        <EditUserPageBanner />
        <EditUserPageForm datas={datas} />
      </S.EditUserPageWrapper>
    </S.EditUserPageContainer>
  );
};

export default EditUserPage;
