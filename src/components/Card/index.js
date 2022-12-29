import Image from 'next/image';
import React from 'react';
import * as S from './styles';
import api from '../../utils/api';
import Link from 'next/link';

const apiUrlPhotos = process.env.NEXT_PUBLIC_API_PHOTOS_URL;

const Card = ({
  index,
  photo,
  authUser,
  home,
  photos,
  setPhotos,
  setSlider,
  setSliderActive,
}) => {
  const handleDeletePhoto = async (id) => {
    if (!authUser) return;

    if (window.confirm('Você tem certeza que quer apagar esta foto?')) {
      await api
        .delete(`/photos/delete/${id}`, {
          headers: {
            Authorization:
              typeof window !== 'undefined' &&
              `Bearer ${JSON.parse(
                localStorage.getItem('galleryPhotoApiToken'),
              )}`,
          },
        })
        .then((response) => {
          setPhotos(photos.filter((photo) => photo.photoId !== id));
          return response.data;
        })
        .catch((err) => {
          return err.response.data;
        });
    }
  };

  return (
    <>
      <S.CardContainer>
        <S.CardContentPhoto
          onClick={() => {
            setSlider(true);
            setSliderActive(index + 1);
          }}
        >
          <Image
            src={`${apiUrlPhotos}/${photo.singlePhoto}`}
            alt="Foto"
            height={400}
            width={400}
          />
        </S.CardContentPhoto>

        <S.CardContentCovering>
          {authUser && (
            <S.CardContentCoveringArea>
              <S.CardActions>
                <S.CardButton
                  title="Visualizar foto"
                  onClick={() => {
                    setSlider(true);
                    setSliderActive(index + 1);
                  }}
                >
                  Visualizar
                </S.CardButton>
                <S.CardButton
                  title="Deletar foto"
                  onClick={() => handleDeletePhoto(photo.photoId)}
                >
                  Deletar
                </S.CardButton>
              </S.CardActions>
              <S.CardPostDetails>
                <ul>
                  {Array.isArray(photo.categories) ? (
                    photo.categories.map((category) => (
                      <li key={category}># {category}</li>
                    ))
                  ) : (
                    <li># {photo.categories}</li>
                  )}
                </ul>
              </S.CardPostDetails>
            </S.CardContentCoveringArea>
          )}
          {!authUser && (
            <S.CardContentCoveringArea>
              <S.CardActions>
                <S.CardButton
                  title="Visualizar foto"
                  onClick={() => {
                    setSlider(true);
                    setSliderActive(index + 1);
                  }}
                >
                  Visualizar
                </S.CardButton>
              </S.CardActions>
              <S.CardPostDetails>
                <ul>
                  {Array.isArray(photo.categories) ? (
                    photo.categories.map((category) => (
                      <li key={category}># {category}</li>
                    ))
                  ) : (
                    <li># {photo.categories}</li>
                  )}
                </ul>
              </S.CardPostDetails>
            </S.CardContentCoveringArea>
          )}
          {home && (
            <S.CardContentCoveringArea>
              <S.CardActions>
                <S.CardButton
                  title="Visualizar foto"
                  onClick={() => {
                    setSlider(true);
                    setSliderActive(index + 1);
                  }}
                >
                  Visualizar
                </S.CardButton>
              </S.CardActions>
              <S.CardPostDetails>
                <Link href={`/perfil/${photo.userName}`}>{photo.userName}</Link>

                <ul>
                  {Array.isArray(photo.categories) ? (
                    photo.categories.map((category) => (
                      <li key={category}># {category}</li>
                    ))
                  ) : (
                    <li># {photo.categories}</li>
                  )}
                </ul>
              </S.CardPostDetails>
            </S.CardContentCoveringArea>
          )}
        </S.CardContentCovering>
      </S.CardContainer>
    </>
  );
};

export default Card;
