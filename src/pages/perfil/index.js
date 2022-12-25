import { useRouter } from 'next/router';
import React from 'react';
import HeadPerPage from '../../components/HeadPerPage';
import useReqApi from '../../hooks/useReqApi';
import ProfilePage from '../../templates/ProfilePage';

const MyProfile = () => {
  const { datas } = useReqApi('/users/auth-user', true);
  const router = useRouter();

  return (
    <>
      <HeadPerPage
        title="Perfil"
        url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.pathname}`}
      />
      {datas && <ProfilePage datas={datas} />}
    </>
  );
};

export default MyProfile;
