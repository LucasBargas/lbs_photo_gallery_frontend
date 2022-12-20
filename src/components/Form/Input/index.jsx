import React from 'react';
import * as S from './styles';

const Input = ({
  type,
  name,
  label,
  value,
  handleChange,
  placeholder,
  inputRef,
}) => (
  <S.InputContainer>
    {label && <label htmlFor={name}>{label}</label>}
    <input
      ref={inputRef}
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </S.InputContainer>
);

export default Input;
