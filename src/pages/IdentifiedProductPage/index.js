import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import {
	Wrapper,
	Container,
	Title,
	ProductName,
	ProductImage,
	Subtitle,
	Text,
} from './styles';

export default function IdentifiedProductPage() {
	const history = useHistory();
	const handleClick = useCallback(() => {
		history.push('/products');
	}, [history]);

	return (
		<Wrapper>
			<Container>
				<Title>Identiticamos que você consome</Title>
				<ProductName>Jeunesse SPA</ProductName>

				<ProductImage />

				<Subtitle>
					Parabéns
					<br />
					Você ganhou 100 pontos!
				</Subtitle>
				<Text>Continue para ganhar ainda mais pontos</Text>
			</Container>

			<Button onClick={handleClick} variant>
				Salvar
			</Button>
		</Wrapper>
	);
}
