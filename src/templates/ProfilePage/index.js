import React, { useEffect, useState } from 'react';
import * as S from './styles';
import ProfileDatas from '../../components/ProfileDatas';
import AppContainer from '../../components/AppContainer';
import PostsShowcase from '../../components/PostsShowcase';
import PostPhotosModal from '../../components/PostPhotosModal';
import api from '../../utils/api';

const ProfilePage = ({ authUser, user }) => {
  const [datas, setDatas] = useState([]);
  const [postPhotosModalOpened, setPostPhotosModalOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = postPhotosModalOpened ? 'hidden' : 'auto';
  }, [postPhotosModalOpened]);

  useEffect(() => {
    const reqDatas = async () => {
      await api
        .get(`photos/${user.userName}`)
        .then((response) => {
          setDatas(response.data);
          return response.data;
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    };

    reqDatas();
  }, [user.userName]);

  return (
    <S.ProfilePageContainer>
      <AppContainer>
        <ProfileDatas
          authUser={authUser}
          user={user}
          photos={datas}
          setPostPhotosModalOpened={setPostPhotosModalOpened}
        />
        <PostsShowcase
          title="Publicações"
          authUser={authUser}
          photos={datas}
          setPostPhotosModalOpened={setPostPhotosModalOpened}
        />
      </AppContainer>
      {postPhotosModalOpened && (
        <PostPhotosModal
          postPhotosModalOpened={postPhotosModalOpened}
          setPostPhotosModalOpened={setPostPhotosModalOpened}
          photos={datas}
          setPhotos={setDatas}
        />
      )}
    </S.ProfilePageContainer>
  );
};

export default ProfilePage;
