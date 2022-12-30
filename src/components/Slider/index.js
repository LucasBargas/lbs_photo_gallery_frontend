import React, { useState } from 'react';
import * as S from './styles';
import {
  AiOutlineClose,
  AiOutlineFullscreen,
  AiOutlineFullscreenExit,
} from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import api from '../../utils/api';
import useReqApi from '../../hooks/useReqApi';
import useAuthContext from '../../hooks/useAuthContext';

const apiUrlPhotos = process.env.NEXT_PUBLIC_API_PHOTOS_URL;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Slider = ({ authUser, photos, setPhotos, setSlider, sliderActive }) => {
  const { datas } = useReqApi(`${apiUrl}/users/auth-user`, true);
  const { authenticated } = useAuthContext();
  const [fullScreen, setFullScreen] = useState(false);

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
          setSlider(false);
          return response.data;
        })
        .catch((err) => {
          return err.response.data;
        });
    }
  };

  const handleFullScreenWindowClick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullScreen(false);
    }
  };

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) setSlider(false);
  };

  return (
    <S.SliderContainer>
      <S.SliderActions>
        <button
          onClick={handleFullScreenWindowClick}
          title={fullScreen ? 'Restaurar tamanho' : 'Expandir janela'}
        >
          {fullScreen ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
        </button>
        <button onClick={() => setSlider(false)} title="Fechar janela">
          <AiOutlineClose />
        </button>
      </S.SliderActions>

      <S.SliderWrapper onClick={handleOutsideClick}>
        {photos.map((photo) => (
          <S.SliderSingleContent
            key={photo.singlePhoto}
            sliderActive={sliderActive}
          >
            <figure>
              <Image
                src={`${apiUrlPhotos}/${photo.singlePhoto}`}
                alt="Foto"
                height={360}
                width={640}
              />
            </figure>
            <S.SliderSingleContentDetails>
              <div>
                {authenticated &&
                  datas &&
                  photo.userName === datas.userName && (
                    <Link onClick={() => setSlider(false)} href="/perfil">
                      {photo.userName}
                    </Link>
                  )}

                {authenticated &&
                  datas &&
                  photo.userName !== datas.userName && (
                    <Link
                      onClick={() => setSlider(false)}
                      href={`/perfil/${photo.userName}`}
                    >
                      {photo.userName}
                    </Link>
                  )}

                {!authenticated && (
                  <Link
                    onClick={() => setSlider(false)}
                    href={`/perfil/${photo.userName}`}
                  >
                    {photo.userName}
                  </Link>
                )}

                <ul>
                  {Array.isArray(photo.categories) ? (
                    photo.categories.map((category) => (
                      <li key={category}># {category}</li>
                    ))
                  ) : (
                    <li># {photo.categories}</li>
                  )}
                </ul>
              </div>

              {authUser && (
                <S.SliderSingleContentActions>
                  <button
                    title="Deletar foto"
                    onClick={() => handleDeletePhoto(photo.photoId)}
                  >
                    Apagar
                  </button>
                </S.SliderSingleContentActions>
              )}
            </S.SliderSingleContentDetails>
          </S.SliderSingleContent>
        ))}
      </S.SliderWrapper>
    </S.SliderContainer>
  );
};

export default Slider;
