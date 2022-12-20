import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppArea from './layouts/AppArea';
import Header from './layouts/Header';
import EditProfile from './pages/EditProfile';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Globals from './styles/Globals';
import Theme from './styles/Theme';

const App = () => (
  <ThemeProvider theme={Theme}>
    <AppArea>
      <Header />
      <main>
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/cadastre-se" element={<Register />} />
          <Route path="/meu-perfil" element={<Profile />} />
          <Route path="/editar-perfil" element={<EditProfile />} />
        </Routes>
      </main>
      <Globals />
    </AppArea>
  </ThemeProvider>
);

export default App;
