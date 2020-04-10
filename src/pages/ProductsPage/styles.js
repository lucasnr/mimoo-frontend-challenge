import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { colorPrimary } from '../../styles/colors';

export const Container = styled.section`
	padding: 1.875rem 2.25rem;
`;

export const Title = styled.h2`
	font-size: 1.9275rem;
	font-weight: 600;
`;

export const Subtitle = styled.h3`
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 1.25rem;
	margin-top: 0.625rem;
`;

export const Points = styled.h4`
	display: grid;
	font-size: 1.125rem;
	font-weight: 600;
	grid-gap: 0.25rem;
	grid-template-columns: auto 1fr;

	svg {
		display: flex;
		margin: auto;
	}
`;

export const Value = styled.span`
	font-size: 1.5rem;
	font-weight: 700;
	grid-column: 2 / 2;
`;

export const Tabs = styled.section`
	display: flex;
	list-style: none;
	margin-bottom: 2rem;
	margin-top: 0.75rem;

	input {
		display: none;
	}
`;

export const TabLabel = styled.label`
	border-bottom: 0.125rem solid transparent;
	color: #999999;
	cursor: pointer;
	font-size: 1.125rem;
	font-weight: 600;
	margin-right: 0.875rem;
	transition: color 0.3s ease, border-color 0.3s ease;

	input:checked + & {
		border-color: ${colorPrimary};
		color: ${colorPrimary};
	}
`;

export const Link = styled(RouterLink)`
	background-color: ${colorPrimary};
	border-radius: 50%;
	bottom: 4.625rem;
	color: #fff;
	padding: 1.125rem;
	position: fixed;
	right: 2.5rem;
`;
