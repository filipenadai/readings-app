import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  Container,
  Title,
  AddBookButton,
  Header,
  Content,
  SeparatorItemComponent,
} from './styles';
import { BookCard } from '../../components/Card';

type RootStackParamList = {
  NewBook: undefined;
  Home: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export function Home() {
  const books = [
    {
      id: 'saiusaushia',
      name: 'Pense e enriqueça',
    },
    {
      id: 'fdsfdsfsd',
      name: 'Pense e enriqueça',
    },
    {
      id: 'yg43fgds',
      name: 'Pense e enriqueça',
    },
    {
      id: 'fsdf4ty',
      name: 'Pense e enriqueça',
    },
    {
      id: 'hedr5',
      name: 'Pense e enriqueça',
    },
    {
      id: 'fsdfh4',
      name: 'Pense e enriqueça',
    },
  ];
  const { navigate } = useNavigation<ProfileScreenNavigationProp>();
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
      <Content>
        <FlatList
          data={books}
          ItemSeparatorComponent={SeparatorItemComponent}
          style={{
            marginTop: RFValue(16),
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <BookCard name={item.name} />}
        />
      </Content>
    </Container>
  );
}
