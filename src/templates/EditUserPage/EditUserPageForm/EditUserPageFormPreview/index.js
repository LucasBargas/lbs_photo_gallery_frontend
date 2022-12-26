import Image from 'next/image';
import React, { useRef, useState } from 'react';
import * as S from './styles';
import noPhoto from '../../../../../public/user.png';

const apiUrlUsersPhotos = process.env.NEXT_PUBLIC_API_USERS_URL;

const EditUserPageFormPreview = ({ user, setUser }) => {
  const [previewPhoto, setPreviewPhoto] = useState('');
  const inputFileRef = useRef();

  const handleFileChange = ({ target }) => {
    setPreviewPhoto(target.files[0]);
    setUser({ ...user, userPhoto: target.files[0] });
  };

  return (
    <S.EditUserPageFormPreviewContainer>
      <figure
        onClick={() => inputFileRef.current.click()}
        title="Alterar foto do perfil"
      >
        {previewPhoto && user.userPhoto && (
          <Image
            src={URL.createObjectURL(previewPhoto)}
            alt="Foto do usuário"
            width={40}
            height={40}
          />
        )}

        {previewPhoto && !user.userPhoto && (
          <Image
            src={URL.createObjectURL(previewPhoto)}
            alt="Foto do usuário"
            width={40}
            height={40}
          />
        )}

        {!previewPhoto && user.userPhoto && (
          <Image
            src={`${apiUrlUsersPhotos}/${user.userPhoto}`}
            alt="Foto do usuário"
            width={40}
            height={40}
          />
        )}

        {!previewPhoto && !user.userPhoto && (
          <Image src={noPhoto} alt="Foto do usuário" width={40} height={40} />
        )}
      </figure>
      <input
        ref={inputFileRef}
        type="file"
        name="userPhoto"
        accept="image/*"
        onChange={handleFileChange}
      />
      <div>
        <h1>{user.userName}</h1>
        <button onClick={() => inputFileRef.current.click()}>
          Alterar foto do perfil
        </button>
      </div>
    </S.EditUserPageFormPreviewContainer>
  );
};

export default EditUserPageFormPreview;
