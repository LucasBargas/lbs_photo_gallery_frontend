import Link from 'next/link';
import React from 'react';
import * as S from './styles';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const HeaderMedias = () => {
  return (
    <S.HeaderMediasContainer>
      <ul>
        <li>
          <Link href="/">
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link href="/">
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link href="/">
            <FaInstagram />
          </Link>
        </li>
      </ul>
    </S.HeaderMediasContainer>
  );
};

export default HeaderMedias;
