import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import useAuthContext from '../../../hooks/useAuthContext';
import * as S from './styles';

const formLinks = [
  { title: 'Entrar', path: '/entrar' },
  { title: 'Cadastrar-se', path: '/cadastrar-se' },
];

const authLinks = [
  { title: 'Minhas fotos', path: '/minhas-fotos' },
  { title: 'Meu perfil', path: '/meu-perfil' },
];

const HeaderNav = () => {
  const { pathname } = useRouter();
  const { authenticated } = useAuthContext();

  return (
    <S.HeaderNavContainer>
      <ul>
        <li>
          <Link className={pathname === '/' ? 'active' : ''} href="/">
            Início
          </Link>
        </li>

        {!authenticated &&
          formLinks.map(({ title, path }, index) => (
            <li key={`${title}-${index}`}>
              <Link className={pathname === path ? 'active' : ''} href={path}>
                {title}
              </Link>
            </li>
          ))}

        {authenticated &&
          authLinks.map(({ title, path }, index) => (
            <li key={`${title}-${index}`}>
              <Link className={pathname === path ? 'active' : ''} href={path}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </S.HeaderNavContainer>
  );
};

export default HeaderNav;
