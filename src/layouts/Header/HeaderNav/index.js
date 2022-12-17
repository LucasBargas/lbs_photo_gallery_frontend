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
  { title: 'Cadastrar-se', path: '/cadastrar-se' },
];

const HeaderNav = () => {
  const { push, pathname } = useRouter();
  const { authenticated } = useAuthContext();
  const [submenu, setSubmenu] = useState(false);

  const handleLogoutClick = () => {
    setSubmenu(false);
    push('/entrar');
  };

  const handleClick = ({ target, currentTarget }) => {
    if (target === currentTarget) setSubmenu(false);
  };

  useEffect(() => {
    const handleOutsideClick = ({ target }) => {
      if (
        !target.closest('li#headerNavButton') &&
        !target.closest('div#headerNavSubmenu')
      )
        setSubmenu(false);
    };
    window.addEventListener('click', handleOutsideClick);
  }, []);

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

        {authenticated && (
          <S.HeaderNavButtonProfile id="headerNavButton">
            <button onClick={() => setSubmenu(!submenu)}>
              <Image src={userNoPhoto} alt="Usuário sem foto" />
              <span>Meu perfil</span>
            </button>

            {submenu && (
              <S.HeaderNavSubmenu id="HeaderNavSubmenu" onClick={handleClick}>
                <ul>
                  <li>
                    <IoClose onClick={() => setSubmenu(false)} />
                  </li>
                  <li onClick={() => setSubmenu(false)}>
                    <Link href="/perfil/lucas_bargas">Meu perfil</Link>
                  </li>
                  <li onClick={() => setSubmenu(false)}>
                    <Link href="/perfil/editar">Editar usuário</Link>
                  </li>
                  <li onClick={handleLogoutClick}>Sair</li>
                </ul>
              </S.HeaderNavSubmenu>
            )}
          </S.HeaderNavButtonProfile>
        )}
      </ul>
    </S.HeaderNavContainer>
  );
};

export default HeaderNav;
