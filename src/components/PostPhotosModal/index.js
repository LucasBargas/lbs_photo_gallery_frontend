import React, { useRef, useState } from 'react';
import * as S from './styles';
import { IoClose } from 'react-icons/io5';
import { IoMdPhotos } from 'react-icons/io';
import Image from 'next/image';
import api from '../../utils/api';
import useFlashMessages from '../../hooks/useFlashMessages';
import FlashMessages from '../FlashMessages';

const categories = [
  'Natureza',
  'Cachorros',
  'Lobos',
  'Peixes',
  'Gatos',
  'Pandas',
  'Doces',
  'Frutas',
  'Universo',
];

const PostPhotosModal = ({
  postPhotosModalOpened,
  setPostPhotosModalOpened,
  photos,
  setPhotos,
}) => {
  const [checkedList, setCheckedList] = useState([]);
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [loading, setLoading] = useState(false);
  const inputFileRef = useRef();
  const { setFlashMessage } = useFlashMessages();

  const handleFileChange = ({ target }) => {
    setPreviewPhoto(target.files[0]);
  };

  const handleCheckedChange = ({ target }) => {
    if (target.checked) {
      setCheckedList([...checkedList, target.value]);
    }

    if (!target.checked) {
      setCheckedList(checkedList.filter((el) => el !== target.value));
    }
  };

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setPostPhotosModalOpened(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('singlePhoto', previewPhoto);

    checkedList.forEach((checked) => {
      formData.append('categories', checked);
    });

    postPhoto(formData);
  };

  const postPhoto = async (formData) => {
    let msgText = 'Foto postada com sucesso!';
    let msgType = 'success';

    try {
      setLoading(true);
      await api
        .post('/photos/register', formData, {
          headers: {
            Authorization:
              typeof window !== 'undefined' &&
              `Bearer ${JSON.parse(
                localStorage.getItem('galleryPhotoApiToken'),
              )}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          setLoading(false);
          setTimeout(() => {
            setPostPhotosModalOpened(false);
          }, 1000);
          setPhotos([response.data, ...photos]);
          return response.data;
        });
      return;
    } catch (error) {
      msgText = error.response.data.message;
      msgType = 'error';
      return;
    } finally {
      setFlashMessage(msgText, msgType);
      setLoading(false);
    }
  };

  return (
    <S.PostPhotosModalContainer>
      <S.PostPhotosModalCloseBtn>
        <button onClick={() => setPostPhotosModalOpened(false)}>
          <IoClose />
        </button>
      </S.PostPhotosModalCloseBtn>
      <S.PostPhotosModalWrapper onClick={handleOutsideClick}>
        <S.PostPhotosModalArea modal={postPhotosModalOpened}>
          <S.PostPhotosModalHeader>
            <h3>Criar nova publicação</h3>
          </S.PostPhotosModalHeader>
          <S.PostPhotosModalCallToPost previewPhoto={previewPhoto}>
            {!previewPhoto && (
              <>
                <IoMdPhotos />
                <h2>Poste sua foto aqui</h2>
              </>
            )}
            {previewPhoto && (
              <Image
                src={URL.createObjectURL(previewPhoto)}
                alt="Foto"
                width={300}
                height={300}
                priority
              />
            )}
            {!previewPhoto && (
              <button onClick={() => inputFileRef.current.click()}>
                Selecione do seu dispositivo
              </button>
            )}
            {previewPhoto && (
              <button onClick={() => inputFileRef.current.click()}>
                Alterar foto
              </button>
            )}
            <input
              ref={inputFileRef}
              type="file"
              name="singlePhoto"
              accept="image/*"
              onChange={handleFileChange}
            />
            {previewPhoto && (
              <S.PostPhotosModalForm loading={loading}>
                <h4>Selecione as categorias disponíveis para a sua foto</h4>

                <form onSubmit={handleSubmit}>
                  <ul>
                    {categories.map((category) => (
                      <li key={category}>
                        <label>
                          <input
                            type="checkbox"
                            checked={checkedList.includes(category)}
                            value={category}
                            onChange={handleCheckedChange}
                          />
                          {category}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <FlashMessages />
                  <button>{loading ? 'Postando...' : 'Postar'}</button>
                </form>
              </S.PostPhotosModalForm>
            )}
          </S.PostPhotosModalCallToPost>
        </S.PostPhotosModalArea>
      </S.PostPhotosModalWrapper>
    </S.PostPhotosModalContainer>
  );
};

export default PostPhotosModal;
