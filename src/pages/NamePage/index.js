import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import Button from '../../components/Button';
import { Container, Title, Input } from './styles';
import { colorPrimary } from '../../styles/colors';

export default function NamePage() {
	return (
		<main>
			<Container>
				<Link to="/">
					<FaArrowLeft size={23} color={colorPrimary} />
				</Link>

				<Title>Informe seu nome</Title>
				<Input name="name" />
			</Container>

			<Link to="/products">
				<Button>Continuar</Button>
			</Link>
		</main>
	);
}
