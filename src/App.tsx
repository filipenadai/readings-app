/* eslint-disable react/style-prop-object */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './routes';
import theme from './global/styles/theme';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar translucent style="light" />
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
