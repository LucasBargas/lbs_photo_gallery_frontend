import { useRouter } from 'next/router';
import React from 'react';
import HeadPerPage from '../../../components/HeadPerPage';
import ProfilePage from '../../../templates/ProfilePage';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const fetchDatas = async (url) => {
  let res;
  let json;

  try {
    res = await fetch(url);
    json = await res.json();
  } catch (error) {
    json = null;
    return error;
  } finally {
    return json;
  }
};

// export const getStaticPaths = async () => {
//   const users = await fetchDatas(`${apiUrl}/users`);

//   const paths = users.map((user) => {
//     return {
//       params: {
//         userName: user.userName.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (context) => {
  const { userName } = context.params;
  const user = await fetchDatas(`${apiUrl}/users/${userName}`);

  return {
    props: { user },
  };
};

const ProfileByUserName = ({ user }) => {
  const router = useRouter();

  return (
    <>
      <HeadPerPage
        title={user.userName}
        url={`${process.env.NEXT_PUBLIC_DOMAIN_URL}${router.asPath}`}
      />

      <ProfilePage authUser={false} home={false} user={user} />
    </>
  );
};

export default ProfileByUserName;
