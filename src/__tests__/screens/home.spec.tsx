/* eslint-disable react/function-component-definition */
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components/native';
import { Home } from '../../screens/Home';
import theme from '../../global/styles/theme';
import { Routes } from '../../routes';

const Providers: React.FC = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </ThemeProvider>
);

describe('Home Screen', () => {
  it('should exist welcome title', () => {
    const { getByTestId } = render(<Providers />);

    const textTitle = getByTestId('text-title');

    expect(textTitle.props.children).toContain('Bem vindo, Leitor!');
  });

  it('should be navigate to new book screen', async () => {
    const { getByTestId } = render(<Home />, {
      wrapper: Providers,
    });

    const newBookButton = getByTestId('new-book-button');

    fireEvent(newBookButton, 'press');
    const newScreenContainer = await getByTestId('new-book-container');

    expect(newScreenContainer).toBeTruthy();
  });
});
