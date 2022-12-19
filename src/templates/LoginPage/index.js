import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import AppContainer from '../../components/AppContainer';
import FormAuth from '../../components/Form/FormAuth';
import Input from '../../components/Input';
import Button from '../../components/Form/Button';
import ShowPassword from '../../components/Form/ShowPassword';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
  const [userIdentifier, setUserIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [userIdentifierType, setUserIdentifierType] = useState('email');
  const [showPassword, setShowPassword] = useState(false);
  const { login, errorMsg } = useAuth();
  const userIdentifierRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      userIdentifier,
      password,
    };

    login(user);
  };

  useEffect(() => {
    if (userIdentifier.length > 0 && userIdentifier.includes('.com')) {
      setUserIdentifierType('email');
      return;
    }

    setUserIdentifierType('text');
  }, [userIdentifier]);

  useEffect(() => {
    userIdentifierRef.current.focus();
  }, []);

  return (
    <S.LoginPageContainer>
      <AppContainer>
        <S.LoginPageWrapper>
          <FormAuth
            title="Entrar"
            redirectText="Não possui uma conta?"
            redirectHref="/cadastre-se"
            confirmRedirectText="Cadastre-se."
            onSubmit={handleSubmit}
          >
            <Input
              inputRef={userIdentifierRef}
              type={userIdentifierType}
              label="Informe o seu usuário/email*"
              name="userIdentifier"
              placeholder="Seu usuário/email"
              value={userIdentifier}
              handleChange={({ target }) => setUserIdentifier(target.value)}
            />
            <Input
              type={showPassword ? 'text' : 'password'}
              label="Senha*"
              name="password"
              placeholder="Sua senha..."
              handleChange={({ target }) => setPassword(target.value)}
            />
            {errorMsg && <p>{errorMsg}</p>}
            <ShowPassword setShowPassword={setShowPassword} />
            <Button id="button">Entrar</Button>
          </FormAuth>
        </S.LoginPageWrapper>
      </AppContainer>
    </S.LoginPageContainer>
  );
};

export default LoginPage;
