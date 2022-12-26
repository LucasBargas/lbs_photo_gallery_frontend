import React from 'react';
import ProfileDatas from '../../components/ProfileDatas';
import useReqApi from '../../hooks/useReqApi';

const ProfilePage = ({ user }) => {
  const { datas: photos } = useReqApi(`photos/${user.userName}`);

  return (
    <div>
      <ProfileDatas user={user} />
      <p>{user.userName}</p>
    </div>
  );
};

export default ProfilePage;
