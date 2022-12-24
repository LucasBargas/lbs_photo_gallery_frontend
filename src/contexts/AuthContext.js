import React, { createContext, useState } from 'react';

export const AuthCtx = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthCtx.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthCtx.Provider>
  );
}
