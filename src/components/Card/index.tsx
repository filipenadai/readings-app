import React from 'react';

import { Container, Header, Title } from './styles';

interface BookCardProps {
  name: string;
}

export function BookCard({ name }: BookCardProps): JSX.Element {
  return (
    <Container testID="book-card">
      <Header>
        <Title>{name}</Title>
      </Header>
    </Container>
  );
}
