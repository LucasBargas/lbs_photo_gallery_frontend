import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';

const Login = () => {
  const router = useRouter();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    if (authenticated) router.push('/');
  }, [authenticated, router]);

  return <div>Login</div>;
};

export default Login;
