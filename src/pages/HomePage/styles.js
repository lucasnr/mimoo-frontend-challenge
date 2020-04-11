import styled from 'styled-components';

import { colorPrimary } from '../../styles/colors';

import illustration from '../../assets/img/Illustracao.png';
import logo from '../../assets/img/Logo.png';

export const Container = styled.section`
	flex: 1;
	padding: 2.25rem;
	padding-bottom: 1rem;
	width: 100%;
`;

export const Logo = styled.img`
	display: block;
	height: 3.8125rem;
	margin-left: -0.875rem;
	width: 9.5625rem;
`;

Logo.defaultProps = {
	src: logo,
	alt: 'Logomarca da Mimoo',
};

export const Title = styled.h1`
	color: ${colorPrimary};
	font-size: 2.15rem;
	margin-bottom: 1.25rem;
	margin-top: 1.5rem;
`;

export const Subtitle = styled.h2`
	color: ${colorPrimary};
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 1.25rem;
`;

export const Text = styled.h3`
	font-weight: 400;
	max-width: 16.8125rem;
`;

export const Illustration = styled.div`
	background: transparent url(${illustration}) 0% 0% no-repeat padding-box;
	height: 20.6875rem;
	margin-left: 8.0625rem;
	margin-top: -3.625rem;
	width: 36.875rem;

	@media (min-width: 576px) {
		margin-left: calc(8.0625rem + 15vw);
	}
	@media (min-width: 768px) {
		margin-left: calc(8.0625rem + 30vw);
	}
`;
