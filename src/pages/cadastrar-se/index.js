import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useAuthContext from '../../hooks/useAuthContext';

const Register = () => {
  const router = useRouter();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    if (authenticated) router.push('/');
  }, [authenticated, router]);

  return <div>Register</div>;
};

export default Register;
