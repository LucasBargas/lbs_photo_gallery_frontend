import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import authUser from '../helpers/authUser';
import api from '../utils/api';
import useFlashMessages from './useFlashMessages';
import useAuthContext from './useAuthContext';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

const useAuth = () => {
  const { setAuthenticated } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setFlashMessage } = useFlashMessages();

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies['galleryPhotoApiToken'];

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
  }, [setAuthenticated]);

  const register = async (user) => {
    let msgText = 'Cadastro realizado com sucesso!';
    let msgType = 'success';

    try {
      setLoading(true);
      const data = await api
        .post('/users/register', user)
        .then((response) => response.data);

      setAuthenticated(true);
      setCookie(undefined, 'galleryPhotoApiToken', data.token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });
      setTimeout(() => {
        router.push('/');
      }, 1000);
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

  const login = async (user) => {
    let msgText = 'Conta acessada com sucesso!';
    let msgType = 'success';

    try {
      setLoading(true);
      const data = await api
        .post('/users/login', user)
        .then((response) => response.data);

      setAuthenticated(true);
      setCookie(undefined, 'galleryPhotoApiToken', data.token, {
        maxAge: 60 * 60 * 1, // 1 hour
      });
      setTimeout(() => {
        router.push('/');
      }, 1000);
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

  const logout = () => {
    try {
      setAuthenticated(false);
      api.defaults.headers.Authorization = undefined;
      destroyCookie(undefined, 'galleryPhotoApiToken');
      router.push('/entrar');
      return;
    } catch (error) {
      return error;
    }
  };

  return {
    loading,
    register,
    login,
    logout,
  };
};

export default useAuth;
