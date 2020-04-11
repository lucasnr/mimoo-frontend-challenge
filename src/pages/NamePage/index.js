import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';

import Button from '../../components/Button';
import { Container, Title, Form, Input, InputContainer } from './styles';
import { colorPrimary } from '../../styles/colors';

import api from '../../services/api';

export default function NamePage() {
	const history = useHistory();
	const dispatch = useDispatch();
	const inputRef = useRef();

	const handleSubmit = useCallback(
		(event) => {
			event.preventDefault();
			const { value } = inputRef.current;
			if (value.length < 4) {
				alert('Digite um nome com no minimo 4 caracteres');
				return;
			}

			api.get('/products').then(({ data: products }) => {
				dispatch({ type: 'SET_USER', user: { name: value, products } });
				history.push('/products');
			});
		},
		[dispatch, history]
	);

	return (
		<main>
			<Container>
				<Link to="/">
					<FaArrowLeft size={23} color={colorPrimary} />
				</Link>

				<Title>Informe seu nome</Title>
			</Container>

			<Form onSubmit={handleSubmit}>
				<InputContainer>
					<Input required={true} minLength={4} ref={inputRef} name="name" />
				</InputContainer>
				<Button type="submit">Continuar</Button>
			</Form>
		</main>
	);
}
