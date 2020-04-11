import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product.staged);

	const handleClick = useCallback(() => {
		dispatch({ type: 'UNSTAGE_PRODUCT' });
		history.push('/products');
	}, [dispatch, history]);

	const { name, image } = product;
	return (
		<Wrapper>
			<Container>
				<Title>Identiticamos que você consome</Title>
				<ProductName>{name}</ProductName>

				<ProductImage source={image} />

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
