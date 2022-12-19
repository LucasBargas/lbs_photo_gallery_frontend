import React, { createContext, useState } from 'react';
import useReqApi from '../hooks/useReqApi';

export const LoggedUserDatasCtx = createContext();

export const LoggedUserDatasProvider = ({ children }) => {
  const { datas, setDatas } = useReqApi('/users/auth-user', true);

  return (
    <LoggedUserDatasCtx.Provider value={{ datas, setDatas }}>
      {children}
    </LoggedUserDatasCtx.Provider>
  );
};
