import React from 'react';
import * as S from './styles';
import EditUserPageBanner from './EditUserPageBanner';
import EditUserPageForm from './EditUserPageForm';
import useReqApi from '../../hooks/useReqApi';

const EditUserPage = () => {
  const { datas } = useReqApi('/users/auth-user', true);

  return (
    <S.EditUserPageContainer>
      <S.EditUserPageWrapper>
        <EditUserPageBanner />
        {datas && <EditUserPageForm datas={datas} />}
      </S.EditUserPageWrapper>
    </S.EditUserPageContainer>
  );
};

export default EditUserPage;
