import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import * as S from './styles';
import { IoClose } from 'react-icons/io5';
import useAuthContext from '../../../hooks/useAuthContext';
import useAuth from '../../../hooks/useAuth';

const noAuthLinks = [
  { title: 'Entrar', path: '/entrar' },
  { title: 'Cadastre-se', path: '/cadastre-se' },
];

const authLinks = [
  { title: 'Meu perfil', path: '/meu-perfil/' },
  { title: 'Editar usuário', path: '/meu-perfil/editar-usuario' },
];

const HeaderNav = ({ setHeaderNavMobile, headerNavMobile }) => {
  const { asPath, pathname } = useRouter();
  const { authenticated } = useAuthContext();
  const { logout } = useAuth();

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
  };

  return (
    <S.HeaderNavContainer
      headerNavMobile={headerNavMobile}
      id="HeaderNavContainer"
    >
      <S.HeaderNavWrapper>
        <S.HeaderMobileButtonClose>
          <button onClick={() => setHeaderNavMobile(false)}>
            <IoClose />
          </button>
        </S.HeaderMobileButtonClose>
        <ul>
          <li>
            <Link
              onClick={() => setHeaderNavMobile(false)}
              className={pathname === '/' ? 'active' : ''}
              href="/"
            >
              Início
            </Link>
          </li>

          {!authenticated &&
            noAuthLinks.map(({ title, path }, index) => (
              <li key={`${title}-${index}`}>
                <Link
                  onClick={() => setHeaderNavMobile(false)}
                  className={pathname === path ? 'active' : ''}
                  href={path}
                >
                  {title}
                </Link>
              </li>
            ))}

          {authenticated &&
            authLinks.map(({ title, path }, index) => (
              <li key={`${title}-${index}`}>
                <Link
                  onClick={() => setHeaderNavMobile(false)}
                  className={asPath === path ? 'active' : ''}
                  href={title === 'Meu perfil' ? `${path}lucas_bargas` : path}
                >
                  {title}
                </Link>
              </li>
            ))}

          {authenticated && <button onClick={handleLogout}>Sair</button>}
        </ul>
      </S.HeaderNavWrapper>
    </S.HeaderNavContainer>
  );
};

export default HeaderNav;
