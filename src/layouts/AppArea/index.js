import React from 'react';
import { AppAreaContainer } from './styles';

const AppArea = ({ children, ...props }) => {
  return <AppAreaContainer {...props}>{children}</AppAreaContainer>;
};

export default AppArea;
