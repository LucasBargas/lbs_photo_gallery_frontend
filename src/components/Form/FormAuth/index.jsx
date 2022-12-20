import React from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './styles';

const FormAuth = ({
  onSubmit,
  title,
  redirectText,
  redirectHref,
  confirmRedirectText,
  children,
}) => (
  <S.FormAuthContainer onSubmit={onSubmit}>
    <h2>{title}</h2>
    <S.FormAuthWrapper>{children}</S.FormAuthWrapper>
    {redirectText && (
      <S.FormAuthRedirect>
        <p>{redirectText}</p>
        <NavLink to={redirectHref}>{confirmRedirectText}</NavLink>
      </S.FormAuthRedirect>
    )}
  </S.FormAuthContainer>
);

export default FormAuth;
