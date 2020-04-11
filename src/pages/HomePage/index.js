import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import WidthContainer from '../../components/WidthContainer';
import { Container, Logo, Title, Subtitle, Text, Illustration } from './styles';

export default function HomePage() {
	return (
		<main>
			<Container>
				<WidthContainer>
					<Logo />
					<Title>Bem vindo à Mimoo!</Title>
					<Subtitle>Alegre. Divertido. Relevante. Você vai adorar!</Subtitle>
					<Text>Nos conte um pouco sobre você e ganhe pontos!</Text>
				</WidthContainer>

				<Illustration />
			</Container>
			<Link to="/name">
				<Button>Começar</Button>
			</Link>
		</main>
	);
}
