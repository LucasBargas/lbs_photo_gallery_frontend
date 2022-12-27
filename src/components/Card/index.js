import Image from 'next/image';
import React from 'react';
import * as S from './styles';
import api from '../../utils/api';
import Link from 'next/link';

const apiUrlPhotos = process.env.NEXT_PUBLIC_API_PHOTOS_URL;
const apiUrlUsersPhotos = process.env.NEXT_PUBLIC_API_USERS_URL;

const Card = ({ photo, authUser, home, photos, setPhotos }) => {
  const handleDeletePhoto = async (id) => {
    if (!authUser) return;

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
  };

  return (
    <S.CardContainer>
      <S.CardContentPhoto>
        <Image
          src={`${apiUrlPhotos}/${photo.singlePhoto}`}
          alt="Algo"
          height={400}
          width={400}
          priority
        />
      </S.CardContentPhoto>

      <S.CardContentCovering>
        {authUser && (
          <S.CardContentCoveringArea>
            <S.CardActions>
              <S.CardButton title="Visualizar foto">Visualizar</S.CardButton>
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
              <S.CardButton title="Visualizar foto">Visualizar</S.CardButton>
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
              <S.CardButton title="Visualizar foto">Visualizar</S.CardButton>
            </S.CardActions>
            <S.CardPostDetails>
              <figure>
                <Image
                  src={`${apiUrlUsersPhotos}/${photo.userPhoto}`}
                  alt="Usuário que postou a foto"
                  width={10}
                  height={10}
                />
                <legend>
                  <Link href={`/perfil/${photo.userName}`}>
                    {photo.userName}
                  </Link>
                </legend>
              </figure>

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
  );
};

export default Card;
