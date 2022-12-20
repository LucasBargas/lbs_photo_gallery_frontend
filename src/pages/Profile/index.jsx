import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import useReqApi from '../../hooks/useReqApi';

const Profile = () => {
  const { datas } = useReqApi('/users/auth-user', true);
  const { authenticated } = useAuthContext();

  return (
    <div>
      {authenticated && datas ? <p>{datas.userName}</p> : <p>Profile</p>}
    </div>
  );
};

export default Profile;
