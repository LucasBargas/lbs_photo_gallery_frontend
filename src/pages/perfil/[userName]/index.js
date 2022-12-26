import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import HeadPerPage from '../../../components/HeadPerPage';
import useReqApi from '../../../hooks/useReqApi';
import ProfilePage from '../../../templates/ProfilePage';

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
  const { userName } = context.params;
  const res = await fetch(`${apiUrl}/users/${userName}`);
  const user = await res.json();

  return {
    props: { user },
  };
};

const ProfileByUserName = ({ user }) => {
  const { datas } = useReqApi(`${apiUrl}/users/auth-user`, true);
  const router = useRouter();

  useEffect(() => {
    if (datas?.userName === user.userName) {
      router.push('/perfil');
    }
  }, [datas, user.userName, router]);

  return (
    <>
      <HeadPerPage
        title={user.userName}
        url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.asPath}`}
      />

      <ProfilePage authUser={false} user={user} />
    </>
  );
};

export default ProfileByUserName;
