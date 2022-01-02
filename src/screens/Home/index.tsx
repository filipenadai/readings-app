import React, { useCallback } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Container, Title, AddBookButton, Header } from './styles';

type RootStackParamList = {
  NewBook: undefined;
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Home({ navigation: { navigate } }: Props) {
  const handleNavigateToNewBook = useCallback(() => {
    navigate('NewBook');
  }, [navigate]);

  return (
    <Container testID="home-container">
      <Header>
        <Title testID="text-title">Bem vindo, Leitor!</Title>
        <AddBookButton
          testID="new-book-button"
          onPress={handleNavigateToNewBook}
        >
          <Title>Novo Livro</Title>
        </AddBookButton>
      </Header>
    </Container>
  );
}
