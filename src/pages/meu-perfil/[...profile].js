import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import EditPage from '../../templates/EditPage';
import ProfilePage from '../../templates/ProfilePage';

const MyProfile = () => {
  const router = useRouter();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    if (!authenticated) router.push('/entrar');
  }, [authenticated, router]);

  return router.query.profile &&
    router.query.profile.includes('lucas_bargas') ? (
    <ProfilePage />
  ) : (
    <EditPage />
  );
};

export default MyProfile;
