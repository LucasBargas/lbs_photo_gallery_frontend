import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import HeadPerPage from '../../../components/HeadPerPage';
import useReqApi from '../../../hooks/useReqApi';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getStaticPaths = async () => {
  const res = await fetch(`${apiUrl}/users`);
  const users = await res.json();

  const paths = users.map((user) => {
    return {
      params: {
        userName: user.userName.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const resUserByUserName = await fetch(
    `${apiUrl}/users/${context.params.userName}`,
  );
  const userByUserName = await resUserByUserName.json();

  const resPhotos = await fetch(`${apiUrl}/photos/${context.params.userName}`);
  const photos = await resPhotos.json();

  return {
    props: { userByUserName, photos },
  };
};

const ProfileByUserName = ({ userByUserName, photos }) => {
  const { datas } = useReqApi(`${apiUrl}/users/auth-user`, true);
  const router = useRouter();

  useEffect(() => {
    if (datas?.userName === userByUserName.userName) {
      router.push('/perfil');
    }
  }, [datas, userByUserName.userName, router]);

  return (
    <>
      <HeadPerPage
        title={userByUserName.userName}
        url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.asPath}`}
      />

      <p>{userByUserName.userName} - conectado</p>
    </>
  );
};

export default ProfileByUserName;
