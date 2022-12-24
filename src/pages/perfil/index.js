import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import HeadPerPage from '../../components/HeadPerPage';
import useReqApi from '../../hooks/useReqApi';
import useAuthContext from '../../hooks/useAuthContext';
import ProfilePage from '../../templates/ProfilePage';

const MyProfile = () => {
  const { datas } = useReqApi('/users/auth-user', true);
  const { authenticated } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (authenticated) {
      router.push('/perfil');
      return;
    }

    router.push('/entrar');
  }, [authenticated, router]);

  return (
    <>
      <HeadPerPage
        title="Perfil"
        url={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`}
      />
      {datas && <ProfilePage datas={datas} />}
    </>
  );
};

export default MyProfile;
