import React, { useEffect, useState } from 'react';
import * as S from './styles';
import AppContainer from '../AppContainer';
import Image from 'next/image';
import noPhoto from '../../../public/user.png';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';
import { MdOutlineEdit } from 'react-icons/md';

const apiUrlUsersPhotos = process.env.NEXT_PUBLIC_API_USERS_URL;

const ProfileDatas = ({ authUser, user, photos }) => {
  return (
    <S.ProfileDatasContainer>
      <AppContainer>
        <S.ProfileDatasWrapper>
          <figure>
            {user.userPhoto && (
              <Image
                src={`${apiUrlUsersPhotos}/${user.userPhoto}`}
                alt="Foto do usuário"
                width={150}
                height={150}
                priority
              />
            )}
            {!user.userPhoto && (
              <Image
                src={noPhoto}
                alt="Foto do usuário"
                width={150}
                height={150}
                priority
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
                    <S.ProfileDatasAddPhotoBtn title="Adicionar foto">
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
                  <span>
                    {photos.length === 1 ? 'publicação' : 'publicações'}
                  </span>
                </li>
              )}
            </ul>

            <ul>
              <li>
                <strong>
                  {user.firstName} {user.secondName}
                </strong>
              </li>
              <li>{user.bio}</li>
            </ul>
          </S.ProfileDatasInfos>
        </S.ProfileDatasWrapper>
      </AppContainer>
    </S.ProfileDatasContainer>
  );
};

export default ProfileDatas;
