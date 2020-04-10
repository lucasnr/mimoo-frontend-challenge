import styled from 'styled-components';

import { colorPrimary } from '../../styles/colors';

export const Container = styled.main``;

export const Header = styled.header`
	align-items: center;
	display: flex;
	padding: 1.25rem 2.25rem;
`;

export const Title = styled.h2`
	font-size: 1.375rem;
	font-weight: 400;
	margin: auto;
`;

export const ScannerContainer = styled.section`
	position: relative;
`;

export const ScannerContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

export const ScannerHeader = styled.div`
	background-color: rgba(0, 0, 0, 0.57);
	color: #fff;
	font-size: 1.5rem;
	padding: 4rem 3.75rem;
	text-align: center;
`;

export const ScannerSides = styled.div`
	display: flex;
	justify-content: space-between;

	&::before,
	&::after {
		content: ' ';
		background-color: rgba(0, 0, 0, 0.57);
		height: 30vh;
		width: 2rem;
	}
`;

export const ScannerFooter = styled.div`
	background-color: rgba(0, 0, 0, 0.57);
	flex: 1;
`;

export const ScannedLabel = styled.h5`
	background-color: ${colorPrimary};
	color: #fff;
	font-size: 1rem;
	font-weight: 400;
	padding: 1.5rem 2rem 0.75rem 2rem;
	z-index: 5;
`;

export const ScannedCode = styled.h4`
	background-color: ${colorPrimary};
	color: #fff;
	font-size: 1.875rem;
	font-weight: 400;
	padding: 0px 2rem 2rem 2rem;
	z-index: 5;
`;