import React from 'react';
import * as S from './styles';
import ProfileDatas from '../../components/ProfileDatas';
import useReqApi from '../../hooks/useReqApi';

const ProfilePage = ({ authUser, user }) => {
  const { datas } = useReqApi(`photos/${user.userName}`);
  return (
    <S.ProfilePageContainer>
      <ProfileDatas authUser={authUser} user={user} photos={datas} />
    </S.ProfilePageContainer>
  );
};

export default ProfilePage;
