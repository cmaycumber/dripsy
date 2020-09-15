import React from 'react';
import { AppRegistry } from 'react-native';

// import { Providers } from './src/components/Providers';

export const replaceHydrateFunction = () => {
  return (element, rootTag, callback) => {
    const RootComponent = () => element;
    AppRegistry.registerComponent('main', () => RootComponent);
    AppRegistry.runApplication('main', { initialProps: {}, rootTag, callback });
  };
};

/** Attaches the all the app providers in global state */
// export const wrapRootElement = ({ element }) => {
//   return <Providers>{element}</Providers>;
// };
