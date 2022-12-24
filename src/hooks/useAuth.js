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
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('galleryPhotoApiToken');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, [setAuthenticated]);

  const register = async (user) => {
    try {
      setLoading(true);
      const data = await api
        .post('/users/register', user)
        .then((response) => response.data);

      await authUser(setAuthenticated, data.token, router);
      return;
    } catch (error) {
      setErrorMsg(error.response.data.message);
      return;
    } finally {
      setLoading(false);
    }
  };

  const login = async (user) => {
    try {
      setLoading(true);
      const data = await api
        .post('/users/login', user)
        .then((response) => response.data);

      await authUser(setAuthenticated, data.token, router);
      return;
    } catch (error) {
      setErrorMsg(error.response.data.message);
      return;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    try {
      setAuthenticated(false);
      localStorage.removeItem('galleryPhotoApiToken');
      api.defaults.headers.Authorization = undefined;
      router.push('/entrar');
    } catch (error) {
      return error;
    }
  };

  const deleteAccount = async () => {
    const deleteDatas = async () => {
      let msgType = 'success';
      setLoading(true);

      const data = await api
        .delete('/users/delete', {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('galleryPhotoApiToken') || '',
            )}`,
          },
        })
        .then((response) => {
          setAuthenticated(false);
          localStorage.removeItem('galleryPhotoApiToken');
          api.defaults.headers.Authorization = undefined;
          setLoading(false);
          router.push('/entrar');
          return response.data;
        })
        .catch((err) => {
          msgType = 'error';
          setLoading(false);
          return err.response.data;
        });

      setFlashMessage(data.message, msgType);
    };

    deleteDatas();
  };

  return {
    loading,
    register,
    login,
    logout,
    deleteAccount,
    errorMsg,
  };
};

export default useAuth;
