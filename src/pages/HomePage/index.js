import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import { Container, Logo, Title, Subtitle, Text, Illustration } from './styles';

export default function HomePage() {
  return (
    <main>
      <Container>
        <Logo />
        <Title>Bem vindo à Mimoo!</Title>
        <Subtitle>Alegre. Divertido. Relevante. Você vai adorar!</Subtitle>
        <Text>Nos conte um pouco sobre você e ganhe pontos!</Text>

        <Illustration />
      </Container>
      <Link to="/name">
        <Button>Começar</Button>
      </Link>
    </main>
  );
}
