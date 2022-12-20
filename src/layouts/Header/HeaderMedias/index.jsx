import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import * as S from './styles';

const HeaderMedias = () => (
  <S.HeaderMediasContainer>
    <ul>
      <li>
        <NavLink to="/">
          <FaFacebookF />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <FaTwitter />
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
          <FaInstagram />
        </NavLink>
      </li>
    </ul>
  </S.HeaderMediasContainer>
);

export default HeaderMedias;
