import { useRouter } from 'next/router';
import React from 'react';
import HeadPerPage from '../../components/HeadPerPage';
import useReqApi from '../../hooks/useReqApi';
import EditUserPage from '../../templates/EditUserPage';

const EditUser = () => {
  const { datas } = useReqApi('/users/auth-user', true);
  const router = useRouter();

  return (
    <>
      <HeadPerPage
        title="Editar usuário"
        url={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`}
      />
      {datas && <EditUserPage datas={datas} />}
    </>
  );
};

export default EditUser;
