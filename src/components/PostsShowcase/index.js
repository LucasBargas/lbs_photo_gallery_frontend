import React from 'react';
import * as S from './styles';
import { AiOutlineCamera } from 'react-icons/ai';
import Card from '../Card';
import Slider from '../Slider';

const PostsShowcase = ({
  title,
  authUser,
  home,
  photos,
  setPhotos,
  setPostPhotosModalOpened,
  slider,
  setSlider,
  sliderActive,
  setSliderActive,
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
          photos.map((photo, index) => (
            <Card
              key={photo.singlePhoto}
              index={index}
              photo={photo}
              authUser={authUser}
              home={home}
              photos={photos}
              setPhotos={setPhotos}
              setSlider={setSlider}
              sliderActive={sliderActive}
              setSliderActive={setSliderActive}
            />
          ))}
      </S.PostsShowcaseWrapper>
      {slider && (
        <Slider
          authUser={authUser}
          photos={photos}
          setPhotos={setPhotos}
          setSlider={setSlider}
          sliderActive={sliderActive}
        />
      )}
    </S.PostsShowcaseContainer>
  );
};

export default PostsShowcase;
