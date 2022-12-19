import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import HeadPerPage from '../../components/HeadPerPage';
import useLoggedUserDatasContext from '../../hooks/useLoggedUserDatasContext';

const ProfilePage = () => {
  const router = useRouter();
  const { authenticated } = useAuthContext();
  const { datas } = useLoggedUserDatasContext();

  useEffect(() => {
    if (!authenticated) router.push('/');
  }, [authenticated, router]);

  return (
    <>
      <HeadPerPage
        title={
          datas && `${datas.firstName} ${datas.secondName} (${datas.userName})`
        }
        url={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`}
      />
      <p>Página de perfil</p>
    </>
  );
};

export default ProfilePage;
