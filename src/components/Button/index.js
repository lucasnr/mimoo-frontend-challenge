import styled from 'styled-components';

import { colorPrimary } from '../../styles/colors';

const Button = styled.button`
	align-items: center;
	background-color: ${(props) => (props.variant ? '#fff' : colorPrimary)};
	border: none;
	color: ${(props) => (props.variant ? colorPrimary : '#fff')};
	display: flex;
	font-size: 1.25rem;
	font-weight: 600;
	justify-content: center;
	line-height: 1;
	padding: 1rem;
	width: 100%;
`;

export default Button;
