import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';

import Button from '../../components/Button';
import { Container, Title, Form, Input, InputContainer } from './styles';
import { colorPrimary } from '../../styles/colors';

export default function NamePage() {
	const dispatch = useDispatch();
	const inputRef = useRef();

	const handleSubmit = useCallback(
		(event) => {
			event.preventDefault();
			const { value: name } = inputRef.current;
			if (name.length < 4) {
				alert('Digite um nome com no minimo 4 caracteres');
				return;
			}

			dispatch({ type: 'SET_USER_REQUESTED', name });
		},
		[dispatch]
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
