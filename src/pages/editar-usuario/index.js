import { useRouter } from 'next/router';
import React from 'react';
import HeadPerPage from '../../components/HeadPerPage';
import EditUserPage from '../../templates/EditUserPage';
import bannerImg from '../../../public/photographer_edit.jpg';
import { parseCookies } from 'nookies';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const fetchDatas = async (url, token) => {
  let res;
  let json;

  try {
    res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    json = await res.json();
  } catch (error) {
    json = null;
    return error;
  } finally {
    return json;
  }
};

export const getServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const token = cookies.galleryPhotoApiToken;

  if (!token) {
    return {
      redirect: {
        destination: '/entrar',
        permanent: false,
      },
    };
  }

  const user = await fetchDatas(`${apiUrl}/users/auth-user`, token);

  return {
    props: { user },
  };
};

const EditUser = ({ user }) => {
  const router = useRouter();

  return (
    <>
      <HeadPerPage
        title="Editar usuário"
        url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.pathname}`}
        banner={bannerImg.src}
      />
      <EditUserPage datas={user} />
    </>
  );
};

export default EditUser;
