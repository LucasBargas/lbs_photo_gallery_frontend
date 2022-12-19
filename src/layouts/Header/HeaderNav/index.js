import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import useAuthContext from '../../../hooks/useAuthContext';
import userNoPhoto from '../../../../public/user.png';
import * as S from './styles';
import Image from 'next/image';

const noAuthLinks = [
  { title: 'Entrar', path: '/entrar' },
  { title: 'Cadastre-se', path: '/cadastre-se' },
];

const authLinks = [
  { title: 'Meu perfil', path: '/meu-perfil/' },
  { title: 'Editar usuário', path: '/meu-perfil/editar-usuario' },
];

const HeaderNav = () => {
  const { asPath, pathname } = useRouter();
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
          noAuthLinks.map(({ title, path }, index) => (
            <li key={`${title}-${index}`}>
              <Link className={pathname === path ? 'active' : ''} href={path}>
                {title}
              </Link>
            </li>
          ))}

        {authenticated &&
          authLinks.map(({ title, path }, index) => (
            <li key={`${title}-${index}`}>
              <Link
                className={asPath === path ? 'active' : ''}
                href={title === 'Meu perfil' ? `${path}lucas_bargas` : path}
              >
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </S.HeaderNavContainer>
  );
};

export default HeaderNav;
