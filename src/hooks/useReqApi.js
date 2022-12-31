import { useEffect, useState } from 'react';
import api from '../utils/api';

const useReqApi = (url, auth = false) => {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const reqDatas = async () => {
      setLoading(true);
      await api
        .get(
          url,
          auth && {
            headers: {
              Authorization:
                typeof window !== 'undefined' &&
                `Bearer ${JSON.parse(
                  localStorage.getItem('galleryPhotoApiToken'),
                )}`,
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
