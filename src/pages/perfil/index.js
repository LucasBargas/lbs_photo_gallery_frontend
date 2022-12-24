import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import HeadPerPage from '../../components/HeadPerPage';
import useAuthContext from '../../hooks/useAuthContext';
import useReqApi from '../../hooks/useReqApi';
import ProfilePage from '../../templates/ProfilePage';

const MyProfile = () => {
  const { datas } = useReqApi('/users/auth-user', true);
  const router = useRouter();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    authenticated ? router.push('/perfil') : router.push('/entrar');
  }, [authenticated, router]);

  return (
    <>
      <HeadPerPage
        title="Perfil"
        url={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`}
      />
      <div>{datas && <ProfilePage datas={datas} />}</div>
    </>
  );
};

export default MyProfile;
