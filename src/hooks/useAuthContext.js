import { useContext } from 'react';
import { AuthCtx } from '../contexts/AuthContext';

const useAuthContext = () => {
  const { authenticated, setAuthenticated } = useContext(AuthCtx);

  return { authenticated, setAuthenticated };
};

export default useAuthContext;
