import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import HeadPerPage from '../../components/HeadPerPage';
import useAuthContext from '../../hooks/useAuthContext';
import useReqApi from '../../hooks/useReqApi';
import EditUserPage from '../../templates/EditUserPage';

const EditUser = () => {
  const { datas } = useReqApi('/users/auth-user', true);
  const router = useRouter();
  const { authenticated } = useAuthContext();

  useEffect(() => {
    authenticated ? router.push('/editar-usuario') : router.push('/entrar');
  }, [authenticated, router]);

  return (
    <>
      <HeadPerPage
        title="Editar usuário"
        url={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`}
      />
      <div>{datas && <EditUserPage datas={datas} />}</div>
    </>
  );
};

export default EditUser;
