import React from 'react';
import { AppRegistry } from 'react-native';

export { wrapPageElement } from './src'

export const replaceHydrateFunction = () => {
  return (element, rootTag, callback) => {
    const RootComponent = () => element;
    AppRegistry.registerComponent('main', () => RootComponent);
    AppRegistry.runApplication('main', { initialProps: {}, rootTag, callback });
  };
};

