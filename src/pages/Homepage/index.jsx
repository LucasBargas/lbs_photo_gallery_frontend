import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import useReqApi from '../../hooks/useReqApi';

const Homepage = () => {
  const { datas } = useReqApi('/users/auth-user', true);
  const { authenticated } = useAuthContext();

  return (
    <div>
      {authenticated && datas ? <p>{datas.userName}</p> : <p>Homepage</p>}
    </div>
  );
};

export default Homepage;
