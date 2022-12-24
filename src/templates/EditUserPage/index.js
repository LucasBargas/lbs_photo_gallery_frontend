import React from 'react';
import * as S from './styles';
import EditUserPageBanner from './EditUserPageBanner';
import EditUserPageForm from './EditUserPageForm';

const EditUserPage = () => {
  return (
    <S.EditUserPageContainer>
      <S.EditUserPageWrapper>
        <EditUserPageBanner />
        <EditUserPageForm />
      </S.EditUserPageWrapper>
    </S.EditUserPageContainer>
  );
};

export default EditUserPage;
