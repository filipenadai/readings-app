import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, AddBookButton, Header } from './styles';

export function Home() {
  const { navigate } = useNavigation();

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
