import React, { useRef, useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import noPhoto from '../../../public/user.png';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import { MdOutlineEdit } from 'react-icons/md';
import api from '../../utils/api';
import { parseCookies } from 'nookies';

const apiUrlUsersPhotos = process.env.NEXT_PUBLIC_API_USERS_URL;

const ProfileDatas = ({ authUser, user, photos, setPostPhotosModalOpened }) => {
  const [previewPhoto, setPreviewPhoto] = useState('');
  const inputFileRef = useRef();

  const handleFileChange = ({ target }) => {
    if (!authUser) return;

    const cookies = parseCookies();
    const token = cookies['galleryPhotoApiToken'];
    if (!token) return;

    setPreviewPhoto(target.files[0]);
    user.userPhoto = target.files[0];

    const formData = new FormData();
    Object.keys(user).forEach((key) => {
      formData.append(key, user[key]);
    });

    postPhoto(formData, token);
  };

  const postPhoto = async (formData, token) => {
    try {
      await api
        .patch('/users/edit', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => response.data);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <S.ProfileDatasContainer authUser={authUser}>
      <figure onClick={() => authUser && inputFileRef.current.click()}>
        {previewPhoto && user.userPhoto && (
          <Image
            src={URL.createObjectURL(previewPhoto)}
            alt="Foto do usuário"
            width={150}
            height={150}
            priority
            title={authUser && 'Alterar foto do perfil'}
          />
        )}

        {previewPhoto && !user.userPhoto && (
          <Image
            src={URL.createObjectURL(previewPhoto)}
            alt="Foto do usuário"
            width={150}
            height={150}
            priority
            title={authUser && 'Alterar foto do perfil'}
          />
        )}

        {!previewPhoto && user.userPhoto && (
          <Image
            src={`${apiUrlUsersPhotos}/${user.userPhoto}`}
            alt="Foto do usuário"
            width={150}
            height={150}
            priority
            title={authUser && 'Alterar foto do perfil'}
          />
        )}

        {!previewPhoto && !user.userPhoto && (
          <Image
            src={noPhoto}
            alt="Foto do usuário"
            width={150}
            height={150}
            priority
            title={authUser && 'Alterar foto do perfil'}
          />
        )}
        {authUser && (
          <input
            ref={inputFileRef}
            type="file"
            name="userPhoto"
            accept="image/*"
            onChange={handleFileChange}
          />
        )}
      </figure>

      <S.ProfileDatasInfos>
        <ul>
          <li>
            <h1>{user.userName}</h1>
          </li>
          {authUser && (
            <>
              <li>
                <Link href="/editar-usuario" title="Editar usuário">
                  <MdOutlineEdit />
                </Link>
              </li>
              <li>
                <S.ProfileDatasAddPhotoBtn
                  title="Adicionar foto"
                  onClick={() => setPostPhotosModalOpened(true)}
                >
                  <FiPlus />
                </S.ProfileDatasAddPhotoBtn>
              </li>
            </>
          )}
        </ul>

        <ul>
          {!photos && (
            <li>
              <strong>0</strong>
              <span>publicações</span>
            </li>
          )}
          {photos && (
            <li>
              <strong>{photos.length}</strong>
              <span>{photos.length === 1 ? 'publicação' : 'publicações'}</span>
            </li>
          )}
        </ul>

        <ul>
          <li>
            <strong>
              {user.firstName} {user.secondName}
            </strong>
          </li>
          <li>
            <p>{user.bio}</p>
          </li>
        </ul>
      </S.ProfileDatasInfos>
    </S.ProfileDatasContainer>
  );
};

export default ProfileDatas;
