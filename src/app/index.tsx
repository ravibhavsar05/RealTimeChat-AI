import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
import Initialiser from './Initialiser';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import {ErrorBoundary} from '@xyz/components';
import { Provider } from 'react-redux';
import { store } from './store';

enableScreens();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <ErrorBoundary>
        <PaperProvider theme={theme}>
          <Initialiser />
        </PaperProvider>
      </ErrorBoundary>
      </Provider>
    </SafeAreaProvider>
  );
}
