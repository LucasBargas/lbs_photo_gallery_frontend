import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';

const User = () => {
  const router = useRouter();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    if (!authenticated) router.push('/entrar');
  }, [authenticated, router]);

  return <div>Profile</div>;
};

export default User;
