import React, { useEffect, useState } from 'react';
import bus from '../../utils/bus';
import * as S from './styles';

const FlashMessages = () => {
  const [visibiliy, setVisibility] = useState(false);
  const [msg, setMsg] = useState('');
  const [type, setType] = useState('oi');

  useEffect(() => {
    bus.addListener('flash', ({ message, type }) => {
      setVisibility(true);
      // window.scrollTo({ top: 0, behavior: 'smooth' });
      setMsg(message);
      setType(type);

      setTimeout(() => {
        setVisibility(false);
      }, 3000);
    });
  }, []);

  return (
    visibiliy && (
      <S.FlashMessagesContainer id={type}>{msg}</S.FlashMessagesContainer>
    )
  );
};

export default FlashMessages;
