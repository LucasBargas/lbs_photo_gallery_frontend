import { useContext } from 'react';
import { LoggedUserDatasCtx } from '../contexts/LoggedUserDatasContext';

const useLoggedUserDatasContext = () => {
  const { datas, setDatas } = useContext(LoggedUserDatasCtx);

  return { datas, setDatas };
};

export default useLoggedUserDatasContext;
