import styled from 'styled-components';

export const Wrapper = styled.main`
	background-color: #dfbf94;
	display: flex;
	flex-direction: column;
`;

export const Container = styled.section`
	flex: 1;
	padding: 2.75rem 3.75rem 1rem 3.75rem;
`;

export const Title = styled.h3`
	color: #fff;
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 0.325rem;
	text-align: center;
`;

export const ProductName = styled.h2`
	color: #fff;
	font-size: 2rem;
	font-weight: 700;
	text-align: center;
`;

export const ProductImage = styled.div`
	background-image: url(${(props) => props.source});
	background-size: cover;
	background-position: center;
	display: block;
	height: 23.375rem;
	margin: auto;
	width: 16.5rem;
`;

export const Subtitle = styled.h4`
	font-size: 1.25rem;
	font-weight: 700;
	margin-bottom: 1rem;
	text-align: center;
`;

export const Text = styled.h6`
	font-size: 1.25rem;
	font-weight: 600;
	text-align: center;
`;
