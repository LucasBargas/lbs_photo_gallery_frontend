import Link from 'next/link';
import React from 'react';
import * as S from './styles';

const FormAuth = ({
  onSubmit,
  title,
  redirectText,
  redirectHref,
  confirmRedirectText,
  children,
}) => {
  return (
    <S.FormAuthContainer onSubmit={onSubmit}>
      <h2>{title}</h2>
      <S.FormAuthWrapper>{children}</S.FormAuthWrapper>
      {redirectText && (
        <S.FormAuthRedirect>
          <p>{redirectText}</p>
          <Link href={redirectHref}>{confirmRedirectText}</Link>
        </S.FormAuthRedirect>
      )}
    </S.FormAuthContainer>
  );
};

export default FormAuth;
