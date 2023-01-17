import React from 'react';
import AppContainer from '../../components/AppContainer';
import * as S from './styles';

const Footer = () => {
  return (
    <S.FooterContainer>
      <AppContainer>
        <p>
          Esta aplicação web foi desenvolvida por{' '}
          <a
            href="https://projetoslucasbargas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Bargas
          </a>
          .
        </p>
        <div>
          <a
            href="https://github.com/LucasBargas/lbs_photo_gallery_frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para visualizar o repositório do Front End no GitHub
          </a>
          <a
            href="https://github.com/LucasBargas/lbs_photo_gallery_backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui para visualizar o repositório do Backend no GitHub
          </a>
        </div>
      </AppContainer>
    </S.FooterContainer>
  );
};

export default Footer;
