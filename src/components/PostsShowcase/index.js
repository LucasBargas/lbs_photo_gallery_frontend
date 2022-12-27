import React from 'react';
import * as S from './styles';
import { AiOutlineCamera } from 'react-icons/ai';
import Card from '../Card';

const PostsShowcase = ({
  title,
  authUser,
  home,
  photos,
  setPhotos,
  setPostPhotosModalOpened,
}) => {
  if (!authUser && photos.length === 0) {
    return (
      <S.NoPostsContainer>
        <AiOutlineCamera />
        <h2>Ainda não há nenhuma publicação</h2>
      </S.NoPostsContainer>
    );
  }

  if (authUser && photos.length === 0) {
    return (
      <S.NoPostsContainer>
        <button
          onClick={() => setPostPhotosModalOpened(true)}
          title="Adicionar foto"
        >
          <AiOutlineCamera />
        </button>
        <h2>Compartilhe suas fotos</h2>
        <p>Assim que você compartilha-las, elas aparecerão no seu perfil.</p>
        <span
          onClick={() => setPostPhotosModalOpened(true)}
          title="Adicionar foto"
        >
          Compartilhe sua primeira foto
        </span>
      </S.NoPostsContainer>
    );
  }

  return (
    <S.PostsShowcaseContainer>
      {title && <h2>{title}</h2>}
      <S.PostsShowcaseWrapper>
        {photos.length > 0 &&
          photos.map((photo) => (
            <Card
              key={photo.singlePhoto}
              photo={photo}
              authUser={authUser}
              home={home}
              photos={photos}
              setPhotos={setPhotos}
            />
          ))}
      </S.PostsShowcaseWrapper>
    </S.PostsShowcaseContainer>
  );
};

export default PostsShowcase;
