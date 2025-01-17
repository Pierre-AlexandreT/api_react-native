/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import Route from './src/Route';
import {Provider} from 'react-native-paper';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider>
      <Route />
    </Provider>
  );
};

export default App;
