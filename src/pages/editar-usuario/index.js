import { useRouter } from 'next/router';
import React from 'react';
import HeadPerPage from '../../components/HeadPerPage';
import EditUserPage from '../../templates/EditUserPage';
import bannerImg from '../../../public/photographer_edit.png';

const EditUser = () => {
  const router = useRouter();

  return (
    <>
      <HeadPerPage
        title="Editar usuário"
        url={`${process.env.NEXT_PUBLIC_APP_DOMAIN}${router.pathname}`}
        banner={bannerImg.src}
      />
      <EditUserPage />
    </>
  );
};

export default EditUser;
