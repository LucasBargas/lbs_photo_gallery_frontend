import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import LoginPage from '../../templates/LoginPage';

const Login = () => {
  const router = useRouter();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    if (authenticated) router.push('/');
  }, [authenticated, router]);

  return <LoginPage />;
};

export default Login;
