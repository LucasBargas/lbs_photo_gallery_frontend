import React, { createContext, useState } from 'react';

export const AuthCtx = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthCtx.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthCtx.Provider>
  );
};
