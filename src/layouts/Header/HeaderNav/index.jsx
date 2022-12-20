import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import * as S from './styles';
import useAuthContext from '../../../hooks/useAuthContext';
import useAuth from '../../../hooks/useAuth';
import useReqApi from '../../../hooks/useReqApi';

const HeaderNav = ({ setHeaderNavMobile, headerNavMobile }) => {
  const { authenticated } = useAuthContext();
  const { logout } = useAuth();
  const { datas } = useReqApi('/users/auth-user', true);

  useEffect(() => {
    const handleOutsideClick = ({ target }) => {
      if (
        headerNavMobile &&
        !target.closest('nav#HeaderNavContainer') &&
        !target.closest('div#HeaderMobileButton')
      ) {
        setHeaderNavMobile(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [headerNavMobile, setHeaderNavMobile]);

  const handleLogout = () => {
    logout();
    setHeaderNavMobile(false);
  };

  return (
    <S.HeaderNavContainer
      headerNavMobile={headerNavMobile}
      id="HeaderNavContainer"
    >
      <S.HeaderNavWrapper>
        <S.HeaderMobileButtonClose>
          <button type="button" onClick={() => setHeaderNavMobile(false)}>
            <IoClose />
          </button>
        </S.HeaderMobileButtonClose>
        <ul>
          <li>
            <NavLink onClick={() => setHeaderNavMobile(false)} to="/">
              Início
            </NavLink>
          </li>

          {!authenticated && (
            <>
              <li>
                <NavLink onClick={() => setHeaderNavMobile(false)} to="/entrar">
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setHeaderNavMobile(false)}
                  to="/cadastre-se"
                >
                  Cadastre-se
                </NavLink>
              </li>
            </>
          )}

          {authenticated && (
            <>
              <li>
                <NavLink
                  onClick={() => setHeaderNavMobile(false)}
                  to="/meu-perfil"
                >
                  Meu perfil
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setHeaderNavMobile(false)}
                  to="/editar-perfil"
                >
                  Editar perfil
                </NavLink>
              </li>
              <S.HeaderButtonLogout onClick={handleLogout}>
                <MdLogout />
              </S.HeaderButtonLogout>
            </>
          )}
        </ul>
      </S.HeaderNavWrapper>
    </S.HeaderNavContainer>
  );
};

export default HeaderNav;
