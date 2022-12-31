import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import authUser from '../helpers/authUser';
import api from '../utils/api';
import useFlashMessages from './useFlashMessages';
import useAuthContext from './useAuthContext';

const useAuth = () => {
  const { setAuthenticated } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setFlashMessage } = useFlashMessages();

  useEffect(() => {
    const token = localStorage.getItem('galleryPhotoApiToken');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
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

      await authUser(setAuthenticated, data.token, router);
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

      await authUser(setAuthenticated, data.token, router);
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
      localStorage.removeItem('galleryPhotoApiToken');
      api.defaults.headers.Authorization = undefined;
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
