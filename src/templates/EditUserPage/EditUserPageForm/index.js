import React from 'react';
import * as S from './styles';
import useReqApi from '../../../hooks/useReqApi';

const EditUserPageForm = () => {
  const { datas } = useReqApi('/users/auth-user', true);
  return (
    <S.EditUserPageFormContainer>
      {datas && (
        <S.EditUserPageFormWrapper>
          <S.EditUserPageFormPhoto>{datas.userName}</S.EditUserPageFormPhoto>
        </S.EditUserPageFormWrapper>
      )}
    </S.EditUserPageFormContainer>
  );
};

export default EditUserPageForm;
