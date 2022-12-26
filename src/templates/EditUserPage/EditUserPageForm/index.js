import React, { useState } from 'react';
import * as S from './styles';
import EditUserPageFormPreview from './EditUserPageFormPreview';
import Button from '../../../components/Form/Button';
import api from '../../../utils/api';
import ShowPassword from '../../../components/Form/ShowPassword';

const EditUserPageForm = ({ datas }) => {
  const [user, setUser] = useState(datas || {});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(user).forEach((key) => {
      formData.append(key, user[key]);
    });

    setLoading(true);
    await api
      .patch('users/edit', formData, {
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
        setError(false);
        return response.data;
      })
      .catch((error) => {
        setLoading(false);
        setError(error.response.data.message);
        return error.response.data;
      });
  };

  return (
    <S.EditUserPageFormContainer>
      <S.EditUserPageFormWrapper>
        <EditUserPageFormPreview user={user} setUser={setUser} />
        <S.EditUserPageFormArea onSubmit={handleSubmit}>
          <S.EditUserPageFormField>
            <label htmlFor="firstName">Primeiro nome</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={user.firstName || ''}
              onChange={handleChange}
            />
          </S.EditUserPageFormField>
          <S.EditUserPageFormField>
            <label htmlFor="secondName">Segundo nome</label>
            <input
              type="text"
              name="secondName"
              id="secondName"
              value={user.secondName || ''}
              onChange={handleChange}
            />
          </S.EditUserPageFormField>
          <S.EditUserPageFormField>
            <label htmlFor="userName">Nome de usuário</label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={user.userName || ''}
              onChange={handleChange}
            />
          </S.EditUserPageFormField>
          <S.EditUserPageFormField>
            <label htmlFor="bio">Biografia</label>
            <textarea
              type="text"
              rows={3}
              name="bio"
              id="bio"
              value={user.bio || ''}
              onChange={handleChange}
            />
          </S.EditUserPageFormField>
          <S.EditUserPageFormField>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={user.email || ''}
              onChange={handleChange}
            />
          </S.EditUserPageFormField>
          <S.EditUserPageFormField>
            <label htmlFor="contact">Contato</label>
            <input
              type="text"
              name="contact"
              id="contact"
              value={user.contact || ''}
              onChange={handleChange}
            />
          </S.EditUserPageFormField>
          <S.EditUserPageFormField>
            <label htmlFor="password">Senha</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              onChange={handleChange}
            />
          </S.EditUserPageFormField>
          <S.EditUserPageFormField>
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChange}
            />
          </S.EditUserPageFormField>
          {message && <p>{message}</p>}
          <ShowPassword setShowPassword={setShowPassword} />
          {loading && <Button loading={loading}>Salvando...</Button>}
          {!loading && <Button loading={loading}>Salvar</Button>}
        </S.EditUserPageFormArea>
      </S.EditUserPageFormWrapper>
    </S.EditUserPageFormContainer>
  );
};

export default EditUserPageForm;
