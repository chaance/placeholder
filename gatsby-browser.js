import React from 'react';
import { FontProvider } from './src/lib/providers';

export const wrapRootElement = ({ element }) => {
  return <FontProvider>{element}</FontProvider>;
};
