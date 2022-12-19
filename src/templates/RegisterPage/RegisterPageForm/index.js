import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import Button from '../../../components/Form/Button';
import FormAuth from '../../../components/Form/FormAuth';
import Input from '../../../components/Input';

const RegisterPageForm = () => {
  const [user, setUser] = useState({});
  const [inputNameLabelFor, setInputNameLabelFor] = useState('firstName');
  const [showPassword, setShowPassword] = useState(false);
  const firstNameRef = useRef();

  const handleChange = ({ target }) => {
    if (target.name === 'firstName') setInputNameLabelFor('secondName');
    if (target.name === 'secondName') setInputNameLabelFor('firstName');
    setUser({ ...user, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleInputCheckedChange = ({ target }) => {
    if (target.checked) setShowPassword(true);
    if (!target.checked) setShowPassword(false);
  };

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  return (
    <S.RegisterPageFormContainer>
      <FormAuth title="Cadastre-se" onSubmit={handleSubmit}>
        <S.RegisterNameInput>
          <label htmlFor={inputNameLabelFor}>Nos informe o seu nome*</label>
          <S.RegisterNameInputWrapper>
            <Input
              inputRef={firstNameRef}
              type="text"
              name="firstName"
              placeholder="Seu primeiro nome..."
              handleChange={handleChange}
            />
            <Input
              type="text"
              name="secondName"
              placeholder="Seu segundo nome..."
              handleChange={handleChange}
            />
          </S.RegisterNameInputWrapper>
        </S.RegisterNameInput>
        <Input
          type="email"
          label="Nos informe o seu e-mail*"
          name="email"
          placeholder="Exemplo: pedro@bargas.com"
          handleChange={handleChange}
        />
        <Input
          type="text"
          label="Nos informe um número para contato*"
          name="contact"
          placeholder="Exemplo: (11) 9000-000"
          handleChange={handleChange}
        />
        <Input
          type="text"
          label="Defina um nome para usuário*"
          name="userName"
          placeholder="Exemplo: pedro_2022"
          handleChange={handleChange}
        />
        <Input
          type={showPassword ? 'text' : 'password'}
          label="Senha*"
          name="password"
          placeholder="Sua senha..."
          handleChange={handleChange}
        />
        <Input
          type={showPassword ? 'text' : 'password'}
          label="Confirme sua senha*"
          name="confirmPassword"
          placeholder="Confirme sua senha..."
          handleChange={handleChange}
        />
        <S.ShowPassword>
          <input type="checkbox" onChange={handleInputCheckedChange} />
          Exibir senha.
        </S.ShowPassword>
        <Button>Cadastrar</Button>
      </FormAuth>
    </S.RegisterPageFormContainer>
  );
};

export default RegisterPageForm;
