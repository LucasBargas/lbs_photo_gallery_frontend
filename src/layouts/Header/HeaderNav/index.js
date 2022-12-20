import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import * as S from './styles';
import { IoClose } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import useAuthContext from '../../../hooks/useAuthContext';
import useAuth from '../../../hooks/useAuth';
import useLoggedUserDatasContext from '../../../hooks/useLoggedUserDatasContext';

const noAuthLinks = [
  { title: 'Entrar', path: '/entrar' },
  { title: 'Cadastre-se', path: '/cadastre-se' },
];

const HeaderNav = ({ setHeaderNavMobile, headerNavMobile }) => {
  const { asPath, pathname } = useRouter();
  const { authenticated } = useAuthContext();
  const { logout } = useAuth();
  const { datas } = useLoggedUserDatasContext();

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

          {authenticated && (
            <>
              <li>
                <Link
                  onClick={() => setHeaderNavMobile(false)}
                  className={
                    datas && asPath.includes(datas.userName) ? 'active' : ''
                  }
                  href={`/${datas && datas.userName}`}
                >
                  Meu perfil
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setHeaderNavMobile(false)}
                  className={asPath.includes('editar-perfil') ? 'active' : ''}
                  href={`/editar-perfil`}
                >
                  Editar perfil
                </Link>
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
