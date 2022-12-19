import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import RegisterPage from '../../templates/RegisterPage';

const Register = () => {
  const router = useRouter();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    if (authenticated) router.push('/');
  }, [authenticated, router]);

  return <RegisterPage />;
};

export default Register;
