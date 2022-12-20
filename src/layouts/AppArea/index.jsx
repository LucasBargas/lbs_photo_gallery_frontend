import React from 'react';
import { AppAreaContainer } from './styles';

const AppArea = ({ children, ...props }) => (
  <AppAreaContainer {...props}>{children}</AppAreaContainer>
);

export default AppArea;
