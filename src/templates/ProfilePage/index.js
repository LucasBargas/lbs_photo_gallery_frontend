import React from 'react';
import * as S from './styles';
import ProfileDatas from '../../components/ProfileDatas';
import useReqApi from '../../hooks/useReqApi';
import AppContainer from '../../components/AppContainer';

const ProfilePage = ({ authUser, user }) => {
  const { datas } = useReqApi(`photos/${user.userName}`);
  return (
    <S.ProfilePageContainer>
      <AppContainer>
        <ProfileDatas authUser={authUser} user={user} photos={datas} />
      </AppContainer>
    </S.ProfilePageContainer>
  );
};

export default ProfilePage;
