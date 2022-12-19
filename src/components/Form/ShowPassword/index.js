import React from 'react';
import * as S from './styles';

const ShowPassword = ({ setShowPassword }) => {
  const handleInputCheckedChange = ({ target }) => {
    if (target.checked) setShowPassword(true);
    if (!target.checked) setShowPassword(false);
  };

  return (
    <S.ShowPasswordContainer>
      <input type="checkbox" onChange={handleInputCheckedChange} />
      <span>Exibir senha.</span>
    </S.ShowPasswordContainer>
  );
};

export default ShowPassword;
