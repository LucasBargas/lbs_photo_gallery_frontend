import { useEffect, useState } from 'react';
import api from '../utils/api';
import { parseCookies } from 'nookies';

const useReqApi = (url, auth = false) => {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies['galleryPhotoApiToken'];

    if (!token) return;

    const reqDatas = async () => {
      setLoading(true);
      await api
        .get(
          url,
          auth && {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          setDatas(response.data);
          setLoading(false);
          return response.data;
        })
        .catch((err) => {
          setLoading(false);
          return err;
        });
    };

    reqDatas();
  }, [url, auth]);

  return {
    datas,
    setDatas,
    loading,
  };
};

export default useReqApi;
