import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import HeadPerPage from '../../../components/HeadPerPage';
import useAuthContext from '../../../hooks/useAuthContext';

const ProfileByUserName = () => {
  const router = useRouter();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    authenticated &&
    'userName' in router.query &&
    router.query.userName.length >= 0
      ? router.push(`/perfil/${router.query.userName[0]}`)
      : router.push('/entrar');
  }, [authenticated, router]);

  return (
    <>
      {'userName' in router.query && router.query.userName.length >= 0 && (
        <HeadPerPage
          title={
            'userName' in router.query &&
            router.query.userName.length >= 0 &&
            router.query.userName[0]
          }
          url={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}/${router.query.userName[0]}`}
        />
      )}

      <p>
        {'userName' in router.query &&
          router.query.userName.length >= 0 &&
          router.query.userName[0]}
      </p>
    </>
  );
};

export default ProfileByUserName;
