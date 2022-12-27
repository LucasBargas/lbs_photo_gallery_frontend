import Image from 'next/image';
import React from 'react';
import * as S from './styles';
import { AiOutlineCamera } from 'react-icons/ai';

const apiUrlPhotos = process.env.NEXT_PUBLIC_API_PHOTOS_URL;

const PostsShowcase = ({
  title,
  authUser,
  photos,
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
        <button onClick={() => setPostPhotosModalOpened(true)}>
          <AiOutlineCamera />
        </button>
        <h2>Compartilhe suas fotos</h2>
        <p>Assim que você compartilha-las, elas aparecerão no seu perfil.</p>
        <span onClick={() => setPostPhotosModalOpened(true)}>
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
            <figure key={photo.singlePhoto}>
              <Image
                src={`${apiUrlPhotos}/${photo.singlePhoto}`}
                alt="Algo"
                height={400}
                width={400}
                priority
              />
            </figure>
          ))}
      </S.PostsShowcaseWrapper>
    </S.PostsShowcaseContainer>
  );
};

export default PostsShowcase;
